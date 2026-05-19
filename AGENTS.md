# AGENTS.md — Tubod Municipality Agriculture Information System

## Overview
Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte, enabling farmer registration, crop monitoring, agricultural program management, and data analytics. Fully compliant with RA 9184 (Government Procurement Reform Act), RA 10173 (Data Privacy Act), and NPC guidelines for secure handling of agricultural and farmer data.

## Stack
- **Monorepo**: Turborepo + pnpm
- **Frontend**: Next.js 16 + Tailwind v4 + shadcn/ui
- **Backend**: NestJS 11 + Drizzle ORM
- **Auth**: Better Auth
- **Contracts**: oRPC + Zod
- **DB**: PostgreSQL 17

## Modules
- **Farmers** (`farmer`): First Name, Last Name, Barangay, Contact Number, Farm Size (Hectares), Farm Type, Registration Date, Active Status
- **Crops** (`crop`): Crop Name, Variety, Planting Date, Expected Harvest Date, Area Planted (Hectares), Farmer ID, Crop Status
- **Programs** (`program`): Program Name, Description, Start Date, End Date, Budget Allocation, Target Beneficiaries, Active Status
- **Harvests** (`harvest`): Farmer ID, Crop ID, Harvest Date, Quantity (kg), Quality Grade, Price per Kg, Total Value
- **Equipment** (`equipment`): Equipment Name, Brand, Model, Serial Number, Acquisition Date, Condition, Available for Lending
- **Data Privacy** (`dataprivacy`): Request Type, Data Subject, Personal Data Type, Consent Status, Request Date, Resolved Date, Processing Status, Remarks

## Commands
- `pnpm dev` — Start all apps
- `pnpm build` — Build everything
- `pnpm db:push` — Push DB schema
- `pnpm db:seed` — Seed data
- `pnpm test` — Run tests
- `pnpm lint` — Lint all

## Structure
```
├── apps/web/         # Next.js frontend
├── apps/backend/     # NestJS API
├── packages/db/      # Drizzle ORM
├── packages/auth/    # Better Auth
├── packages/contracts/ # oRPC + Zod
└── tooling/          # Shared configs
```

Always use `pnpm` (never npm/yarn).