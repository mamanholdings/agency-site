# Project Guide

## Purpose and current status

This repository is for the agency's own marketing website. It will present the
service, explain the available website types, packages, process and care plans,
and convert visitors into qualified enquiries.

The selected working agency name is **MamanDigital**. The project contains a
complete first-pass Hebrew RTL marketing site. It includes broad business
positioning, website types, a portfolio section, packages, process,
maintenance/security information, FAQ, and a contact section. The first
portfolio entry is an explicitly labelled concept landing page for the fictional
business **Alon Electric**, available at `/portfolio/alon-electric`. Real
contact details, analytics, final brand assets, legal text, and a production
domain have not been selected. Do not invent testimonials, clients, results,
certifications, or unlabelled contact information.

## Confirmed project state

- GitHub organization: `mamanholdings`.
- Repository: `mamanholdings/agency-site`.
- Default branch: `main`.
- Working agency name: `MamanDigital`.
- Primary language: Hebrew with a deliberate RTL layout.
- Target market: business owners across Israel. Messaging must remain broad
  enough for visitors from different industries to identify with it.
- Service area: all of Israel.
- Primary call to action: `קבלו הצעת מחיר ב-WhatsApp`.
- Portfolio: the home page links to an in-repository concept project for the
  fictional business `אלון חשמל`. It is a one-page Hebrew RTL service website,
  uses dummy contact details, and is clearly labelled as a demo rather than a
  real client project.
- Commercial direction: three website packages. The middle package is planned
  at NIS 2,500 setup plus NIS 200 per month for hosting and maintenance; its
  exact scope and contract terms still require confirmation.
- Website types are explicitly distinguished: landing pages for a focused
  offer, marketing/business sites for credibility and leads, and e-commerce
  sites for online sales. E-commerce is scoped and priced separately.
- Current design direction: Hebrew-first industrial editorial design using
  graphite, warm off-white, safety orange, lime accents, and technical grids.
  Keep motion restrained.
- Repository visibility: public. This was selected because Vercel Hobby does
  not support native Git integration for private organization repositories.
- Vercel team: `maman-holdings-llc`.
- Vercel project: `agency-site`.
- Production alias: `https://agency-site-eta-sooty.vercel.app`.
- GitHub and Vercel are connected. Future branches and pull requests should
  receive Preview deployments; merges to `main` should deploy to Production.
- The Production deployment is publicly reachable. Preview deployments may be
  protected and should remain protected unless public review is explicitly
  required.
- No custom production domain is configured yet.

The first Production build is ready and verified through authenticated Vercel
access. The local `.vercel/` link and `.env.local` are intentionally ignored and
must never be committed. The former Sites/Vinext starter is preserved only in
the ignored local path `work/legacy-sites-starter/`; it is not part of the
production repository.

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

## Codex, GitHub, and Vercel workflow

1. Codex works locally in this repository on a short-lived `codex/*` branch.
2. Codex runs `npm run check` and performs browser checks appropriate to the
   change before publishing it.
3. The branch is pushed to GitHub, which remains the source of truth.
4. Vercel creates a Preview deployment for the branch or pull request.
5. Review the code and Preview deployment; do not treat AI output as approved
   merely because it builds.
6. Merge the reviewed pull request into `main`.
7. Vercel deploys that exact `main` revision to Production.
8. Verify the production URL, important links, forms, console errors, and
   responsive behavior after deployment.

Do not routinely deploy uncommitted local files with the Vercel CLI. Direct CLI
deployment was used only to bootstrap and verify the first linked project.

## Design and content rules

- Build a focused conversion site before adding extra pages or features.
- Lead with business outcomes; AI is an internal production advantage.
- Do not show portfolio or concept projects until the examples themselves have
  been built and approved. Never imply that concept work is client work.
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

The current application is static, has no forms, database, authentication, or
customer data, and therefore has a deliberately small attack surface. It uses
HTTPS on Vercel and sets baseline security headers in `next.config.ts`. Revisit
the threat model whenever forms, accounts, payments, uploads, inventory, or
other server-side features are introduced.

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

For this agency site, keep Preview deployments protected where practical. When
a real custom domain is selected, attach it to the Production deployment and
confirm that it is publicly reachable. Record the registrar, DNS ownership,
renewal, MFA, and recovery details outside the public repository.

## Decisions made

- Use standard Next.js App Router, React, and TypeScript instead of the temporary
  Sites/Vinext starter.
- Host on Vercel and use its native GitHub integration.
- Keep the marketing site mostly static until a justified requirement needs a
  backend.
- Use one repository and one Vercel project per customer site.
- Keep this repository public to retain Vercel Hobby Git integration; never
  rely on repository privacy to protect secrets.
- Keep Production public and protect Preview deployments where practical.
- Treat inventory, authentication, payments, and similar systems as separate
  application work requiring stronger architecture and security review.

## Before building the first version

Confirm real contact details, complete contract terms, and final approval of
the package scopes. The portfolio currently contains one approved concept site;
keep every future concept clearly labelled and never present it as client work.

Also confirm the production domain, brand assets, preferred visual direction,
legal/privacy requirements, form destination, analytics choice, and ongoing
maintenance offering before launching the finished public site.
