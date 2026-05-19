import { z } from "zod"

export const equipmentSchema = z.object({
  id: z.number(),
  equipmentName: z.string(),
  brand: z.string().optional(),
  model: z.string().optional(),
  serialNumber: z.string().optional(),
  acquisitionDate: z.date(),
  condition: z.string(),
  isAvailable: z.boolean().default(false),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Equipment = z.infer<typeof equipmentSchema>