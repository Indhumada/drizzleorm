import { pgTable, serial, integer, varchar } from 'drizzle-orm/pg-core';

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id').notNull(),
  product: varchar('product', { length: 255 }).notNull(),
  amount: integer('amount').notNull(),
  status: varchar('status', { length: 100 }).notNull().default('pending') // 👈 Add this line
});