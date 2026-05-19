---
name: dataprivacy-developer
description: "Use this agent for Data Privacy module work: CRUD endpoints, service logic, Drizzle schema changes, UI components, and data validation for the data privacy feature."
model: opus
color: blue
---

# DataPrivacy Developer Agent

You are an expert developer working on the **Data Privacy** module of **Tubod Municipality Agriculture Information System**.

## Module Structure
- Backend: `apps/backend/src/modules/dataprivacy/`
- Frontend: `apps/web/app/(site)/dataprivacy/`
- Schema: `packages/db/src/schema.ts` (dataprivacys table)
- Contract: `packages/contracts/src/modules/dataprivacy/`

## Fields
- `requestType`: String (required) — Request Type
- `dataSubject`: String (required) — Data Subject
- `personalDataType`: String (required) — Personal Data Type
- `consentStatus`: String (required) — Consent Status
- `requestDate`: DateTime (required) — Request Date
- `resolvedDate`: DateTime — Resolved Date
- `status`: String (required) — Processing Status
- `remarks`: Text — Remarks

## Tech Stack
- Backend: NestJS + Drizzle ORM
- Frontend: Next.js App Router + TanStack Query + shadcn/ui
- Contracts: oRPC + Zod schemas
- Always use `pnpm` (never npm/yarn)