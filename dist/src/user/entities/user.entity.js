"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)('driz_rename', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name').notNull(),
    email: (0, pg_core_1.varchar)('email').notNull(),
    age: (0, pg_core_1.integer)('age'),
});
//# sourceMappingURL=user.entity.js.map