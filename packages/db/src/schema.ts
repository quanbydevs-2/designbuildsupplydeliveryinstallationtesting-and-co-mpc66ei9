import { defineRelations } from "drizzle-orm"
import { createTable } from "./utils/table.js"

// ═══════════════ AUTH TABLES ═══════════════

export const users = createTable("users", t => ({
  id: t.text("id").primaryKey(),
  name: t.text("name").notNull(),
  email: t.text("email").notNull().unique(),
  emailVerified: t.boolean("email_verified").default(false).notNull(),
  image: t.text("image"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const sessions = createTable("sessions", t => ({
  id: t.text("id").primaryKey(),
  token: t.text("token").notNull().unique(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  expiresAt: t.timestamp("expires_at").notNull(),
  ipAddress: t.text("ip_address"),
  userAgent: t.text("user_agent"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const accounts = createTable("accounts", t => ({
  id: t.text("id").primaryKey(),
  accountId: t.text("account_id").notNull(),
  providerId: t.text("provider_id").notNull(),
  userId: t.text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  accessToken: t.text("access_token"),
  refreshToken: t.text("refresh_token"),
  password: t.text("password"),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const verifications = createTable("verifications", t => ({
  id: t.text("id").primaryKey(),
  identifier: t.text("identifier").notNull(),
  value: t.text("value").notNull(),
  expiresAt: t.timestamp("expires_at").notNull(),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ MODULE TABLES ═══════════════

export const farmers = createTable("farmers", t => ({
  id: t.serial("id").primaryKey(),
  firstName: t.text("first_name").notNull(),
  lastName: t.text("last_name").notNull(),
  barangay: t.text("barangay").notNull(),
  contactNumber: t.text("contact_number"),
  farmSize: t.doublePrecision("farm_size").notNull(),
  farmType: t.text("farm_type").notNull(),
  registrationDate: t.timestamp("registration_date").notNull(),
  isActive: t.boolean("is_active").default(false).notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const crops = createTable("crops", t => ({
  id: t.serial("id").primaryKey(),
  cropName: t.text("crop_name").notNull(),
  variety: t.text("variety"),
  plantingDate: t.timestamp("planting_date").notNull(),
  harvestDate: t.timestamp("harvest_date"),
  areaPlanted: t.doublePrecision("area_planted").notNull(),
  farmerId: t.integer("farmer_id").notNull(),
  status: t.text("status").notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const programs = createTable("programs", t => ({
  id: t.serial("id").primaryKey(),
  programName: t.text("program_name").notNull(),
  description: t.text("description").notNull(),
  startDate: t.timestamp("start_date").notNull(),
  endDate: t.timestamp("end_date").notNull(),
  budget: t.doublePrecision("budget").notNull(),
  targetBeneficiaries: t.integer("target_beneficiaries").notNull(),
  isActive: t.boolean("is_active").default(false).notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const harvests = createTable("harvests", t => ({
  id: t.serial("id").primaryKey(),
  farmerId: t.integer("farmer_id").notNull(),
  cropId: t.integer("crop_id").notNull(),
  harvestDate: t.timestamp("harvest_date").notNull(),
  quantity: t.doublePrecision("quantity").notNull(),
  quality: t.text("quality"),
  pricePerKg: t.doublePrecision("price_per_kg"),
  totalValue: t.doublePrecision("total_value"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const equipments = createTable("equipments", t => ({
  id: t.serial("id").primaryKey(),
  equipmentName: t.text("equipment_name").notNull(),
  brand: t.text("brand"),
  model: t.text("model"),
  serialNumber: t.text("serial_number"),
  acquisitionDate: t.timestamp("acquisition_date").notNull(),
  condition: t.text("condition").notNull(),
  isAvailable: t.boolean("is_available").default(false).notNull(),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

export const dataprivacys = createTable("dataprivacys", t => ({
  id: t.serial("id").primaryKey(),
  requestType: t.text("request_type").notNull(),
  dataSubject: t.text("data_subject").notNull(),
  personalDataType: t.text("personal_data_type").notNull(),
  consentStatus: t.text("consent_status").notNull(),
  requestDate: t.timestamp("request_date").notNull(),
  resolvedDate: t.timestamp("resolved_date"),
  status: t.text("status").notNull(),
  remarks: t.text("remarks"),
  status: t.text("status").notNull().default("active"),
  authorId: t.text("author_id").references(() => users.id, { onDelete: "set null" }),
  createdAt: t.timestamp("created_at").notNull().defaultNow(),
  updatedAt: t.timestamp("updated_at").notNull().defaultNow(),
}))

// ═══════════════ RELATIONS ═══════════════

export const relations = defineRelations({ users, sessions, accounts, farmers, crops, programs, harvests, equipments, dataprivacys }, r => ({
  users: {
    sessions: r.many.sessions(),
    accounts: r.many.accounts(),
  },
  sessions: {
    user: r.one.users({ from: r.sessions.userId, to: r.users.id }),
  },
  accounts: {
    user: r.one.users({ from: r.accounts.userId, to: r.users.id }),
  },
  farmers: {
    author: r.one.users({ from: r.farmers.authorId, to: r.users.id }),
  },
  crops: {
    author: r.one.users({ from: r.crops.authorId, to: r.users.id }),
  },
  programs: {
    author: r.one.users({ from: r.programs.authorId, to: r.users.id }),
  },
  harvests: {
    author: r.one.users({ from: r.harvests.authorId, to: r.users.id }),
  },
  equipments: {
    author: r.one.users({ from: r.equipments.authorId, to: r.users.id }),
  },
  dataprivacys: {
    author: r.one.users({ from: r.dataprivacys.authorId, to: r.users.id }),
  },
}))

export const schema = Object.assign({ users, sessions, accounts, verifications, farmers, crops, programs, harvests, equipments, dataprivacys }, relations)
