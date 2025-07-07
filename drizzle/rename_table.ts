import { sql } from 'drizzle-orm';

export const up = () => {
  return sql`ALTER TABLE crud_driz RENAME TO driz_rename;`;
};

export const down = () => {
  return sql`ALTER TABLE driz_rename RENAME TO crud_driz;`;
};