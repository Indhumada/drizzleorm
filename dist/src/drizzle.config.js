"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: './src/user/entities/**/*.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'drizzledb',
        ssl: false,
    },
};
//# sourceMappingURL=drizzle.config.js.map