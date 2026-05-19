import { oc } from "@orpc/contract"
import { equipmentSchema } from "./equipment.schema.js"
import { z } from "zod"

export const equipmentContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(equipmentSchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(equipmentSchema),
  create: oc.input(equipmentSchema.omit({ id: true, createdAt: true, updatedAt: true })).output(equipmentSchema),
  update: oc.input(z.object({ id: z.number() }).merge(equipmentSchema.partial())).output(equipmentSchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})