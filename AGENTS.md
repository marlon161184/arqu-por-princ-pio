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

- Keep digital portfolio content in typed `src/data/produtos.ts` and render it through focused suite, index, row, palette and typography components so content and presentation remain independent.
- Store uploaded portfolio media as Lovable Assets pointers in `src/assets/produtos/` to keep binaries off the repository.
- Load web fonts through the TanStack root head, the project's HTML document owner; there is no index.html.
- Serve the externally generated brand enxoval unchanged at `public/enxoval/enxoval.html`, produced from design-system tokens by a single vector engine; keep it standalone (no iframe), make `/enxoval` a client redirect with a visible fallback link, and link the footer directly to the HTML so the original navigation and exports remain intact.
- The supplied enxoval version 2 contains 29 pieces in five collections (Papelaria, Sinalização, Clubinho Arquê, Digital e social, Kit de onboarding gamificado), with final-size SVG, PNG and PDF downloads; replace the whole external document rather than rebuilding its artwork in React.
- Bind suite accent and palette specimens from typed data; all surrounding interface colors use Arquê tokens so suite colors do not become interface themes.
- Declare natural-ratio portfolio images in typed suite data so image framing stays independent of suite-specific presentation conditions.
- Keep the client-area concept in a standalone route with scoped CSS, typed fictional data and local React state; this isolates its phone presentation and interactions from the institutional site and static enxoval.
- Keep the site footer in `src/components/site/SiteFooter.tsx`, rendered once from the index route, so its links are testable without a router; give new footer links their own line instead of joining the bottom row, which is already at full width.
