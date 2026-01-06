# Challenge 4: Error Handling - SOLUTION

## Bad Prompt
```
Add error handling
```

## Expert CRAFT Prompt

```
Context:
- Angular 17 service method fetching user portfolios
- Uses HttpClient returning Observables
- Part of financial application requiring high reliability
- Current implementation has NO error handling:
  ```typescript
  async fetchUserPortfolios(userId: string): Promise<any[]> {
    const response = await fetch(`/api/users/${userId}/portfolios`);
    const data = await response.json();
    return data.portfolios;
  }
  ```

Role: Senior Angular developer specializing in resilient API integrations.

Action: Add comprehensive error handling:
1. Input validation:
   - Validate userId is non-empty string
   - Sanitize userId to prevent injection
2. HTTP error handling:
   - 400: ValidationError with field details
   - 401: AuthenticationError, trigger logout flow
   - 403: AuthorizationError with permission details
   - 404: Return empty array (valid case - new user)
   - 429: RateLimitError with retryAfter timestamp
   - 500+: ServerError with correlation ID for support
3. Network error handling:
   - Timeout after 10 seconds
   - Retry 3x with exponential backoff for 5xx/network errors
   - NO retry on 4xx errors
4. Transform all errors to typed domain errors:
   ```typescript
   type PortfolioError =
     | { type: 'validation'; message: string; field?: string }
     | { type: 'auth'; message: string; action: 'login' | 'refresh' }
     | { type: 'rateLimit'; retryAfter: Date }
     | { type: 'server'; message: string; correlationId: string }
     | { type: 'network'; message: string; canRetry: boolean };
   ```
5. Logging:
   - Log errors with context (userId, endpoint, duration)
   - NEVER log tokens or sensitive data

Format:
- Convert to HttpClient + Observable (Angular-idiomatic)
- Return Observable<Result<Portfolio[], PortfolioError>>
- Use RxJS operators: catchError, retry, timeout
- Include JSDoc documentation

Constraints:
- Must use inject() for HttpClient
- Must integrate with existing ErrorService for UI notifications
- Must preserve request cancellation capability (takeUntil pattern)
- Timeout must be configurable via InjectionToken
```

## Why This Works

| CRAFT Element | What It Provides | Impact |
|---------------|------------------|--------|
| **Context** | Current broken code, app domain | AI sees the starting point |
| **Role** | Resilience expertise | Gets retry, timeout, circuit breaker patterns |
| **Action** | Every error type with handling | Complete coverage |
| **Format** | Types, operators, patterns | Idiomatic Angular code |
| **Constraints** | DI, cancellation, logging rules | Production integration |

## Expected Output Quality: 9.5/10

The AI should generate something like:

```typescript
@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(ErrorService);
  private readonly timeout = inject(API_TIMEOUT, { optional: true }) ?? 10000;

  fetchUserPortfolios(userId: string): Observable<Result<Portfolio[], PortfolioError>> {
    // Input validation
    if (!userId?.trim()) {
      return of(Result.failure({ type: 'validation', message: 'User ID required' }));
    }
    const sanitizedId = encodeURIComponent(userId.trim());

    return this.http.get<{ portfolios: Portfolio[] }>(`/api/users/${sanitizedId}/portfolios`).pipe(
      timeout(this.timeout),
      map(response => Result.success(response.portfolios)),
      retry({
        count: 3,
        delay: (error, retryCount) => {
          // Only retry on 5xx or network errors
          if (error instanceof HttpErrorResponse && error.status < 500 && error.status !== 0) {
            throw error;
          }
          return timer(Math.pow(2, retryCount) * 1000);
        }
      }),
      catchError(error => this.handleError(error, userId))
    );
  }

  private handleError(error: unknown, userId: string): Observable<Result<Portfolio[], PortfolioError>> {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401:
          return of(Result.failure({ type: 'auth', message: 'Session expired', action: 'login' }));
        case 404:
          return of(Result.success([])); // New user, no portfolios
        case 429:
          const retryAfter = new Date(Date.now() + (parseInt(error.headers.get('Retry-After') || '60') * 1000));
          return of(Result.failure({ type: 'rateLimit', retryAfter }));
        default:
          if (error.status >= 500) {
            const correlationId = error.headers.get('X-Correlation-ID') || 'unknown';
            return of(Result.failure({ type: 'server', message: 'Service unavailable', correlationId }));
          }
      }
    }
    return of(Result.failure({ type: 'network', message: 'Connection failed', canRetry: true }));
  }
}
```

## Error Handling Decision Tree

```
Request Made
    │
    ├─► Timeout? ──► Retry (up to 3x)
    │
    ├─► 401? ──► Return auth error, trigger logout
    │
    ├─► 404? ──► Return empty array (success)
    │
    ├─► 429? ──► Return rate limit with retry time
    │
    ├─► 4xx? ──► Return validation error (NO retry)
    │
    ├─► 5xx? ──► Retry 3x, then return server error
    │
    └─► Network? ──► Retry 3x, then return network error
```
