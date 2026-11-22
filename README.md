# Delvor

Delvor is an English-first, international-ready marketing website for Local SEO and Google Maps visibility services.

## Current scope

- Four main pages for home, process, free trial and contact
- Illustrative Google Maps GeoGrid and before-after interaction
- Technical SEO metadata, sitemap and robots
- Server-side trial and inquiry endpoints prepared for a future n8n workflow
- Request-only processing until the secure integration is configured

## Development

Run npm install and then npm run dev.

The local site runs at http://localhost:3000.

## Trial integration

The request endpoint reads N8N_WEBHOOK_URL and N8N_WEBHOOK_SECRET only on the server. Without both values, submissions remain request-only and return an explicit unavailable state. Never add provider keys to client code or NEXT_PUBLIC_ variables.
