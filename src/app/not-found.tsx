'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="not-found-code">404</p>
      <h1>Page Not Found</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get
        you back on track.
      </p>
      <div className="not-found-actions">
        <Link href="/" className="not-found-link not-found-link-primary">
          Go Home
        </Link>
        <button
          type="button"
          className="not-found-link not-found-link-secondary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </main>
  );
}
