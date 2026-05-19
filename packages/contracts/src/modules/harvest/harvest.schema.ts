import { z } from "zod"

export const harvestSchema = z.object({
  id: z.number(),
  farmerId: z.number(),
  cropId: z.number(),
  harvestDate: z.date(),
  quantity: z.number(),
  quality: z.string().optional(),
  pricePerKg: z.number().optional(),
  totalValue: z.number().optional(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Harvest = z.infer<typeof harvestSchema>