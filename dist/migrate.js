"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const migrator_1 = require("drizzle-orm/node-postgres/migrator");
const db_1 = require("./src/db");
async function main() {
    await (0, migrator_1.migrate)(db_1.db, { migrationsFolder: './drizzle' });
    console.log('Migration completed');
}
main().catch((err) => {
    console.error('Migration failed:', err);
});
//# sourceMappingURL=migrate.js.map