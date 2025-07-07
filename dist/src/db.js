"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'root',
    database: 'drizzledb'
});
client.connect().then(() => {
    console.log('DB connected successfully');
})
    .catch((err) => {
    console.log(err);
});
exports.db = (0, node_postgres_1.drizzle)(client);
//# sourceMappingURL=db.js.map