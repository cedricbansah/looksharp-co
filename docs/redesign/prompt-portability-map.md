# Prompt Portability Map (Lovable -> Next.js Landing)

| Prompt Item | Portability | Target File | Decision |
| --- | --- | --- | --- |
| Section order: header -> hero -> category -> how-it-works -> offers -> trust -> FAQ -> final CTA -> footer | Direct | `src/app/page.tsx` | Keep current composition order as implemented. |
| Messaging model: one app for deals + surveys + cashout | Direct | `src/content/site.ts` | Keep existing value proposition copy model and CTA parity. |
| Equal CTA emphasis across web / iOS / Android | Direct | `src/components/CtaGroup.tsx` | Preserve 3-button CTA group and tracking behavior. |
| Placeholder compliance notes for stats/offers/testimonials/legal | Direct | `src/content/site.ts`, `src/components/TrustSection.tsx`, `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` | Keep placeholder messaging until approvals are supplied. |
| Smooth scrolling anchors | Direct | `src/app/globals.css` | Keep `html { scroll-behavior: smooth; }`. |
| Focus-visible orange accent | Direct | `src/app/globals.css` | Keep current focus ring treatment. |
| Reduced-motion fallback | Direct | `src/app/globals.css` | Keep and preserve global reduced-motion override. |
| Header scroll-state styling change (>20px) | Translate | `src/components/StickyHeader.tsx`, `src/app/globals.css` | Implement with `useEffect` + `useState` and CSS class toggle. |
| Mobile menu full-screen overlay | Translate | `src/components/StickyHeader.tsx`, `src/app/globals.css` | Replace details/summary dropdown with controlled overlay menu. |
| Framer Motion entrance animations / AnimatePresence | Translate | `src/app/globals.css`, section components as needed | Use CSS transitions/animations and reduced-motion protection instead of new runtime dependency. |
| Tailwind token semantics (`bg-primary`, `text-muted-foreground`) | Translate | `src/app/globals.css` | Keep existing CSS variables and class-based styling without Tailwind migration. |
| shadcn accordion requirement | Translate | `src/components/FaqSection.tsx`, `src/app/globals.css` | Keep semantic `<details>` FAQ accordion implementation. |
| Cookie settings event `open-cookie-settings` | Translate | `src/components/ConsentBanner.tsx`, `src/components/Footer.tsx` | Support both `looksharp:open-consent` and `open-cookie-settings` events. |
| Hero/right visual treatment from generated assets | Translate | `src/components/HeroSection.tsx`, `src/app/globals.css` | Keep brand asset stack and polish with local CSS only. |
| Final CTA visual emphasis | Translate | `src/components/FinalCtaSection.tsx`, `src/app/globals.css` | Apply stronger CTA styling while preserving component/data model. |
| Vite project scaffold | Ignore | N/A | Not compatible with current Next.js app architecture. |
| React Router route wiring in `App.tsx` | Ignore | N/A | Keep Next.js App Router pages (`/`, `/privacy`, `/terms`, `not-found`). |
| Tailwind config and plugin setup (`tailwind.config.ts`, `tailwindcss-animate`) | Ignore | N/A | Out of scope; no Tailwind migration. |
| shadcn UI dependency installation | Ignore | N/A | Out of scope; no design-system package migration. |
| Generated `src/assets/hero-bg.jpg` import flow | Ignore | N/A | Continue using existing brand assets in `public/brand`. |
