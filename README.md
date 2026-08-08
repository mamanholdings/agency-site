# Agency Site

The agency's marketing website, built with standard Next.js and deployed on
Vercel. GitHub is the source of truth.

## Prerequisites

- Node.js 22 or newer
- npm

## Local development

```bash
npm install
npm run dev
```

## Validation

- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run check` runs all three.

## Delivery workflow

Create a short-lived branch, push it to GitHub, review the Vercel Preview, then
merge to `main` for Production. Keep secrets in Vercel environment variables
and never commit them.
