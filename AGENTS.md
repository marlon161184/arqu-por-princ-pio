<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep section 05 content in typed `src/data/produtos.ts` (fronts, products, digital-product folders) and client groups in `src/data/clientes.ts`, so content stays independent from presentation.
- Render 05.1 as a 3D card stack (FrentesStack) driven by pure math in `src/lib/stackMath.ts`, and 05.2 as a live index (DigitalIndex); both open one shared modal PastaPanel so focus, Esc and scroll lock live in one place. The 3D tilt is the only motion exception on the page.
- Store uploaded client logos as Lovable Assets pointers in `src/assets/` to keep binaries off the repository; client logos do not replace the Arquê favicon because they are not the app brand.
- Symbol = isolated circumflex (^), component ArqueSymbol; the ê monogram is retired in v1.1. The founder portrait pairs the photo (Lovable Asset, object-cover object-top) with ArqueSymbol in the unchanged flush bottom-left carvão square (~22% width); without a photo the large symbol stays the fallback.
- Load web fonts through the TanStack root head, the project's HTML document owner; there is no index.html.
- Serve the externally generated brand enxoval unchanged at `public/enxoval/enxoval.html`, produced from design-system tokens by a single vector engine; keep it standalone (no iframe), make `/enxoval` a client redirect with a visible fallback link, and link the footer directly to the HTML so the original navigation and exports remain intact.
- Enxoval vector WM/MO sizing and WMW/MOW helpers use the official viewBox aspect ratios; physical millimeter artwork uses standard paths rather than choosing optical paths from millimeter values, so exported marks retain their real height and proportions.
- The supplied enxoval with identity version 1.1 contains 34 pieces in 6 collections (Papelaria, Sinalização, Clubinho Arquê, Digital e social, Kit de onboarding, Kit cliente novo); its primary download button delivers the real PNG, PDF or ZIP at the described dimensions, while the mockup image is a secondary link under "+". Replace the whole external document rather than rebuilding its artwork in React, preserving these exports and links.
- Keep Chlorum outside the entire site. Section 05.3 Clientes is authorized by Newe and Hyndra; its heading, product names and descriptions use pure white (#FFFFFF), without opacity or filters, while the label stays unchanged and the original logos receive no opacity, filter or mix-blend treatment.
- Render 05.3 with ClientesIndex using the shared index wipe/reveal and typed group/item numbering; ClientePasta opens the existing PastaPanel dark variant, so keyboard containment, Escape, focus restoration and scroll locking remain centralized without affecting the light product folders.
- Keep the client-area concept in a standalone route with scoped CSS, typed fictional data and local React state; this isolates its phone presentation and interactions from the institutional site and static enxoval.
- Keep the site footer in `src/components/site/SiteFooter.tsx`, rendered once from the index route, so its links are testable without a router; give new footer links their own line instead of joining the bottom row, which is already at full width.
- Authentication uses Lovable Cloud Auth (email/password + managed Google via `lovable.auth.signInWithOAuth`), with no profiles table; the public sign-in page is `src/routes/auth.tsx` and protected routes live under `src/routes/_authenticated/` behind the client-side gate (`ssr: false`, redirect to `/auth`), because the session lives in browser storage.
