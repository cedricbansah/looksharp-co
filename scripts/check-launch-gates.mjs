const required = {
  NEXT_PUBLIC_WEB_APP_URL: 'https://app.looksharp.co',
  NEXT_PUBLIC_IOS_APP_URL: 'https://apps.apple.com/us/app/example/id0000000000',
  NEXT_PUBLIC_ANDROID_APP_URL:
    'https://play.google.com/store/apps/details?id=com.example.app',
  NEXT_PUBLIC_SUPPORT_EMAIL: 'support@looksharp.co',
  NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  NEXT_PUBLIC_SITE_URL: 'https://looksharp.co'
};

const failures = [];

for (const [key, example] of Object.entries(required)) {
  const value = process.env[key];

  if (!value || !value.trim()) {
    failures.push(`${key} is missing.`);
    continue;
  }

  if (key !== 'NEXT_PUBLIC_GA_MEASUREMENT_ID' && value.includes('example')) {
    failures.push(`${key} is still placeholder-like (${value}).`);
  }

  if (key === 'NEXT_PUBLIC_GA_MEASUREMENT_ID' && !/^G-[A-Z0-9]+$/i.test(value)) {
    failures.push(`${key} must look like GA4 measurement ID, e.g. ${example}.`);
  }

  if (
    (key === 'NEXT_PUBLIC_WEB_APP_URL' || key === 'NEXT_PUBLIC_SITE_URL') &&
    !/^https?:\/\//.test(value)
  ) {
    failures.push(`${key} must be a valid absolute URL (e.g. ${example}).`);
  }
}

if (failures.length > 0) {
  console.error('\nLaunch gate validation failed:\n');
  for (const message of failures) {
    console.error(`- ${message}`);
  }
  process.exit(1);
}

console.log('Launch gate validation passed.');
