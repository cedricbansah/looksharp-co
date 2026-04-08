# LookSharp Lessons Learned

Date: 2026-02-27
Context basis: repository history, workflow state, and project docs.

## 1) CI setup must avoid tool-order coupling
Lesson:
- `actions/setup-node` with `cache: pnpm` assumes `pnpm` is already available on PATH.
- If pnpm is not installed first, workflow fails before dependency install.

What happened:
- Error observed: `Unable to locate executable file: pnpm`.

What worked:
- Installing pnpm explicitly via Corepack before using pnpm commands.
- Removing `cache: pnpm` from `setup-node` to eliminate premature pnpm invocation.

Preventive pattern:
1. Setup Node.
2. Enable Corepack.
3. Prepare/activate pnpm.
4. Run install/test/build.

## 2) Branch-to-environment mapping must be explicit and simple
Lesson:
- Deployment confusion drops when one branch maps to one environment clearly.

Current good state:
- `dev` -> `looksharpco-staging`
- `main` -> `looksharpco`

Operational value:
- Easier release reasoning.
- Fewer accidental production deploys.

## 3) Always gate deploys with quality checks
Lesson:
- Deploy pipelines that skip quality checks ship avoidable defects.

Current good state:
- Deploy workflows now run `typecheck`, `lint`, `test`, and `build` before deployment.
- Production additionally runs launch-gate validation.

Next improvement:
- Add smoke assertions around required environment variables in staging as well.

## 4) Repo hygiene is a release reliability issue, not cosmetic
Lesson:
- Tracking generated artifacts (`.next/`, `out/`) and local files (`.env.local`, `.DS_Store`) creates noisy diffs, merge friction, and larger clone/push operations.

Evidence:
- These files are currently tracked in git history/tree even though `.gitignore` excludes them.

Action:
- Clean tracked artifacts from index and keep only source/config/docs under version control.

## 5) Preserve behavior while redesigning presentation
Lesson:
- Redesigns should keep contract-critical behavior unchanged unless explicitly approved.

What was preserved successfully:
- CTA tracking events.
- Attribution query forwarding to web CTA.
- Consent-gated analytics behavior.
- Legal links and route structure.

Why this matters:
- UX can change aggressively while growth instrumentation remains comparable.

## 6) Documentation handoff reduces context loss across sessions
Lesson:
- A structured design handoff package (`tokens`, `frame specs`, `import checklist`) limits ambiguity and speeds async review.

What worked:
- Dedicated `docs/redesign/` pack made implementation and review traceable.

Next improvement:
- Add visual snapshots (desktop/mobile) tied to commit hashes.

## 7) Single-source “working memory” should be maintained continuously
Lesson:
- Multi-session projects lose context quickly without a durable memory artifact.

Adopted:
- `docs/working-memory.md` as the canonical operational memory log.

Rule going forward:
- Every major change should append date, commit, rationale, and rollback strategy.

## Priority follow-ups
1. Remove tracked generated/local artifacts from git index.
2. Align README manual deploy instructions with current branch-triggered CI/CD behavior.
3. Add deployment verification checklist section (staging URL, headers, canonical, analytics gate).
4. Record first successful staging and production deploy run IDs in working memory.

