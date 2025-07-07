import type { Config } from 'drizzle-kit';

export default {
  schema: './src/user/entities/**/*.ts',
  out: './drizzle',
    
  dialect: 'postgresql',
  dbCredentials: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'drizzledb',
      
    ssl:false,
  },
} satisfies Config;