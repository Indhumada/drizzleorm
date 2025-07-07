"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.orders = (0, pg_core_1.pgTable)('orders', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    user_id: (0, pg_core_1.integer)('user_id').notNull(),
    product: (0, pg_core_1.varchar)('product', { length: 255 }).notNull(),
    amount: (0, pg_core_1.integer)('amount').notNull(),
    status: (0, pg_core_1.varchar)('status', { length: 100 }).notNull().default('pending'),
});
//# sourceMappingURL=orders.entity.js.map