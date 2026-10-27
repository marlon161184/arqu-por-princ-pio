import { QueryClient } from "@tanstack/react-query";
import { createRouter, isRedirect } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as AuthRoute } from "@/routes/auth";
import { Route as AuthGate } from "@/routes/_authenticated/route";

describe("Autenticação e área do cliente", () => {
  it("matches the public sign-in page at /auth", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/auth").at(-1)?.routeId).toBe("/auth");
  });

  it("matches the real client area behind the authenticated gate", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes("/area-do-cliente").at(-1)?.routeId).toBe("/_authenticated/area-do-cliente");
  });

  it("redirects visitors without a session from the gate to /auth", async () => {
    const beforeLoad = AuthGate.options.beforeLoad;
    expect(beforeLoad).toBeTypeOf("function");
    try {
      await beforeLoad!({ location: { href: "/area-do-cliente" } } as never);
      expect.unreachable("o gate deve redirecionar quem não tem sessão");
    } catch (error) {
      expect(isRedirect(error)).toBe(true);
      expect((error as { to?: string }).to).toBe("/auth");
    }
  });

  it("keeps the intended destination same-origin on the sign-in page", () => {
    const validate = AuthRoute.options.validateSearch;
    expect(validate?.({ redirect: "/area-do-cliente" })).toEqual({ redirect: "/area-do-cliente" });
    expect(validate?.({ redirect: "https://exemplo-externo.com" })).toEqual({ redirect: "/area-do-cliente" });
    expect(validate?.({})).toEqual({ redirect: "/area-do-cliente" });
  });
});
