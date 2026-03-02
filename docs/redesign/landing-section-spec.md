# LookSharp Landing Section Spec (Canonical)

## Metadata
- Spec Version: `1.0.0`
- Last Updated: `February 27, 2026`
- Source Priority: `landing-section-spec.md` > active implementation notes > historical docs (`prompt-portability-map.md`, `looksharp-redesign-handoff.md`, `redesign.txt`)

## Section ID Contract
- `HEADER`
- `HERO`
- `CATEGORY_RAIL`
- `HOW_IT_WORKS`
- `OFFER_WALL`
- `TRUST_PROOF`
- `FAQ`
- `FINAL_CTA`
- `FOOTER`
- `COOKIE_CONSENT`
- `LEGAL_PRIVACY`
- `LEGAL_TERMS`
- `NOT_FOUND`

## Global Rules
### CTA Parity Rules
- Web, iOS, and Android CTA intent must stay visible in both `HERO` and `FINAL_CTA`.
- CTA tracking must remain enabled through existing analytics functions (`trackCtaClick`).
- Web CTA must preserve attribution forwarding behavior from URL params.
- CTA labels must stay synchronized between UI and tracking payload labels.

### Placeholder/Compliance Rules
- Offer, trust metrics, testimonial, and legal placeholder content can remain in staging but must be clearly marked.
- Production launch requires legal/marketing approval for all placeholder claims.

### Consent Event Compatibility
- Cookie settings reopen behavior must respond to both events:
  - `looksharp:open-consent`
  - `open-cookie-settings`
- Compatibility must be maintained for both `window` and `document` dispatch sources.

## Section Map
| Section ID | Component/Route | Anchor/Path | Primary Data Source |
| --- | --- | --- | --- |
| `HEADER` | `src/components/StickyHeader.tsx` | `#top` nav anchors | `src/content/site.ts` (`navItems`) |
| `HERO` | `src/components/HeroSection.tsx` | `#top` | `src/content/site.ts` (`heroContent`) |
| `CATEGORY_RAIL` | `src/components/CategoryRailSection.tsx` | `#categories` | `src/content/site.ts` (`dealCategories`) |
| `HOW_IT_WORKS` | `src/components/HowItWorksSection.tsx` | `#how-it-works` | `src/content/site.ts` (`steps`) |
| `OFFER_WALL` | `src/components/OfferWallSection.tsx` | `#offers` | `src/content/site.ts` (`featuredOffers`) |
| `TRUST_PROOF` | `src/components/TrustSection.tsx` | `#trust` | `src/content/site.ts` (`proofStats`, `assuranceItems`, `testimonials`) |
| `FAQ` | `src/components/FaqSection.tsx` | `#faq` | `src/content/site.ts` (`faqs`) |
| `FINAL_CTA` | `src/components/FinalCtaSection.tsx` | `#get-started` | static copy + shared `CtaGroup` |
| `FOOTER` | `src/components/Footer.tsx` | footer | `src/lib/config.ts` + static links |
| `COOKIE_CONSENT` | `src/components/ConsentBanner.tsx` | fixed bottom banner | `src/lib/analytics.ts` consent functions |
| `LEGAL_PRIVACY` | `src/app/privacy/page.tsx` | `/privacy` | static content + `legalPlaceholderNotes.privacy` |
| `LEGAL_TERMS` | `src/app/terms/page.tsx` | `/terms` | static content + `legalPlaceholderNotes.terms` |
| `NOT_FOUND` | `src/app/not-found.tsx` | `*` | static content |

---

## `HEADER`
### Goal
Provide fast orientation and immediate conversion entry from every viewport.

### Current Behavior
- Sticky header with logo, desktop anchor nav, and persistent `Start Earning` CTA.
- Scroll-state visual change triggers above 20px scroll.
- Mobile menu opens full-screen overlay with nav links and `Start Earning` CTA.

### Target Behavior
- Keep current behavior unless explicitly edited in this section.

### Visual Changes
- None by default.

### Copy Changes
- Nav labels remain sourced from `navItems`.

### Interaction Changes
- Keep scroll-state toggle, mobile menu open/close, `Escape` close, and body scroll lock behavior.

### Responsive Rules
- Desktop nav visible above mobile breakpoint.
- Mobile menu trigger and overlay used at mobile/tablet breakpoints.

### Accessibility Rules
- Keep `aria-label` on logo and navs.
- Keep `aria-expanded` and `aria-controls` on mobile menu button.

### Constraints / Non-Goals
- No route architecture changes.
- No replacement of anchor navigation with client router logic.

### Acceptance Checks
- [ ] Header style changes at >20px scroll.
- [ ] Mobile menu opens/closes correctly (button, link click, `Escape`).
- [ ] `Start Earning` CTA in header still tracks as `section="header"`.

---

## `HERO`
### Goal
Deliver primary value proposition and platform CTA parity above the fold.

### Current Behavior
- Left: badge, headline, description, value bullet list, 3-button CTA group, trust microcopy.
- Right: 3 stat cards plus brand visual stack.

### Target Behavior
- Keep two-column value-and-proof layout and three-platform CTA cluster.

### Visual Changes
- None by default.

### Copy Changes
- Hero copy remains sourced from `heroContent`.

### Interaction Changes
- CTA clicks must preserve attribution and tracking logic.

### Responsive Rules
- Collapse to one-column stack on narrower viewports.

### Accessibility Rules
- Decorative visuals remain `aria-hidden`.
- Ensure contrast remains readable over gradient background.

### Constraints / Non-Goals
- Do not remove any of the three CTA targets (`web`, `ios`, `android`).

### Acceptance Checks
- [ ] Hero displays badge, headline, supporting copy, and bullet list.
- [ ] Three CTA buttons render and function.
- [ ] Stat cards and visual stack render without layout overlap.

---

## `CATEGORY_RAIL`
### Goal
Support quick category-oriented browsing mental model.

### Current Behavior
- Section heading plus category card rail sourced from `dealCategories`.
- Horizontal overflow behavior enabled by CSS grid + overflow.

### Target Behavior
- Keep category discoverability between hero and how-it-works sections.

### Visual Changes
- None by default.

### Copy Changes
- Category title/description/tag remain data-driven.

### Interaction Changes
- Cards remain non-navigating informational items unless explicitly changed.

### Responsive Rules
- Must remain horizontally scannable on smaller screens.

### Accessibility Rules
- Keep list semantics via `role="list"` and `role="listitem"`.

### Constraints / Non-Goals
- No backend/data model expansion required by default.

### Acceptance Checks
- [ ] All category cards from `dealCategories` render.
- [ ] Section remains positioned after hero and before how-it-works.

---

## `HOW_IT_WORKS`
### Goal
Explain onboarding-to-reward flow in three steps.

### Current Behavior
- Three cards generated from `steps` with numeric indices.

### Target Behavior
- Keep three-step progression and conversion-oriented framing.

### Visual Changes
- None by default.

### Copy Changes
- Step titles/descriptions remain in `steps`.

### Interaction Changes
- None required (informational section).

### Responsive Rules
- Multi-column on wider screens; stacked on smaller screens.

### Accessibility Rules
- Step order must remain clear in DOM order.

### Constraints / Non-Goals
- No animation library dependency required.

### Acceptance Checks
- [ ] Exactly three steps render.
- [ ] Sequence remains onboarding -> engagement -> redemption.

---

## `OFFER_WALL`
### Goal
Show representative offers that drive conversion intent.

### Current Behavior
- Six cards from `featuredOffers`, each with badge/category/brand/title/savings/disclaimer/link.

### Target Behavior
- Preserve representative placeholder framing until production offers are approved.

### Visual Changes
- None by default.

### Copy Changes
- Offer card content remains data-driven from `featuredOffers`.

### Interaction Changes
- Offer card action links route to final CTA anchor (`#get-started`) unless explicitly changed.

### Responsive Rules
- Grid adapts from multi-column to single-column on small screens.

### Accessibility Rules
- Offer titles remain semantic headings (`h3`).

### Constraints / Non-Goals
- No live offer API integration by default.

### Acceptance Checks
- [ ] Six offer cards render.
- [ ] Placeholder disclaimer remains visible.
- [ ] Offer action link remains functional.

---

## `TRUST_PROOF`
### Goal
Establish credibility via metrics, assurances, and testimonials.

### Current Behavior
- Stats strip (`proofStats`), assurance cards (`assuranceItems`), testimonial cards (`testimonials`), and placeholder note.

### Target Behavior
- Keep trust narrative structure before FAQ and final CTA.

### Visual Changes
- None by default.

### Copy Changes
- Trust copy remains sourced from `site.ts`.

### Interaction Changes
- None required.

### Responsive Rules
- Grids collapse progressively at defined breakpoints.

### Accessibility Rules
- Keep readable contrast and semantic heading structure.

### Constraints / Non-Goals
- No unapproved hard claims in production without signoff.

### Acceptance Checks
- [ ] All three trust layers render (stats, assurances, testimonials).
- [ ] Placeholder note remains present in staging.

---

## `FAQ`
### Goal
Address common objections and reduce conversion friction.

### Current Behavior
- `<details>` accordion rows generated from `faqs`, optional group tags in summary.

### Target Behavior
- Keep collapsible FAQ interaction with concise Q/A format.

### Visual Changes
- None by default.

### Copy Changes
- FAQ entries remain data-driven from `faqs`.

### Interaction Changes
- Native expand/collapse behavior retained unless explicitly replaced.

### Responsive Rules
- FAQ remains readable on mobile with full-width rows.

### Accessibility Rules
- Preserve native keyboard and screen-reader behavior from `<details>/<summary>`.

### Constraints / Non-Goals
- No dependency migration to external accordion library by default.

### Acceptance Checks
- [ ] All FAQ rows render.
- [ ] Expand/collapse works via pointer and keyboard.

---

## `FINAL_CTA`
### Goal
Repeat platform-choice conversion push near page end.

### Current Behavior
- Section heading, supporting copy, and shared 3-button `CtaGroup`.

### Target Behavior
- Maintain CTA parity and visual prominence.

### Visual Changes
- None by default.

### Copy Changes
- Keep current reinforcement messaging unless edited here.

### Interaction Changes
- CTA tracking section value remains `final-cta`.

### Responsive Rules
- CTA group reflows for mobile; Android button may span full width on narrow screens.

### Accessibility Rules
- Maintain visible focus states and readable contrast.

### Constraints / Non-Goals
- Do not reduce CTA set below three platforms.

### Acceptance Checks
- [ ] Section renders after FAQ.
- [ ] Three CTAs render and track clicks.

---

## `FOOTER`
### Goal
Provide legal/support exits and repeated brand trust anchor.

### Current Behavior
- Brand block, legal/support links, cookie settings button, copyright line.
- Cookie settings dispatches both consent-open events on `window` and `document`.

### Target Behavior
- Keep legal/support discoverability and consent reopen control.

### Visual Changes
- None by default.

### Copy Changes
- Footer brand/support text remains concise and neutral.

### Interaction Changes
- Cookie settings button must continue to reopen consent banner.

### Responsive Rules
- Link layout must stay readable and tappable on small screens.

### Accessibility Rules
- Keep nav landmark and button semantics.

### Constraints / Non-Goals
- No hidden legal links.

### Acceptance Checks
- [ ] Privacy and Terms links resolve.
- [ ] Cookie settings button reopens banner.

---

## `COOKIE_CONSENT`
### Goal
Capture analytics consent with explicit user choice.

### Current Behavior
- Banner appears when consent not yet set.
- Buttons set `looksharp_analytics_consent` to `granted` or `denied`.
- Reopen supported via both consent events from `window` and `document`.

### Target Behavior
- Maintain explicit consent gating before analytics event emission.

### Visual Changes
- None by default.

### Copy Changes
- Keep clear analytics-consent explanation text.

### Interaction Changes
- Accept/decline actions must persist and hide banner.
- Accept path may load analytics and emit consent/landing events.

### Responsive Rules
- Banner must remain usable at narrow widths.

### Accessibility Rules
- Keep clear button labels and readable text.

### Constraints / Non-Goals
- Do not bypass consent gating in analytics flow.

### Acceptance Checks
- [ ] Banner appears only when no stored consent exists.
- [ ] Accept/decline writes expected values.
- [ ] Reopen event handling works for both event names and dispatch targets.

---

## `LEGAL_PRIVACY`
### Goal
Provide readable privacy baseline for staging and production replacement.

### Current Behavior
- `/privacy` route with back link, placeholder note, and structured policy sections.

### Target Behavior
- Keep route and structure stable for legal copy updates.

### Visual Changes
- None by default.

### Copy Changes
- Placeholder note remains until legal-approved text is supplied.

### Interaction Changes
- Back link returns to `/`.

### Responsive Rules
- Legal layout remains readable at mobile widths.

### Accessibility Rules
- Semantic headings and paragraph flow preserved.

### Constraints / Non-Goals
- No removal of placeholder disclaimer before approved replacement.

### Acceptance Checks
- [ ] `/privacy` renders.
- [ ] Placeholder note is visible.

---

## `LEGAL_TERMS`
### Goal
Provide readable terms baseline for staging and production replacement.

### Current Behavior
- `/terms` route with back link, placeholder note, and structured sections.

### Target Behavior
- Keep route and structure stable for legal copy updates.

### Visual Changes
- None by default.

### Copy Changes
- Placeholder note remains until legal-approved text is supplied.

### Interaction Changes
- Back link returns to `/`.

### Responsive Rules
- Legal layout remains readable at mobile widths.

### Accessibility Rules
- Semantic headings and paragraph flow preserved.

### Constraints / Non-Goals
- No removal of placeholder disclaimer before approved replacement.

### Acceptance Checks
- [ ] `/terms` renders.
- [ ] Placeholder note is visible.

---

## `NOT_FOUND`
### Goal
Provide clear recovery path for invalid routes.

### Current Behavior
- Simple 404 page with kicker, heading, explanatory copy, and return-home link.

### Target Behavior
- Keep straightforward recovery experience unless explicitly redesigned.

### Visual Changes
- None by default.

### Copy Changes
- Keep concise 404 messaging.

### Interaction Changes
- Return-home link points to `/`.

### Responsive Rules
- Centered, readable layout across viewport sizes.

### Accessibility Rules
- Keep semantic heading and link focus visibility.

### Constraints / Non-Goals
- Do not remove clear route back to home.

### Acceptance Checks
- [ ] Unknown routes render this page.
- [ ] Return-home link works.

---

## Revision Log
| Revision ID | Date | Section IDs Touched | Summary | Author |
| --- | --- | --- | --- | --- |
| `R-2026-02-27-001` | `2026-02-27` | `ALL` | Initial canonical spec seeded from current implementation and redesign docs. | `Codex` |
