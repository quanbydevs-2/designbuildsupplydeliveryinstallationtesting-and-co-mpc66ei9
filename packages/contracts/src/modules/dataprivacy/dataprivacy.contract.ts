import { oc } from "@orpc/contract"
import { dataprivacySchema } from "./dataprivacy.schema.js"
import { z } from "zod"

export const dataprivacyContract = oc.router({
  list: oc.input(z.object({ search: z.string().optional(), status: z.string().optional(), page: z.number().default(1), limit: z.number().default(20) })).output(z.object({ data: z.array(dataprivacySchema), total: z.number() })),
  getById: oc.input(z.object({ id: z.number() })).output(dataprivacySchema),
  create: oc.input(dataprivacySchema.omit({ id: true, createdAt: true, updatedAt: true })).output(dataprivacySchema),
  update: oc.input(z.object({ id: z.number() }).merge(dataprivacySchema.partial())).output(dataprivacySchema),
  delete: oc.input(z.object({ id: z.number() })).output(z.object({ success: z.boolean() })),
})