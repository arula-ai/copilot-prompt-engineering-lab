import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Portfolio, Holding, Transaction, Result } from '../models/types';

/**
 * Service for Lab 2 exercises.
 * Participants will generate better versions of these methods using library patterns.
 *
 * INTENTIONAL ISSUES:
 * 1. No caching on frequently-called methods
 * 2. No retry logic for transient failures
 * 3. No error handling/transformation
 * 4. No request cancellation handling
 * 5. Performance issues with large data sets
 * 6. No loading states
 */
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/portfolios';

  // Challenge: No caching, no error handling
  getPortfolio(portfolioId: string): Observable<Portfolio | null> {
    return this.http.get<Portfolio>(`${this.apiUrl}/${portfolioId}`).pipe(
      map(portfolio => portfolio || null)
      // Bug: No caching - repeated calls hit API every time
      // Bug: No error handling - 404 will throw instead of returning null
    );
  }

  // Challenge: No caching, fetches all then filters client-side
  getPortfoliosByUser(userId: string): Observable<Portfolio[]> {
    return this.http.get<Portfolio[]>(this.apiUrl).pipe(
      map(portfolios => portfolios.filter(p => p.userId === userId))
      // Bug: Should use query param ?userId=xxx instead of client filtering
    );
  }

  // Challenge: Calculate total value across all holdings
  // This is intentionally simplistic for participants to improve
  // - No memoization
  // - No null safety
  // - No rounding for currency
  calculateTotalValue(holdings: Holding[]): number {
    let total = 0;
    for (const h of holdings) {
      total += h.quantity * h.currentPrice;
    }
    return total;
    // Bug: Should use reduce(), handle nulls, round to 2 decimal places
  }

  // Challenge: No caching, no retry, no error handling, no timeout
  fetchMarketPrices(symbols: string[]): Observable<Map<string, number>> {
    // Bug: Simulated - in real app would call external API
    // Missing: caching, retry with backoff, timeout, circuit breaker
    const prices = new Map<string, number>();
    symbols.forEach(symbol => {
      prices.set(symbol, Math.random() * 1000);
    });
    return of(prices);
  }

  // Challenge: No transaction validation before recording
  recordTransaction(transaction: Omit<Transaction, 'id'>): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.apiUrl}/transactions`, transaction);
    // Bug: No client-side validation
    // Bug: No optimistic update
    // Bug: No idempotency key
  }

  // Challenge: Performance issues with large portfolios
  // - Fetches ALL transactions then filters client-side
  // - No pagination
  // - No server-side date filtering
  getTransactionHistory(
    portfolioId: string,
    startDate?: Date,
    endDate?: Date
  ): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/${portfolioId}/transactions`).pipe(
      map(transactions => {
        // Bug: Inefficient client-side filtering
        return transactions.filter(t => {
          const executedAt = new Date(t.executedAt);
          if (startDate && executedAt < startDate) return false;
          if (endDate && executedAt > endDate) return false;
          return true;
        });
      })
    );
  }
}
