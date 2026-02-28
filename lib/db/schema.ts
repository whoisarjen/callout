import {
  pgTable,
  text,
  timestamp,
  boolean,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Enums
export const timeOffTypeEnum = pgEnum("time_off_type", [
  "vacation",
  "sick",
  "personal",
  "conference",
  "parental",
  "other",
]);

export const timeOffStatusEnum = pgEnum("time_off_status", [
  "scheduled",
  "active",
  "completed",
  "cancelled",
]);

export const platformEnum = pgEnum("platform", [
  "slack",
  "google_calendar",
  "github",
  "teams",
  "gmail",
  "webhook",
]);

export const syncStatusEnum = pgEnum("sync_status", [
  "pending",
  "syncing",
  "success",
  "failed",
]);

// Users table
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name").notNull(),
  googleId: text("google_id").unique(),
  avatar: text("avatar"),
  defaultMessage: text("default_message"),
  defaultEmoji: text("default_emoji").default("palm_tree"),
  timezone: text("timezone").default("UTC"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Sessions table
export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Time off entries table
export const timeOffEntries = pgTable("time_off_entries", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  startDate: timestamp("start_date", { withTimezone: true }).notNull(),
  endDate: timestamp("end_date", { withTimezone: true }).notNull(),
  type: timeOffTypeEnum("type").notNull().default("vacation"),
  status: timeOffStatusEnum("status").notNull().default("scheduled"),
  message: text("message"),
  emoji: text("emoji").default("palm_tree"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Integrations table
export const integrations = pgTable("integrations", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  platform: platformEnum("platform").notNull(),
  enabled: boolean("enabled").notNull().default(true),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  tokenExpiresAt: timestamp("token_expires_at", { withTimezone: true }),
  config: jsonb("config").$type<Record<string, unknown>>(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Sync logs table
export const syncLogs = pgTable("sync_logs", {
  id: text("id").primaryKey(),
  timeOffId: text("time_off_id")
    .notNull()
    .references(() => timeOffEntries.id, { onDelete: "cascade" }),
  integrationId: text("integration_id")
    .notNull()
    .references(() => integrations.id, { onDelete: "cascade" }),
  status: syncStatusEnum("status").notNull().default("pending"),
  action: text("action").notNull(), // create, update, delete
  externalId: text("external_id"), // ID in the external system
  errorMessage: text("error_message"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Webhooks table
export const webhooks = pgTable("webhooks", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  url: text("url").notNull(),
  secret: text("secret"),
  enabled: boolean("enabled").notNull().default(true),
  events: jsonb("events").$type<string[]>().default([]),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions),
  timeOffEntries: many(timeOffEntries),
  integrations: many(integrations),
  webhooks: many(webhooks),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const timeOffEntriesRelations = relations(
  timeOffEntries,
  ({ one, many }) => ({
    user: one(users, {
      fields: [timeOffEntries.userId],
      references: [users.id],
    }),
    syncLogs: many(syncLogs),
  })
);

export const integrationsRelations = relations(
  integrations,
  ({ one, many }) => ({
    user: one(users, {
      fields: [integrations.userId],
      references: [users.id],
    }),
    syncLogs: many(syncLogs),
  })
);

export const syncLogsRelations = relations(syncLogs, ({ one }) => ({
  timeOff: one(timeOffEntries, {
    fields: [syncLogs.timeOffId],
    references: [timeOffEntries.id],
  }),
  integration: one(integrations, {
    fields: [syncLogs.integrationId],
    references: [integrations.id],
  }),
}));

export const webhooksRelations = relations(webhooks, ({ one }) => ({
  user: one(users, {
    fields: [webhooks.userId],
    references: [users.id],
  }),
}));

// Types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
export type TimeOffEntry = typeof timeOffEntries.$inferSelect;
export type NewTimeOffEntry = typeof timeOffEntries.$inferInsert;
export type Integration = typeof integrations.$inferSelect;
export type NewIntegration = typeof integrations.$inferInsert;
export type SyncLog = typeof syncLogs.$inferSelect;
export type NewSyncLog = typeof syncLogs.$inferInsert;
export type Webhook = typeof webhooks.$inferSelect;
export type NewWebhook = typeof webhooks.$inferInsert;
