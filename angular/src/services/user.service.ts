import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User, LoginRequest, LoginResponse, Result, ApiError } from '../models/types';

/**
 * This service has intentional issues for participants to improve with good prompts.
 *
 * INTENTIONAL ISSUES:
 * 1. Login returns 'any' instead of proper LoginResponse
 * 2. No input validation on createUser
 * 3. No error handling on getUser (silent failures)
 * 4. O(n) email lookup instead of using a Map or API endpoint
 * 5. Missing audit logging on updateUser
 * 6. Hard delete with no soft delete option
 * 7. No retry logic on API calls
 * 8. No caching strategy
 */
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = '/api/users';

  // Challenge: This login method is incomplete and insecure
  // - Returns 'any' instead of Observable<LoginResponse>
  // - No input validation
  // - No rate limiting consideration
  // - No secure token storage strategy
  login(email: string, password: string): Observable<any> {
    // TODO: Implement proper authentication
    // Current implementation is intentionally weak
    if (email && password) {
      return of({ success: true, token: 'fake-token' });
    }
    return of({ success: false });
  }

  // Challenge: No input validation, no proper typing
  // - Accepts 'any' instead of proper DTO
  // - No email format validation
  // - No password strength check
  // - No duplicate email check
  createUser(data: any): Observable<User> {
    return this.http.post<User>(this.apiUrl, data);
  }

  // Challenge: No error handling
  // - Returns undefined if not found (should throw or return Observable<User | null>)
  // - No loading state
  // - No retry on failure
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
    // Bug: No error handling - will throw to subscriber
  }

  // Challenge: Needs optimization
  // - Makes API call to get ALL users then filters (should use query param)
  // - No caching
  // - O(n) client-side filtering
  findByEmail(email: string): Observable<User | undefined> {
    return this.http.get<User[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.email === email))
      // Bug: Fetches all users just to find one by email
    );
  }

  // Challenge: Missing audit logging
  // - No tracking of what changed
  // - No user who made the change
  // - No timestamp of change
  updateUser(id: string, updates: Partial<User>): Observable<User> {
    return this.http.patch<User>(`${this.apiUrl}/${id}`, updates);
  }

  // Challenge: Hard delete with no soft delete option
  // - No confirmation
  // - No undo capability
  // - No cascade handling
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
