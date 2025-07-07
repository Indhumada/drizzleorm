"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payments = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.payments = (0, pg_core_1.pgTable)('payments', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    order_id: (0, pg_core_1.integer)('order_id').notNull(),
    method: (0, pg_core_1.varchar)('method', { length: 255 }).notNull(),
    status: (0, pg_core_1.varchar)('status', { length: 255 }).notNull(),
});
//# sourceMappingURL=payment.entity.js.map