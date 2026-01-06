import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transaction, Portfolio, Result, ApiError } from '../models/types';

/**
 * Service with various issues for prompt engineering challenges.
 *
 * INTENTIONAL ISSUES:
 * 1. Minimal validation
 * 2. Overly simple fee calculation (no tiers)
 * 3. No state machine for transaction status
 * 4. Basic report generation
 * 5. Placeholder fraud detection
 * 6. Mutation of input objects
 */
@Injectable({ providedIn: 'root' })
export class TransactionService {
  private readonly http = inject(HttpClient);

  // Challenge: Complex validation needed
  // - Only checks 2 fields
  // - No type coercion protection
  // - No cross-field validation
  // - No async validation (e.g., check if symbol exists)
  validateTransaction(transaction: Partial<Transaction>): string[] {
    const errors: string[] = [];

    // Minimal validation - participants should improve with prompts
    if (!transaction.symbol) {
      errors.push('Symbol required');
    }
    if (!transaction.quantity || transaction.quantity <= 0) {
      errors.push('Invalid quantity');
    }
    // Missing: price validation, type validation, portfolio validation,
    // sufficient funds check, market hours check, etc.

    return errors;
  }

  // Challenge: Calculate fees - needs multiple fee tiers
  // - Flat 1% regardless of amount
  // - No volume discounts
  // - No fee caps
  // - No special handling for different transaction types
  calculateFees(amount: number): number {
    // Overly simple - should have tiered fees
    return amount * 0.01;
    // Real implementation should consider:
    // - Volume tiers (>$10k = 0.5%, >$100k = 0.25%)
    // - Transaction type (dividends = 0%)
    // - Account type (premium = reduced fees)
  }

  // Challenge: Process transaction - needs proper state machine
  // - Direct status mutation (should be immutable)
  // - No status transition validation
  // - No idempotency
  // - No event emission
  processTransaction(transaction: Transaction): Observable<Transaction> {
    // Bug: Mutates input object!
    transaction.status = 'completed';
    return of(transaction);
    // Should: validate state transition, emit events, handle failures
  }

  // Challenge: Generate transaction report - needs formatting
  // - Very basic string output
  // - No currency formatting
  // - No totals
  // - No grouping by type
  generateReport(transactions: Transaction[]): string {
    // Very basic - participants should improve
    return transactions.map(t => `${t.type}: ${t.symbol} x${t.quantity}`).join('\n');
    // Should: format currency, calculate totals, group by date/type,
    // support multiple output formats (CSV, PDF data)
  }

  // Challenge: Detect suspicious activity - needs pattern detection
  // - Always returns false (placeholder)
  // - No actual detection logic
  // - No configurable thresholds
  detectSuspiciousActivity(transactions: Transaction[]): boolean {
    // Placeholder - needs real implementation
    return false;
    // Should detect: rapid trading, unusual amounts, off-hours trading,
    // circular transactions, velocity anomalies
  }
}
