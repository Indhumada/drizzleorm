import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  order_id: integer('order_id').notNull(),
  method: varchar('method', { length: 255 }).notNull(),
  status: varchar('status', { length: 255 }).notNull(),
});
