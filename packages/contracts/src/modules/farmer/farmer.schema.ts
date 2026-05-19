import { z } from "zod"

export const farmerSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  barangay: z.string(),
  contactNumber: z.string().optional(),
  farmSize: z.number(),
  farmType: z.string(),
  registrationDate: z.date(),
  isActive: z.boolean().default(false),
  status: z.string().default("active"),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export type Farmer = z.infer<typeof farmerSchema>