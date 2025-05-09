import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendOrderEmail } from "./email";
import { insertOrderSchema } from "@shared/schema";
import { generateOrderNumber } from "../client/src/lib/utils";
import { fetchLinkedData, checkApiConnection } from "./api";

export async function registerRoutes(app: Express): Promise<Server> {
  // Order submission endpoint
  app.post('/api/orders', async (req, res) => {
    try {
      // Validate request body
      const result = insertOrderSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid order data", 
          errors: result.error.errors 
        });
      }
      
      // Generate a unique order number
      const orderNumber = generateOrderNumber();
      
      // Store the order - explicitly define the properties to avoid type errors
      const orderData = {
        username: result.data.username,
        email: result.data.email,
        orderNumber: orderNumber,
        server: result.data.server,
        message: result.data.message
      };
      
      const order = await storage.createOrder(orderData);
      
      // Send an email notification
      await sendOrderEmail({
        to: "assooryamsu80@gmail.com",
        orderNumber: order.orderNumber,
        username: order.username,
        email: order.email,
        server: order.server || "Not provided",
        message: order.message || "No message",
      });
      
      return res.status(201).json({ 
        message: "Order created successfully", 
        orderNumber: order.orderNumber 
      });
    } catch (error) {
      console.error("Error creating order:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API connection check endpoint
  app.get('/api/status', async (req, res) => {
    try {
      const isConnected = await checkApiConnection();
      return res.status(200).json({ 
        connected: isConnected,
        message: isConnected ? "API connection successful" : "API connection failed"
      });
    } catch (error) {
      console.error("Error checking API connection:", error);
      return res.status(500).json({ 
        connected: false,
        message: "API connection check failed" 
      });
    }
  });

  // Linked Minecraft accounts endpoint
  app.get('/api/linked', async (req, res) => {
    try {
      const linkedData = await fetchLinkedData();
      return res.status(200).json(linkedData);
    } catch (error) {
      console.error("Error fetching linked data:", error);
      return res.status(500).json({ 
        message: "Failed to fetch linked data from the API" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
