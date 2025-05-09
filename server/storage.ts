import { users, type User, type InsertUser, orders, type Order } from "@shared/schema";

// Add the Order-related methods to the interface
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Order methods
  createOrder(order: {
    username: string;
    email: string;
    orderNumber: string;
    server?: string | undefined;
    message?: string | undefined;
  }): Promise<Order>;
  getOrder(orderNumber: string): Promise<Order | undefined>;
  getAllOrders(): Promise<Order[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private orders: Map<string, Order>;
  private currentUserId: number;
  private currentOrderId: number;

  constructor() {
    this.users = new Map();
    this.orders = new Map();
    this.currentUserId = 1;
    this.currentOrderId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createOrder(orderData: {
    username: string;
    email: string;
    orderNumber: string;
    server?: string | undefined;
    message?: string | undefined;
  }): Promise<Order> {
    const id = this.currentOrderId++;
    
    const order: Order = {
      id,
      orderNumber: orderData.orderNumber,
      username: orderData.username,
      email: orderData.email,
      server: orderData.server || null,
      message: orderData.message || null,
      createdAt: new Date(),
    };
    
    this.orders.set(orderData.orderNumber, order);
    return order;
  }

  async getOrder(orderNumber: string): Promise<Order | undefined> {
    return this.orders.get(orderNumber);
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }
}

export const storage = new MemStorage();
