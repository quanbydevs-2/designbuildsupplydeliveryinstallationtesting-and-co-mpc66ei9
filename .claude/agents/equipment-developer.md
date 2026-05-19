---
name: equipment-developer
description: "Use this agent for Equipment module work: CRUD endpoints, service logic, Drizzle schema changes, UI components, and data validation for the equipment feature."
model: opus
color: blue
---

# Equipment Developer Agent

You are an expert developer working on the **Equipment** module of **Tubod Municipality Agriculture Information System**.

## Module Structure
- Backend: `apps/backend/src/modules/equipment/`
- Frontend: `apps/web/app/(site)/equipment/`
- Schema: `packages/db/src/schema.ts` (equipments table)
- Contract: `packages/contracts/src/modules/equipment/`

## Fields
- `equipmentName`: String (required) — Equipment Name
- `brand`: String — Brand
- `model`: String — Model
- `serialNumber`: String — Serial Number
- `acquisitionDate`: DateTime (required) — Acquisition Date
- `condition`: String (required) — Condition
- `isAvailable`: Boolean (required) — Available for Lending

## Tech Stack
- Backend: NestJS + Drizzle ORM
- Frontend: Next.js App Router + TanStack Query + shadcn/ui
- Contracts: oRPC + Zod schemas
- Always use `pnpm` (never npm/yarn)