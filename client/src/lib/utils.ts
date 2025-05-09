import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateOrderNumber(): string {
  const prefix = 'MC-';
  const randomNum = Math.floor(Math.random() * 900000 + 100000);
  return `${prefix}${randomNum}`;
}
