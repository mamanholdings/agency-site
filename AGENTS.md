# Project Guide

## Purpose and current status

This repository is for the agency's own marketing website. It will present the
service, showcase honest portfolio work, explain the process and care plans,
and convert visitors into qualified enquiries.

The project now contains a standard Next.js foundation for Vercel. Branding,
production copy, portfolio projects,
contact details, analytics, and a production domain have not been selected. Do
not publish the starter or invent testimonials, clients, results, prices,
certifications, or contact information.

## Technology

- TypeScript for application code.
- React with the standard Next.js App Router.
- Next.js for static pages, server rendering, route handlers, and application
  features when required.
- HTML and CSS for semantic structure, responsive layout, and accessibility.
- Vercel for previews and production deployments.
- Node.js 22 or newer and npm with the committed `package-lock.json`.

Keep the agency site mostly static. Do not add a database, authentication,
uploads, a CMS, or client-side state unless a real requirement justifies the
extra operational and security cost. Prefer managed providers for forms,
booking, email, analytics, and payments.

## Repository boundaries

This repository must contain only the agency website. Each client website
should use its own private repository, hosting project, domain, environment
variables, access list, monitoring, and documentation. Never place several
customers' secrets or deployments in this repository.

For a larger operation, use a GitHub organization with repositories named
consistently, such as `client-name-site`. Give each client a short record of its
repository, production URL, domain registrar, hosting owner, renewal dates,
integrations, maintenance plan, and emergency contact.

## Working method

1. Record scope and acceptance criteria before implementation.
2. Work in a short-lived feature branch; keep `main` deployable.
3. Review AI-generated code and assets as untrusted drafts.
4. Run the production build and relevant tests before merging.
5. Review responsive behavior, keyboard access, forms, metadata, and links.
6. Merge reviewed work, save a version, then deploy that exact revision.
7. Record material changes and verify the live site after deployment.

Use small commits with meaningful messages. Never commit `.env` files,
credentials, customer data, private analytics, deployment credentials, local
caches, or build output. Store secrets in the hosting provider and keep local
`.env` keys documented in a safe `.env.example` when required.

## Design and content rules

- Build a focused conversion site before adding extra pages or features.
- Lead with business outcomes; AI is an internal production advantage.
- Label speculative portfolio pieces as concept projects.
- Use real, licensed assets and concrete copy; avoid generic filler.
- Meet WCAG 2.2 AA conventions where practical, including keyboard navigation,
  visible focus, sufficient contrast, labels, headings, and reduced motion.
- Support Hebrew with deliberate RTL layouts if Hebrew is selected; do not
  simulate bilingual support with automatic text reversal.

## Security baseline

- Minimize dependencies and attack surface.
- Validate untrusted input server-side and encode output safely.
- Keep secrets out of source code, browser bundles, logs, and AI prompts.
- Use HTTPS, restrictive security headers, spam/rate protection, and managed
  payment pages instead of handling card data.
- Require MFA and least-privilege access for GitHub, hosting, domains, email,
  analytics, and third-party services.
- Enable dependency alerts, uptime/form monitoring, backups where data exists,
  and a documented update and incident-response process.
- Never describe a site as unhackable or guarantee rankings, compliance, or
  security outcomes.

## Deployment

GitHub is the source of truth. Connect each repository to one Vercel project.
Branches and pull requests create Preview deployments; merging reviewed work to
`main` creates the Production deployment. Build successfully before merging and
never deploy uncommitted local state as the production source of truth.

Add persistence only when the product requires it. Prefer managed Postgres such
as Neon or Supabase for structured application data, managed object storage for
files, and a mature authentication provider. Keep development, preview, and
production environment variables separate. Inventory and other business systems
require authorization, auditability, backups, validation, and concurrency-aware
database updates; do not treat them as ordinary marketing-site features.

Domains should normally be owned by the client or agency business account with
MFA, renewal protection, documented DNS, and recovery access. Do not reuse one
customer's credentials or environment values for another customer.

## Before building the first version

Confirm the business name, target market, language/RTL requirements, primary
call to action, contact details, package/pricing approach, and whether the first
portfolio entries are concept projects.
