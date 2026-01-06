import { Portfolio, Holding, Transaction, Result } from '../models/types';

// Service for Lab 2 exercises

export class PortfolioService {
  private portfolios: Map<string, Portfolio> = new Map();
  private transactions: Map<string, Transaction[]> = new Map();

  // Participants will generate better versions of these methods using library patterns

  async getPortfolio(portfolioId: string): Promise<Portfolio | null> {
    return this.portfolios.get(portfolioId) || null;
  }

  async getPortfoliosByUser(userId: string): Promise<Portfolio[]> {
    return Array.from(this.portfolios.values())
      .filter(p => p.userId === userId);
  }

  // Challenge: Calculate total value across all holdings
  // This is intentionally simplistic for participants to improve
  calculateTotalValue(holdings: Holding[]): number {
    let total = 0;
    for (const h of holdings) {
      total += h.quantity * h.currentPrice;
    }
    return total;
  }

  // Challenge: No caching, no retry, no error handling
  async fetchMarketPrices(symbols: string[]): Promise<Map<string, number>> {
    // Simulated API call
    const prices = new Map<string, number>();
    for (const symbol of symbols) {
      prices.set(symbol, Math.random() * 1000);
    }
    return prices;
  }

  // Challenge: No transaction validation
  async recordTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
    const id = Math.random().toString(36).substring(7);
    const newTransaction: Transaction = { ...transaction, id };

    const existing = this.transactions.get(transaction.portfolioId) || [];
    existing.push(newTransaction);
    this.transactions.set(transaction.portfolioId, existing);

    return newTransaction;
  }

  // Challenge: Performance issues with large portfolios
  async getTransactionHistory(
    portfolioId: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<Transaction[]> {
    const all = this.transactions.get(portfolioId) || [];

    // Inefficient filtering
    return all.filter(t => {
      if (startDate && t.executedAt < startDate) return false;
      if (endDate && t.executedAt > endDate) return false;
      return true;
    });
  }
}
