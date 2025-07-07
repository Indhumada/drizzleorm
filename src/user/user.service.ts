/*

import { Injectable } from '@nestjs/common';
import { db } from './db';
import { users } from './entities/user.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  async createUser(name: string, email: string, age: number) {
    const result = await db.insert(users).values({ name, email,age }).returning();
    return result;
  }

  async getAllUsers() {
    const result = await db.select().from(users);
    return result;
  }

  async getUserById(id: number) {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async updateUser(id: number, name: string, email: string,age:number) {
    const result = await db
      .update(users)
      .set({ name, email ,age})
      .where(eq(users.id, id))
      .returning();
    return result;
  }

  async deleteUser(id: number) {
    const result = await db.delete(users).where(eq(users.id, id)).returning();
    return result;
  }
}

*/

//senario: code for multiple tables-crud operations

  import { Injectable } from '@nestjs/common';
import { db } from '../db';
import { users } from './entities/user.entity';
import { products } from './entities/product.entity';
import { orders } from './entities/orders.entity';
import { payments } from './entities/payment.entity';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserService {
  private getTable(type: string) {
  switch (type) {
    case 'users':
      return users;
    case 'products':
      return products;
    case 'orders':
      return orders;
    case 'payments':
      return payments;
    default:
      throw new Error('Invalid table type');
  }
}


  async create(type: string, data: any) {
    const table = this.getTable(type);
    return db.insert(table).values(data).returning();
  }

  async findAll(type: string) {
    const table = this.getTable(type);
    return db.select().from(table);
  }

  async findOne(type: string, id: number) {
    const table = this.getTable(type);
    const result = await db.select().from(table).where(eq(table.id, id));
    return result[0] || null;
  }

  async update(type: string, id: number, data: any) {
    const table = this.getTable(type);
    return db.update(table).set(data).where(eq(table.id, id)).returning();
  }

  async remove(type: string, id: number) {
    const table = this.getTable(type);
    return db.delete(table).where(eq(table.id, id)).returning();
  }
}