import { oc } from "@orpc/contract"
import { harvestSchema } from "./harvest.schema.js"
import { z } from "zod"

export const harvestContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(harvestSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(harvestSchema),
  create: oc.input(harvestSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(harvestSchema),
  update: oc.input(z.object({ id: z.number() }).merge(harvestSchema.partial())).output(harvestSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})