"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const db_1 = require("../db");
const user_entity_1 = require("./entities/user.entity");
const product_entity_1 = require("./entities/product.entity");
const orders_entity_1 = require("./entities/orders.entity");
const payment_entity_1 = require("./entities/payment.entity");
const drizzle_orm_1 = require("drizzle-orm");
let UserService = class UserService {
    getTable(type) {
        switch (type) {
            case 'users':
                return user_entity_1.users;
            case 'products':
                return product_entity_1.products;
            case 'orders':
                return orders_entity_1.orders;
            case 'payments':
                return payment_entity_1.payments;
            default:
                throw new Error('Invalid table type');
        }
    }
    async create(type, data) {
        const table = this.getTable(type);
        return db_1.db.insert(table).values(data).returning();
    }
    async findAll(type) {
        const table = this.getTable(type);
        return db_1.db.select().from(table);
    }
    async findOne(type, id) {
        const table = this.getTable(type);
        const result = await db_1.db.select().from(table).where((0, drizzle_orm_1.eq)(table.id, id));
        return result[0] || null;
    }
    async update(type, id, data) {
        const table = this.getTable(type);
        return db_1.db.update(table).set(data).where((0, drizzle_orm_1.eq)(table.id, id)).returning();
    }
    async remove(type, id) {
        const table = this.getTable(type);
        return db_1.db.delete(table).where((0, drizzle_orm_1.eq)(table.id, id)).returning();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map