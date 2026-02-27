# LookSharp Redesign Handoff

## Creative Direction
The redesign blends three references into one system:
- Insightis Africa: editorial hierarchy, confidence-first messaging, concise navigation.
- Rakuten: conversion rhythm, step-based onboarding, repeated CTA pressure.
- UNiDAYS: category-led browsing and dense offer-card exploration.

This is implemented with LookSharp brand assets only (no net-new paid/stock visuals).

## Global Layout Rhythm
1. Sticky Header
2. Hero + immediate value strip
3. Category discovery rail
4. How it works (3 cards)
5. Offer wall (6 cards)
6. Trust and proof (stats + assurance + testimonials)
7. FAQ
8. Final CTA
9. Footer

## Messaging Framework
- Primary value proposition: one app for deals + surveys + faster reward conversion.
- Supporting value: trust controls, transparent tracking, platform parity.
- Conversion behavior: equal emphasis on web / iOS / Android entry points.

## Section Specs

### 1) Header
- Left: LookSharp logo.
- Center (desktop): anchor nav.
- Right: persistent Start Earning CTA.
- Mobile: details/summary menu with same anchors and CTA.

### 2) Hero
- Left column:
  - Badge: `Insightis Africa Company`
  - H1 and supporting copy
  - 3 short value bullets
  - 3-button CTA group
  - trust microcopy
- Right column:
  - 3 stat cards (24h, 125k+, 40k+)
  - brand visual stack using existing SVG assets

### 3) Category Rail
- Horizontally scrollable on mobile.
- Wrapped card-style grid feel on wider breakpoints.
- 6 categories with short descriptions and small category tags.

### 4) How It Works
- 3 numbered cards.
- Copy flow: onboarding -> engagement -> redemption.

### 5) Offer Wall
- 6 placeholder offer cards.
- Card parts: badge, category label, brand, title, savings line, disclaimer, action link.
- Representative placeholder language retained for staging.

### 6) Trust and Proof
- 3 proof-stat cards.
- 3 assurance cards.
- 2 testimonial cards.
- placeholder note for compliance review.

### 7) FAQ
- Accordion rows.
- Summary includes question + optional group tag.

### 8) Final CTA
- Reinforcement headline + short reassurance line.
- Repeated balanced 3-button CTA cluster.

### 9) Footer
- Brand line + legal/support links.
- Cookie settings trigger remains.

## Component States To Build in Figma
- Header: default, sticky, mobile menu open.
- CTA buttons: default, hover, focus-visible.
- Offer card: default, hover.
- FAQ item: collapsed, expanded.
- Consent banner: visible/default.

## Accessibility and Motion Notes
- Focus-visible outlines use orange brand accent.
- Motion is subtle (lift/float), with reduced-motion fallback.
- Contrast is kept high in body copy and control states.

## Copy Notes
- Trust stats and featured offers are placeholders and need legal/marketing approval before production launch.
