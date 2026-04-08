# Lovable Delta Reference (Non-Authoritative)

## Metadata
- Last Updated: `February 27, 2026`
- Reference Source: `https://earn-win-cash.lovable.app`
- Evidence Used:
  - Published page HTML/CSS/JS payload inspection.
  - OpenGraph full-page snapshot from page metadata.
- Authority: `Reference only`. Execution authority is `landing-section-spec.md`.

## Usage Rule
- Use this document to compare current implementation against Lovable styling/content direction.
- Do not execute directly from this file without corresponding edits in `landing-section-spec.md`.

---

## `HEADER`
### Current (repo)
- Single primary CTA (`Start Earning`), anchor nav, mobile overlay menu, scroll-state styling.

### Reference (Lovable)
- Similar sticky nav structure, includes dual top-right CTA treatment (`Start Earning` + secondary app CTA).

### Delta to apply
- Evaluate whether to add secondary desktop CTA and align top-nav CTA hierarchy.

### Priority
- `P1`

---

## `HERO`
### Current (repo)
- Two-column hero with value bullets, 3 CTAs, stats cards, and brand visual stack.

### Reference (Lovable)
- Stronger conversion headline density, short value framing, bright yellow primary CTA, clean ghost store CTAs, and broader trust framing.

### Delta to apply
- Tighten headline/subtitle copy length and increase conversion punch while keeping three-platform CTA parity.

### Priority
- `P0`

---

## `CATEGORY_RAIL`
### Current (repo)
- Six category cards with tag + title + description.

### Reference (Lovable)
- Category discovery is lighter and chip/pill-like in tone; copy footprint is shorter.

### Delta to apply
- Decide whether to shift from dense cards toward lighter category token style.

### Priority
- `P1`

---

## `HOW_IT_WORKS`
### Current (repo)
- Three cards with long descriptions and numeric labels.

### Reference (Lovable)
- Three compact step cards with concise verbs (`Exclusive Discounts`, `Complete & Earn`, `Cash Out` pattern).

### Delta to apply
- Shorten step copy and increase scanability.

### Priority
- `P1`

---

## `OFFER_WALL`
### Current (repo)
- Six detailed offer cards with placeholder disclaimer and conversion link.

### Reference (Lovable)
- Offer cards are visually lighter, with clearer savings emphasis and concise labels.

### Delta to apply
- Reduce card density and strengthen savings hierarchy.

### Priority
- `P1`

---

## `TRUST_PROOF`
### Current (repo)
- 3 proof stats, 3 assurance cards, 2 testimonials, placeholder note.

### Reference (Lovable)
- 4 compact metrics, badge-style trust chips, 3 testimonials with rating stars, stronger social proof framing.

### Delta to apply
- Consider adding one metric and compressing assurance items into lighter trust chips.

### Priority
- `P1`

---

## `FAQ`
### Current (repo)
- Native `<details>` FAQ rows with optional group tags.

### Reference (Lovable)
- Card-like accordion rows with stronger question-first hierarchy and polished spacing.

### Delta to apply
- Tighten FAQ question language and align row styling with cleaner card rhythm.

### Priority
- `P1`

---

## `FINAL_CTA`
### Current (repo)
- Reinforcement heading + paragraph + shared 3-button CTA group.

### Reference (Lovable)
- Strong mirrored hero treatment, concise reassurance text, and consistent CTA styling.

### Delta to apply
- Keep hero/final-CTA visual parity and reduce copy to short conversion line.

### Priority
- `P0`

---

## `FOOTER`
### Current (repo)
- Compact footer with legal/support links and cookie settings trigger.

### Reference (Lovable)
- Four-column footer IA (`Platform`, `Legal`, `Company`) with slightly richer link taxonomy.

### Delta to apply
- Optional IA expansion if more links are required; maintain existing consent trigger behavior.

### Priority
- `P2`

---

## `COOKIE_CONSENT`
### Current (repo)
- Uses `looksharp_analytics_consent` with `granted/denied`.
- Reopen via both event names and both dispatch targets.

### Reference (Lovable)
- Uses `cookie-consent` with `accepted/declined`, delayed initial appearance, and `open-cookie-settings` event.

### Delta to apply
- Keep current analytics consent contract unless a deliberate migration is requested.

### Priority
- `P0` for compatibility awareness, `P2` for visual/polish parity.

---

## `LEGAL_PRIVACY`
### Current (repo)
- Short staging placeholder policy sections.

### Reference (Lovable)
- More complete legal content structure with explicit subsections.

### Delta to apply
- Expand content depth only when approved legal copy is available.

### Priority
- `P2`

---

## `LEGAL_TERMS`
### Current (repo)
- Short staging placeholder terms sections.

### Reference (Lovable)
- More complete terms structure and policy language.

### Delta to apply
- Expand content depth only with approved legal text.

### Priority
- `P2`

---

## `NOT_FOUND`
### Current (repo)
- Minimal 404 layout with return-home link.

### Reference (Lovable)
- Branded gradient 404 with stronger recovery CTA treatment.

### Delta to apply
- Optional branded 404 redesign if desired.

### Priority
- `P2`

---

## Global Delta Summary
- Visual density: reference uses more whitespace and lighter section surfaces.
- Conversion language: reference copy is shorter and more directive.
- CTA system: reference keeps stronger styling consistency between hero and final CTA.
- Trust framing: reference leans on concise metrics/chips/testimonials with explicit confidence cues.
