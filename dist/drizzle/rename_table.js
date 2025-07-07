"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.down = exports.up = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const up = () => {
    return (0, drizzle_orm_1.sql) `ALTER TABLE crud_driz RENAME TO driz_rename;`;
};
exports.up = up;
const down = () => {
    return (0, drizzle_orm_1.sql) `ALTER TABLE driz_rename RENAME TO crud_driz;`;
};
exports.down = down;
//# sourceMappingURL=rename_table.js.map