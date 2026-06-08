# Cookie-Free Server Traffic Metrics

This runbook creates aggregate traffic counts from Firebase Hosting request logs. It does not add browser cookies, localStorage, client-side tracking, or Google Analytics events.

## What This Measures

- Page/document request counts.
- HTTP status.
- Country, when Firebase Hosting logs provide it.
- Path, normalized from the request URL.

It should not be used for unique visitor counts. Unique visitor estimates usually require IP, user-agent, or session heuristics and can become fingerprinting.

## Prerequisite

Enable Firebase Hosting web request logs:

1. Open Firebase Console.
2. Select the project:
   - Staging: `looksharpco-staging`
   - Production: `looksharpco`
3. Go to Project settings -> Integrations.
4. Link Cloud Logging for Firebase Hosting.
5. Wait for new requests to appear in Cloud Logging. Firebase says Hosting logs usually appear within about 30 minutes.

## Preview Filter

Open Google Cloud Logging -> Logs Explorer for the target project and preview this filter:

```text
resource.type="firebase_domain"
logName=~"/logs/webrequests$"
httpRequest.requestMethod="GET"
httpRequest.status>=200
httpRequest.status<400
NOT httpRequest.requestUrl=~"(?i)\\.(js|css|map|json|txt|xml|ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|otf|pdf)(\\?|$)"
NOT httpRequest.userAgent=~"(?i)(bot|crawler|spider|preview|facebookexternalhit|slackbot|twitterbot|linkedinbot|whatsapp)"
```

If the result set includes Firebase preview/default domains you do not want in production reporting, add:

```text
jsonPayload.hostname="looksharp.co"
```

For staging-only reporting, use the relevant staging hostname instead.

## Create The Metric In Console

1. Open Google Cloud Console -> Logging -> Log-based Metrics.
2. Click Create Metric.
3. Metric type: `Counter`.
4. Log metric name: `hosting_page_requests`.
5. Description: `Cookie-free aggregate page request count from Firebase Hosting logs.`
6. Paste the preview filter above.
7. Add labels.

The Google Cloud Console label UI splits each extractor into `Field name` and, optionally, `Regular expression`. Do not paste the full `REGEXP_EXTRACT(...)` expression into the regex field. The regex field must contain only the regex pattern and exactly one capture group.

| Label | Type | Field name | Regular expression |
| --- | --- | --- | --- |
| `path` | String | `httpRequest.requestUrl` | `https?://[^/]+([^?#]*)` |
| `country` | String | `jsonPayload.remoteIpCountry` | Leave blank |
| `status` | Integer | `httpRequest.status` | Leave blank |

For the `path` label, the single capture group is `([^?#]*)`. This extracts only the URL path and drops the query string. For example, `https://looksharp.co/privacy?utm_source=x` becomes `/privacy`.

Keep the labels low-cardinality. Do not add IP address, full user-agent, full referrer, query string, or a derived visitor ID.

## Optional `gcloud` Config

For `gcloud` or API usage, label extractors are written as combined expressions. This is different from the console UI above.

Save this file outside git as `hosting-page-requests-metric.yaml`, then create the metric in the chosen project.

```yaml
name: hosting_page_requests
description: Cookie-free aggregate page request count from Firebase Hosting logs.
filter: |
  resource.type="firebase_domain"
  logName=~"/logs/webrequests$"
  httpRequest.requestMethod="GET"
  httpRequest.status>=200
  httpRequest.status<400
  NOT httpRequest.requestUrl=~"(?i)\\.(js|css|map|json|txt|xml|ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|otf|pdf)(\\?|$)"
  NOT httpRequest.userAgent=~"(?i)(bot|crawler|spider|preview|facebookexternalhit|slackbot|twitterbot|linkedinbot|whatsapp)"
metricDescriptor:
  metricKind: DELTA
  valueType: INT64
  labels:
    - key: path
      valueType: STRING
      description: URL path without query string.
    - key: country
      valueType: STRING
      description: Request country from Firebase Hosting logs.
    - key: status
      valueType: INT64
      description: HTTP response status.
labelExtractors:
  path: 'REGEXP_EXTRACT(httpRequest.requestUrl, "https?://[^/]+([^?#]*)")'
  country: "EXTRACT(jsonPayload.remoteIpCountry)"
  status: "EXTRACT(httpRequest.status)"
```

Create it:

```bash
gcloud logging metrics create hosting_page_requests \
  --project=looksharpco \
  --config-from-file=hosting-page-requests-metric.yaml
```

For staging, replace `--project=looksharpco` with `--project=looksharpco-staging`.

## View The Metric

In Cloud Monitoring -> Metrics Explorer:

1. Select metric: `logging/user/hosting_page_requests`.
2. Align by: `sum`.
3. Group by: `metric.label.path`, `metric.label.country`, or `metric.label.status`.
4. Use a 1 hour or 1 day alignment period for traffic reporting.

## Retention And Privacy Guardrails

- Keep raw Cloud Logging retention short unless there is an operational need.
- Prefer dashboards or scheduled exports that store only aggregates.
- Do not export `remoteIp`, full `userAgent`, query strings, or full referrers into analytics tables.
- Update the privacy policy to disclose server request logs used for security, performance, and aggregate traffic measurement.

References:

- Firebase Hosting request logs: https://firebase.google.com/docs/hosting/web-request-logs-and-metrics
- Google Cloud log-based counter metrics: https://cloud.google.com/logging/docs/logs-based-metrics/counter-metrics
- Google Cloud log-based metric labels: https://cloud.google.com/logging/docs/logs-based-metrics/labels
