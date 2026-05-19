import { Injectable, NotFoundException } from "@nestjs/common"
import { getDB } from "../common/database/database.client"
import { harvests } from "@repo/db/schema"
import { eq, ilike, or, count, desc } from "drizzle-orm"

@Injectable()
export class HarvestService {
  private get db() { return getDB() }

  async findAll({ search, status, page, limit }: { search?: string; status?: string; page: number; limit: number }) {
    const offset = (page - 1) * limit
    const data = await this.db.select().from(harvests).orderBy(desc(harvests.createdAt)).limit(limit).offset(offset)
    const [{ value: total }] = await this.db.select({ value: count() }).from(harvests)
    return { data, total, page, totalPages: Math.ceil(total / limit) }
  }

  async findOne(id: number) {
    const [item] = await this.db.select().from(harvests).where(eq(harvests.id, id))
    if (!item) throw new NotFoundException("Not found")
    return item
  }

  async create(data: any) {
    const [item] = await this.db.insert(harvests).values(data).returning()
    return item
  }

  async update(id: number, data: any) {
    const [item] = await this.db.update(harvests).set(data).where(eq(harvests.id, id)).returning()
    if (!item) throw new NotFoundException("Not found")
    return item
  }

  async remove(id: number) {
    await this.db.delete(harvests).where(eq(harvests.id, id))
    return { success: true }
  }
}