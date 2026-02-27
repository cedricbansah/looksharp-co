# LookSharp Development Working Memory

Last updated: 2026-02-27 (UTC)

## Scope of this memory
This file is a persistent engineering memory for `looksharp.co` progress.

Context sources used:
- Git history/reflog on this repository
- Existing project docs under `docs/`
- Current code/config state (`src/`, `firebase.json`, `.firebaserc`, workflow files)

Note: direct access to chat transcripts from separate sessions is not available in-repo; this memory is reconstructed from durable repository artifacts.

## Current product/tech snapshot
- Project type: Next.js App Router marketing site (TypeScript).
- Rendering/deploy model: static export (`next.config.mjs` uses `output: 'export'`).
- Hosting target: Firebase Hosting.
- Firebase projects:
  - staging: `looksharpco-staging`
  - production: `looksharpco`
- Branch strategy in automation:
  - `dev` -> staging deploy
  - `main` -> production deploy

## Timeline of major changes (reconstructed)
1. `3d92f90` - `chore: initialize staging branch`
2. `528452f` - `Initial commit`
3. `ae9bd26` - `.env`
4. `563cab7` - `First redesign`
   - Implemented major landing-page redesign and handoff docs.
5. `11b10fd` - `ci: deploy to staging on dev and production on main`
   - Updated workflows to deploy from `dev` and `main` to correct Firebase projects.
6. `91efdeb` - `ci: use corepack for pnpm setup in workflows`
   - Replaced `pnpm/action-setup` with Corepack pnpm setup.
7. `4dc4618` - `ci: fix pnpm availability in setup-node step`
   - Removed `cache: pnpm` from `setup-node` to avoid missing `pnpm` executable error.

## Architecture and UX decisions currently locked
- Visual direction: hybrid (Insightis + Rakuten + UNiDAYS patterns).
- CTA hierarchy: balanced across `Start Earning`, `iOS App`, `Android App`.
- Scope includes home + legal/support page visual alignment.
- Figma delivery model: manual handoff package (not automated push).

## Key artifacts produced
- Redesign handoff package:
  - `docs/redesign/looksharp-redesign-handoff.md`
  - `docs/redesign/looksharp-design-tokens.json`
  - `docs/redesign/looksharp-frame-specs.md`
  - `docs/redesign/figma-import-checklist.md`
- CI/CD workflows:
  - `.github/workflows/ci.yml`
  - `.github/workflows/deploy-staging.yml`
  - `.github/workflows/deploy-production.yml`

## Known risks / technical debt
1. Repository hygiene risk:
- Build artifacts and local files are currently tracked in git history/tree (`.next/`, `out/`, `.env.local`, `.DS_Store`), despite `.gitignore` excluding them.
- This increases repo size/noise and can destabilize diffs and PR reviews.

2. Runtime/CI compatibility risk:
- Workflows run Node 24; currently passes, but dependency ecosystem compatibility should be periodically validated.

3. Launch-content risk:
- Placeholder trust metrics/offers/testimonials still require final approved production copy.

4. Operational setup dependency:
- Successful deploys require GitHub environment vars and Firebase service-account secrets to be present and valid.

## Immediate next actions
1. Clean tracked artifacts from git index while preserving local files:
- remove tracked `.next/`, `out/`, `.env.local`, `.DS_Store` from version control.
2. Update README deployment instructions to match `dev`/`main` workflow behavior and explicit Firebase project IDs.
3. Add a small CI smoke check to assert `firebase-tools` auth/project resolution before deploy.
4. Validate staging deployment URL after next `dev` push and record result here.

## Working agreements for future sessions
- Any major decision (architecture, branch flow, hosting, analytics policy) should be appended here with:
  - date
  - commit hash
  - rationale
  - rollback path
- Any incident/failure in CI/CD should be logged with:
  - failing step
  - root cause
  - fix commit

