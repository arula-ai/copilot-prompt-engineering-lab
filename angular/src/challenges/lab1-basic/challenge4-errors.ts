/**
 * LAB 1 - CHALLENGE 4: Error Handling
 *
 * BAD PROMPT: "Add error handling"
 *
 * This Angular service method has no error handling whatsoever.
 */

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Portfolio } from '../../models/types';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  private readonly http = inject(HttpClient);

  /**
   * Current implementation issues:
   * - No validation of userId (empty string, special characters)
   * - No error transformation (raw HttpErrorResponse exposed)
   * - No timeout handling (request could hang forever)
   * - No retry logic for transient failures
   * - No meaningful error messages for users
   * - No logging of errors
   * - No loading state management
   */
  fetchUserPortfolios(userId: string): Observable<Portfolio[]> {
    return this.http.get<{ portfolios: Portfolio[] }>(`/api/users/${userId}/portfolios`).pipe(
      map(data => data.portfolios)
      // Bug: No catchError - errors propagate raw to subscribers
      // Bug: No timeout - could wait indefinitely
      // Bug: No retry - single failure fails permanently
    );
  }
}

/**
 * Your task: Create a prompt that adds comprehensive error handling
 *
 * Consider for your CRAFT prompt:
 * - Context: Angular 16+ service using HttpClient with RxJS
 * - What errors can occur? (Network, 4xx, 5xx, timeout, CORS)
 * - How should each be handled? (Retry? Transform? Log?)
 * - What RxJS operators? (catchError, retry, timeout, finalize)
 * - What should subscribers receive? (Typed errors? Never raw HttpErrorResponse)
 * - Should there be retries? (Yes for 5xx, no for 4xx)
 * - What about the loading state?
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
