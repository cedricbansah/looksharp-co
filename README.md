# LookSharp Landing Page

Static-first marketing website for LookSharp, built with Next.js (App Router + TypeScript) and deployed to Firebase Hosting.

## Local Development

1. Install dependencies:

```bash
pnpm install
```

2. Create local env file:

```bash
cp .env.example .env.local
```

3. Start dev server:

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

This uses static export mode and writes deployable output to `out/`.

## Required Environment Variables

- `NEXT_PUBLIC_WEB_APP_URL`
- `NEXT_PUBLIC_IOS_APP_URL`
- `NEXT_PUBLIC_ANDROID_APP_URL`
- `NEXT_PUBLIC_SUPPORT_EMAIL`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_SITE_URL`

## Firebase Setup

1. Create two Firebase projects:
- staging project (alias: `staging`)
- production project (alias: `production`)

2. Update `.firebaserc` with real project IDs.

3. Deploy manually:

```bash
pnpm build
pnpm dlx firebase-tools deploy --project staging --only hosting
pnpm dlx firebase-tools deploy --project production --only hosting
```

## Server-Side Traffic Metrics

Cookie-free aggregate traffic counts are configured from Firebase Hosting request logs, not from client-side analytics. See [docs/analytics-server-metrics.md](docs/analytics-server-metrics.md).

## GitHub Actions Secrets and Variables

### Staging environment
- Secret: `FIREBASE_SERVICE_ACCOUNT_STAGING`

### Production environment
- Secret: `FIREBASE_SERVICE_ACCOUNT_PRODUCTION`
- Vars:
  - `NEXT_PUBLIC_WEB_APP_URL`
  - `NEXT_PUBLIC_IOS_APP_URL`
  - `NEXT_PUBLIC_ANDROID_APP_URL`
  - `NEXT_PUBLIC_SUPPORT_EMAIL`
  - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
  - `NEXT_PUBLIC_SITE_URL`

Production deploy runs launch-gate validation via `pnpm check:launch-gates`.

## Launch Gate Checklist

- Real App Store URL set
- Real Play Store URL set
- Real support email set
- Real GA4 measurement ID set
- Placeholder trust/legal copy replaced or explicitly approved
- `www` domain redirect configured to `looksharp.co`
