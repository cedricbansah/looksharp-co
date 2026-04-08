# Landing Spec Editing Protocol (Spec-Only Workflow)

## Purpose
Use one canonical document (`landing-section-spec.md`) as the only execution input for redesign instructions.  
`lovable-delta-spec.md` is comparison context only.

## Canonical Files
- Execution source: `docs/redesign/landing-section-spec.md`
- Reference-only delta: `docs/redesign/lovable-delta-spec.md`
- Historical context: `docs/redesign/prompt-portability-map.md`

## Rules of Authority
1. If documents conflict, `landing-section-spec.md` wins.
2. Implementation must only follow edited section blocks in `landing-section-spec.md`.
3. Unedited section blocks are treated as unchanged scope.
4. No change-request template is used in this workflow.

## How to Edit the Spec
1. Open `landing-section-spec.md`.
2. Update `Spec Version` and `Last Updated`.
3. Edit only the section blocks you want changed.
4. For each edited section, keep all required headings:
   - `Goal`
   - `Current Behavior`
   - `Target Behavior`
   - `Visual Changes`
   - `Copy Changes`
   - `Interaction Changes`
   - `Responsive Rules`
   - `Accessibility Rules`
   - `Constraints / Non-Goals`
   - `Acceptance Checks`
5. Add a `Revision Log` row with:
   - `Revision ID`
   - `Date`
   - `Section IDs touched`
   - `Summary`
   - `Author`

## How to Request Implementation
When ready, send one instruction in this exact pattern:

`Implement spec version <VERSION> for section IDs: <ID_1>, <ID_2>, ...`

Example:

`Implement spec version 1.1.0 for section IDs: HERO, FINAL_CTA, FOOTER`

## Execution Scope Rules
1. Scope is limited to listed section IDs.
2. `Constraints / Non-Goals` inside each section are binding.
3. If a section says `no routing changes`, no route files may be modified for that section.
4. Global rules in the spec (CTA parity, placeholder/compliance, consent compatibility) always apply.

## Acceptance and Reporting Rules
1. Implementation report must map changed files to section IDs.
2. Implementation report must evaluate each edited section against its `Acceptance Checks`.
3. Any unmet acceptance check must be called out explicitly.

## Recommended Versioning
- Patch (`x.y.Z`): copy-only or minor visual polish.
- Minor (`x.Y.z`): section redesigns without architecture changes.
- Major (`X.y.z`): broad structural changes across multiple sections.

## Examples
### Single-Section Update
- Edit `HERO` only.
- Request implementation for `HERO`.
- Expect hero-related files only to change.

### Multi-Section Update
- Edit `HEADER`, `FINAL_CTA`, `FOOTER`.
- Request those section IDs together.
- Expect no unrelated section mutations.

### Constraint-Driven Update
- Add constraint: `No routing changes` in `FAQ`.
- Any implementation touching route files fails spec compliance for that request.
