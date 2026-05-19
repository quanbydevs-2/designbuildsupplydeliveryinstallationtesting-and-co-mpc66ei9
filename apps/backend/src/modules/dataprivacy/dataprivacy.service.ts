import { Injectable, NotFoundException } from "@nestjs/common"
import { getDB } from "../common/database/database.client"
import { dataprivacys } from "@repo/db/schema"
import { eq, ilike, or, count, desc } from "drizzle-orm"

@Injectable()
export class DataPrivacyService {
  private get db() { return getDB() }

  async findAll({ search, status, page, limit }: { search?: string; status?: string; page: number; limit: number }) {
    const offset = (page - 1) * limit
    const data = await this.db.select().from(dataprivacys).orderBy(desc(dataprivacys.createdAt)).limit(limit).offset(offset)
    const [{ value: total }] = await this.db.select({ value: count() }).from(dataprivacys)
    return { data, total, page, totalPages: Math.ceil(total / limit) }
  }

  async findOne(id: number) {
    const [item] = await this.db.select().from(dataprivacys).where(eq(dataprivacys.id, id))
    if (!item) throw new NotFoundException("Not found")
    return item
  }

  async create(data: any) {
    const [item] = await this.db.insert(dataprivacys).values(data).returning()
    return item
  }

  async update(id: number, data: any) {
    const [item] = await this.db.update(dataprivacys).set(data).where(eq(dataprivacys.id, id)).returning()
    if (!item) throw new NotFoundException("Not found")
    return item
  }

  async remove(id: number) {
    await this.db.delete(dataprivacys).where(eq(dataprivacys.id, id))
    return { success: true }
  }
}