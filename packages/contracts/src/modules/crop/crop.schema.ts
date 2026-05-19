import { z } from "zod"

export const cropSchema = z.object({
  id: z.number(),
  cropName: z.string(),
  variety: z.string().optional(),
  plantingDate: z.date(),
  harvestDate: z.date().optional(),
  areaPlanted: z.number(),
  farmerId: z.number(),
  status: z.string(),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Crop = z.infer<typeof cropSchema>