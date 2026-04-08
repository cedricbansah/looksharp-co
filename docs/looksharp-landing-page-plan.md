# LookSharp Marketing Landing Page Plan (Standalone Build)

## Summary
Build a new standalone marketing site for `looksharp.co` (outside the current app repo) that explains LookSharp clearly and drives three equal-priority actions:
- `Start Earning` -> `https://app.looksharp.co` (same tab)
- `iOS App` -> App Store URL (new tab)
- `Android App` -> Play Store URL (new tab)

The page will be a vibrant, bold, single-scroll experience with sticky navigation, CTA clusters at top and bottom, trust signals, short FAQ, legal pages, analytics, consent banner, and production-ready deployment on Firebase Hosting with staging and production environments.

## Locked Product Decisions
- Audience: mixed new + returning users.
- Tone: bold + energetic.
- Value promise: earn rewards fast.
- Page depth: single-page scroll.
- Section set: Hero, How It Works, Trust, FAQ, Final CTA.
- FAQ depth: 3 concise FAQs.
- Trust content: ratings + testimonials (placeholder-ready).
- CTA priority: balanced across all 3 actions.
- CTA labels: `Start Earning`, `iOS App`, `Android App`.
- CTA behavior: web CTA same tab, store CTAs new tabs.
- Store behavior: no auto device redirect.
- Header: simple sticky menu with anchor links.
- CTA placement: top (hero) + bottom (final section).
- Mobile CTA layout: 2+1 grid.
- Visual direction: modern gradient energy, brand-first palette with energetic accents.
- Visual assets: existing approved logo pack, app screenshots + abstract graphics.
- Theme scope: light-only MVP.
- Localization: English only.
- Legal links: in-site `/privacy` and `/terms`, plus Contact mailto.
- Analytics: GA4 + CTA events + campaign forwarding.
- Consent: basic cookie/analytics consent banner.
- Accessibility: practical safe baseline (keyboard/focus/contrast/alt/reduced motion).
- SEO: full SEO basics at launch.
- Performance target: strong Core Web Vitals.
- Hosting: Firebase Hosting.
- Build stack: Next.js + TypeScript + App Router.
- Rendering: static-first (SSG/export-compatible).
- Delivery: GitHub Actions CI/CD.
- Environments: staging + production.
- Canonical domain: `https://looksharp.co`; redirect `www` to apex.
- Post-launch: 2-week optimization pass.

## Technical Architecture
1. Repository and framework
- Create a new repo (separate from `looksharp-mobile`).
- Use Next.js (latest stable) with TypeScript and App Router (`src/app`).
- Use static-compatible architecture (no required server runtime).

2. Routes
- `/` main landing page.
- `/privacy` privacy policy page.
- `/terms` terms page.
- `404` custom not-found page aligned to brand style.

3. Component structure
- `StickyHeader`
- `HeroSection`
- `HowItWorksSection`
- `TrustSection`
- `FaqSection`
- `FinalCtaSection`
- `Footer`
- `CtaGroup` reusable for top and bottom CTA cluster.
- `ConsentBanner`

4. Content/data organization
- Keep content in typed local data modules (`src/content/*.ts`).
- Include placeholders for testimonials/ratings/metrics and FAQ copy.
- Shared ownership flow: engineering seeds defaults, product/marketing finalizes copy via PR.

5. Styling and motion
- Use CSS variables for brand palette and spacing scale.
- Use one display Google Font + one body Google Font.
- Use purposeful moderate motion only (entrance/stagger/hover).
- Respect `prefers-reduced-motion` with reduced/disabled animation path.
- Mobile-first responsive layout; desktop enhancement for hero composition.

## Public APIs / Interfaces / Types (Required)
1. Environment config contract
- `NEXT_PUBLIC_WEB_APP_URL` (default `https://app.looksharp.co`)
- `NEXT_PUBLIC_IOS_APP_URL` (required before launch)
- `NEXT_PUBLIC_ANDROID_APP_URL` (required before launch)
- `NEXT_PUBLIC_SUPPORT_EMAIL` (required before launch)
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (required before launch)
- `NEXT_PUBLIC_SITE_URL` (`https://looksharp.co`)

2. Type definitions
- `LandingConfig` for URL/email/runtime constants.
- `CtaTarget` union: `web | ios | android`.
- `CtaEventPayload` with campaign params and click metadata.
- `FaqItem`, `TestimonialItem`, `TrustMetric` typed content models.

3. Query-param forwarding interface
- Forward known attribution params from landing URL to `app.looksharp.co` on web CTA click.
- Preserve keys: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `ref`, `partner`, `campaign`, `adgroup`, `creative`.
- Drop unknown params unless explicitly allowlisted in config.

4. Analytics event taxonomy
- `landing_view`
- `cta_click_web`
- `cta_click_ios`
- `cta_click_android`
- `consent_updated`
- Common event params: `path`, `section`, `cta_label`, forwarded attribution fields, timestamp.

## Page UX Specification
1. Header
- Sticky, compact header with logo and anchor links: `How it works`, `Trust`, `FAQ`, `Get Started`.
- Include a small persistent `Start Earning` action in header on desktop.
- Mobile header uses compact menu + quick CTA.

2. Hero
- Bold headline and subheadline centered on “earn rewards fast”.
- Visual block combining app screenshots + abstract energetic background elements.
- Primary CTA group with three actions.
- Immediate trust micro-copy near CTA (e.g., ratings/secure payout statement placeholder).

3. How It Works
- 3-step cards with concise copy and iconography.
- Steps framed around quick onboarding, completing tasks, and receiving rewards.

4. Trust
- Ratings/testimonials placeholder cards.
- Optional metrics strip with placeholder values.
- Clear disclaimer that testimonials/ratings are representative placeholders until approved copy lands.

5. FAQ
- 3 short high-friction questions with concise answers.
- Focus on eligibility, payout timing, and platform availability.

6. Final CTA
- Repeat same three-button CTA cluster.
- Reinforce value proposition and remove final hesitation.

7. Footer
- Links: `/privacy`, `/terms`, `mailto:${supportEmail}`.
- Copyright and brand line.
- Minimal social links only if approved assets/URLs exist.

## SEO, Accessibility, and Performance Requirements
1. SEO
- Unique title + meta description.
- Open Graph and Twitter tags.
- Canonical tag set to `https://looksharp.co`.
- `robots.txt` and `sitemap.xml`.
- JSON-LD for `Organization` and `SoftwareApplication` (as applicable).
- 301 redirect `www.looksharp.co` -> `looksharp.co`.

2. Accessibility
- Semantic headings and landmarks.
- Keyboard operability for all nav/buttons/banner.
- Visible focus states.
- AA-level contrast targets for text and controls.
- Alt text for meaningful images.
- Reduced motion support.

3. Performance
- Image optimization and modern formats.
- Font loading strategy with minimal layout shift.
- Script budget discipline (only required analytics + consent logic).
- Target Lighthouse mobile performance and CWV-ready behavior, especially LCP < 2.5s on typical mobile network/device class.

## Consent and Privacy Behavior
- Show basic consent banner on first visit.
- Do not fire GA4 events until consent is accepted.
- Persist consent choice locally.
- Provide a footer link/control to reopen or update consent choice.
- Privacy page documents analytics and outbound link tracking behavior.

## CI/CD and Hosting Plan
1. Environments
- Staging host and production host on Firebase Hosting.
- Staging URL for QA and stakeholder approval before prod promote.

2. GitHub Actions
- PR workflow: install, typecheck, lint, test, build.
- Staging deploy on merges to staging branch (or preview channel strategy).
- Production deploy on tagged release or main branch with protected approval gate.

3. Firebase setup
- Separate hosting targets for staging and production.
- Domain mapping: apex + `www` redirect.
- Cache headers tuned for static assets and HTML freshness.

## Test Plan and Acceptance Scenarios
1. Functional tests
- All three CTA buttons route correctly with expected tab behavior.
- Web CTA forwards allowlisted campaign params correctly.
- Consent banner gates analytics before acceptance.
- Legal/footer links resolve correctly.
- Sticky nav anchor links scroll to correct sections.

2. Cross-platform/browser tests
- Mobile: iOS Safari, Android Chrome.
- Desktop: Chrome, Safari, Firefox, Edge.
- Validate responsive layout and 2+1 CTA layout behavior on small screens.

3. Accessibility checks
- Keyboard-only navigation pass.
- Focus visibility pass.
- Color contrast check.
- Screen-reader sanity pass on landmarks/headings/buttons.

4. SEO/performance checks
- Metadata presence validation.
- Canonical correctness.
- `robots.txt` and `sitemap.xml` reachable.
- Lighthouse spot checks on mobile + desktop.
- Verify `www` redirect behavior.

5. Analytics validation
- Confirm `landing_view` after consent.
- Confirm each CTA click event payload.
- Confirm attribution params propagate into web CTA URL and event payload.

## Delivery Phases (1–2 week target)
1. Day 1-2
- Project scaffold, config schema, layout skeleton, baseline styling tokens.

2. Day 3-5
- Complete sections, CTA behaviors, legal pages, responsive implementation, motion pass, accessibility baseline.

3. Day 6-7
- Analytics + consent integration, SEO artifacts, performance tuning.

4. Day 8-10
- QA matrix, bug fixes, staging signoff, production readiness review, deploy.

5. Post-launch (2-week optimization pass)
- Review CTR and section engagement.
- Tune headline/CTA copy and section ordering if needed.
- Reassess FAQ and trust block copy based on behavior.

## Launch Gates (Must Pass Before Production)
- Real iOS URL provided and validated.
- Real Play Store URL provided and validated.
- Support email provided and validated.
- GA4 Measurement ID provided and receiving events.
- Placeholder trust/testimonial text replaced or explicitly approved.
- Domain redirect and canonical verified.
- Consent + privacy behavior reviewed.

## Assumptions and Defaults
- This project is fully independent from the current `looksharp-mobile` repository.
- No CMS in MVP; content is code-managed.
- English-only launch.
- Light theme only in MVP.
- No app-store auto-redirect by device.
- Unknown constants remain typed placeholders until launch gate completion.
- Copy is co-owned by engineering and product/marketing during implementation.
