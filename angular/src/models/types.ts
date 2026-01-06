// Core domain types for the lab exercises

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'advisor' | 'admin';
  createdAt: Date;
  lastLogin?: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  twoFactorEnabled: boolean;
  defaultCurrency: string;
}

export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  holdings: Holding[];
  totalValue: number;
  lastUpdated: Date;
  riskProfile: 'conservative' | 'moderate' | 'aggressive';
}

export interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface Transaction {
  id: string;
  portfolioId: string;
  type: 'buy' | 'sell' | 'dividend' | 'transfer';
  symbol: string;
  quantity: number;
  price: number;
  total: number;
  fees: number;
  executedAt: Date;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
  requiresTwoFactor?: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
}

export type Result<T, E = ApiError> =
  | { success: true; data: T }
  | { success: false; error: E };
