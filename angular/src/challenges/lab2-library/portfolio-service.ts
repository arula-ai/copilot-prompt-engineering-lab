/**
 * LAB 2 - LIBRARY PATTERNS: Portfolio Service
 *
 * Use prompt library patterns to generate improved service methods.
 *
 * Reference: prompt-library/code-generation/api-service-method.md
 *
 * CHALLENGE: The existing PortfolioService.getPortfolio() method has issues:
 * - Returns raw Promise (should be Observable)
 * - No caching (repeated calls hit API)
 * - No retry logic for transient failures
 * - No error transformation to domain errors
 *
 * YOUR TASK:
 * 1. Open prompt-library/code-generation/api-service-method.md
 * 2. Fill in the template variables for getPortfolioById:
 *    - [service-name]: PortfolioService
 *    - [method-name]: getPortfolioById
 *    - [endpoint]: GET /api/portfolios/{id}
 *    - [parameters]: portfolioId: string
 *    - [return-type]: Observable<Portfolio>
 *    - [caching]: shareReplay(1) with 5-minute TTL
 *    - [retry]: 3 attempts with exponential backoff
 *    - [errors]: Transform to PortfolioNotFoundError, NetworkError
 * 3. Use your crafted prompt in Copilot
 * 4. Paste the result below and compare quality
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Portfolio, Holding } from '../../models/types';

// ============================================================
// EXISTING IMPLEMENTATION (for comparison)
// ============================================================

@Injectable({ providedIn: 'root' })
export class OriginalPortfolioService {
  private readonly http = inject(HttpClient);

  // Issues: No caching, no retry, returns raw response, no error handling
  getPortfolio(id: string): Observable<Portfolio> {
    return this.http.get<Portfolio>(`/api/portfolios/${id}`);
  }
}

// ============================================================
// YOUR IMPROVED IMPLEMENTATION
// ============================================================

@Injectable({ providedIn: 'root' })
export class ImprovedPortfolioService {
  private readonly http = inject(HttpClient);

  /**
   * YOUR LIBRARY PATTERN PROMPT (paste what you used):
   * ─────────────────────────────────────────────────
   *
   *
   *
   * ─────────────────────────────────────────────────
   */

  // PASTE YOUR IMPROVED getPortfolioById METHOD HERE:


  /**
   * IMPROVEMENTS CHECKLIST - mark what your generated code includes:
   * [ ] Returns Observable<Portfolio>
   * [ ] Uses shareReplay for caching
   * [ ] Has cache invalidation strategy
   * [ ] Implements retry with backoff
   * [ ] Only retries on 5xx errors
   * [ ] Transforms errors to domain types
   * [ ] Has proper TypeScript types
   * [ ] Includes JSDoc documentation
   */
}

// ============================================================
// BONUS CHALLENGE: Generate tests using testing pattern
// ============================================================
// Reference: prompt-library/testing/unit-test-service.md
