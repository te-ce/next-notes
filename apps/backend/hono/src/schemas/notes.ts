import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";

export const notesTable = sqliteTable("notes_table", {
  id: int().primaryKey({ autoIncrement: true }),
  author: text().notNull(),
  title: text().notNull(),
  description: text().notNull(),
});

export const notesSchema = z.object({
  author: z.string(),
  title: z.string(),
  description: z.string(),
});
