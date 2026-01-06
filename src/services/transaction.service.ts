import { Transaction, Portfolio, Result, ApiError } from '../models/types';

// Service with various issues for prompt engineering challenges

export class TransactionService {

  // Challenge: Complex validation needed
  validateTransaction(transaction: Partial<Transaction>): string[] {
    const errors: string[] = [];

    // Minimal validation - participants should improve with prompts
    if (!transaction.symbol) {
      errors.push('Symbol required');
    }
    if (!transaction.quantity || transaction.quantity <= 0) {
      errors.push('Invalid quantity');
    }

    return errors;
  }

  // Challenge: Calculate fees - needs multiple fee tiers
  calculateFees(amount: number): number {
    // Overly simple - should have tiered fees
    return amount * 0.01;
  }

  // Challenge: Process transaction - needs proper state machine
  async processTransaction(transaction: Transaction): Promise<Transaction> {
    // No state validation, no idempotency
    transaction.status = 'completed';
    return transaction;
  }

  // Challenge: Generate transaction report - needs formatting
  generateReport(transactions: Transaction[]): string {
    // Very basic - participants should improve
    return transactions.map(t => `${t.type}: ${t.symbol} x${t.quantity}`).join('\n');
  }

  // Challenge: Detect suspicious activity - needs pattern detection
  detectSuspiciousActivity(transactions: Transaction[]): boolean {
    // Placeholder - needs real implementation
    return false;
  }
}
