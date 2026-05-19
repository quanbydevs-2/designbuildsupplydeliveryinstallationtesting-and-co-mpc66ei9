import { z } from "zod"

export const programSchema = z.object({
  id: z.number(),
  programName: z.string(),
  description: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  budget: z.number(),
  targetBeneficiaries: z.number(),
  isActive: z.boolean().default(false),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Program = z.infer<typeof programSchema>