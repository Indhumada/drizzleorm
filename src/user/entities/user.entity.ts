import { pgTable, serial,varchar,integer } from 'drizzle-orm/pg-core';

export const users = pgTable('driz_rename', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  age: integer('age'),
});