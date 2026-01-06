# Reference Examples: Good Prompts (TypeScript/Angular)

These prompts demonstrate effective use of the CRAFT framework for Angular development.

## Example 1: API Service Method

```
Context: Angular 16 financial application using HttpClient for API calls.
Services follow our standard pattern with Observable return types and
constructor-based dependency injection.

Role: Senior Angular developer with RxJS expertise.

Action: Create a getAccountBalances method in AccountService that:
1. Accepts userId (string) and optional accountIds (string[])
2. Calls GET /api/users/{userId}/accounts/balances
3. Uses shareReplay(1) for caching with 5-minute TTL
4. Implements retry with exponential backoff (3 attempts) using retryWhen
5. Cancels on component destroy via takeUntil pattern

Format: TypeScript with:
- Full types (no 'any')
- JSDoc comments
- Proper error transformation to domain errors

Constraints:
- Must return Observable<AccountBalance[]>
- Must handle 401 by calling AuthService.logout()
- Must not retry on 4xx errors
- Cache key must include all parameters
```

**Why it works:** Specific Angular patterns (RxJS operators, DI), clear error handling, performance considerations.

---

## Example 2: Component Unit Tests

```
Context: Jest test suite for a TransactionListComponent that displays
paginated transactions with filtering. Uses OnPush change detection.

Role: QA engineer focused on Angular testing best practices.

Action: Generate comprehensive tests for TransactionListComponent:
1. Component creation and initialization
2. Input binding for transactions array
3. Output emission when transaction selected
4. Filter functionality with debounce
5. Pagination controls

Format: Jest with Angular TestBed:
- describe/it blocks with clear behavior descriptions
- Use ComponentFixture and DebugElement
- Mock TransactionService with jest.fn()
- Use fakeAsync/tick for debounce testing

Constraints:
- Each test independent (fresh TestBed)
- Test both template and component logic
- Minimum 10 test cases
- Use data-testid attributes for queries
```

**Why it works:** Specifies Angular testing utilities, handles async patterns, clear coverage goals.

---

## Example 3: HTTP Error Interceptor

```
Context: Angular 16 app needing global HTTP error handling.
Uses NgRx for state, has existing ErrorService for notifications.

Role: Senior Angular developer with security focus.

Action: Create an HTTP interceptor that:
1. Catches all HTTP errors from HttpClient
2. Handles 401 - clears auth state, redirects to /login
3. Handles 403 - shows "Access Denied" via ErrorService
4. Handles 404 - transforms to typed NotFoundError
5. Handles 5xx - shows generic error, logs details
6. Preserves original error for specific handling

Format: TypeScript implementing HttpInterceptor:
- Use catchError operator
- Return throwError with typed errors
- Include request URL in error context

Constraints:
- Must not intercept auth endpoints (/api/auth/*)
- Must work with both HttpClient and HttpClientModule
- Must be tree-shakable (use HTTP_INTERCEPTORS token)
- Log errors but never log sensitive data (tokens, passwords)
```

**Why it works:** Specific Angular HTTP patterns, security considerations, NgRx integration.

---

## Example 4: Reactive Form Validation

```
Context: Angular reactive form for transaction entry in financial app.
Must validate in real-time with custom async validators.

Role: Senior Angular developer with forms expertise.

Action: Create a TransactionFormComponent with:
1. FormGroup with symbol, quantity, price, type fields
2. Sync validators: required, min/max, pattern for symbol
3. Async validator: check symbol exists via API
4. Cross-field validation: total cannot exceed account balance
5. Error messages displayed per field

Format: TypeScript with:
- Strongly typed FormGroup using FormBuilder
- Custom validator functions
- Template showing validation errors
- Debounced async validation (300ms)

Constraints:
- Use OnPush change detection
- Validators must be pure functions
- Form must be accessible (aria attributes)
- Submit disabled until valid
```

**Why it works:** Comprehensive form requirements, accessibility, performance patterns.

---

## Example 5: Modern Angular 17+ with Signals and inject()

```
Context: Angular 17 application using the latest patterns including signals
for reactive state, inject() function for DI, and functional guards/interceptors.

Role: Senior Angular developer proficient in Angular 17+ features.

Action: Create a PortfolioStateService that:
1. Uses inject() instead of constructor DI
2. Uses signal() for reactive portfolio state
3. Uses computed() for derived values (total value, gain/loss)
4. Uses effect() for side effects (logging, persistence)
5. Exposes readonly signals to consumers

Format: TypeScript with:
- Standalone service with providedIn: 'root'
- Type-safe signals: WritableSignal<Portfolio[]>
- Computed signals for aggregations
- Effect for localStorage sync

Constraints:
- No RxJS for state management (signals only)
- Must work with OnPush components
- Must handle initial load from API (one-time observable)
- Use toSignal() for HTTP responses
```

**Why it works:** Uses latest Angular patterns, clear migration from RxJS to signals, practical use case.

---

## Example 6: Functional HTTP Interceptor (Angular 17+)

```
Context: Angular 17 app using functional interceptors (HttpInterceptorFn)
instead of class-based interceptors.

Role: Senior Angular developer with functional programming focus.

Action: Create a functional authentication interceptor that:
1. Adds JWT from AuthService to Authorization header
2. Uses inject() to access AuthService within the function
3. Handles token refresh on 401 using switchMap
4. Queues requests during refresh to prevent race conditions
5. Clears auth state on refresh failure

Format: TypeScript implementing HttpInterceptorFn:
- Export as const: authInterceptor: HttpInterceptorFn
- Use inject() for services
- Return Observable<HttpEvent<unknown>>

Constraints:
- Must be tree-shakable (no class decorator)
- Configure via provideHttpClient(withInterceptors([...]))
- Must handle concurrent 401s (single refresh)
- Log auth events without exposing tokens
```

**Why it works:** Demonstrates modern functional interceptor pattern, proper inject() usage in functions.

---

## Key Angular Patterns to Reference

| Pattern | When to Mention |
|---------|-----------------|
| `Observable<T>` | Any async data |
| `takeUntil` / `DestroyRef` | Component subscriptions |
| `shareReplay` | Caching HTTP responses |
| `OnPush` | Performance optimization |
| `async` pipe | Template subscriptions |
| `trackBy` | ngFor performance |
| `inject()` | Modern DI pattern (Angular 14+) |
| `signal()` | Angular 16+ reactivity |
| `computed()` | Derived signal values |
| `effect()` | Signal side effects |
| `toSignal()` | Convert Observable to Signal |
| `HttpInterceptorFn` | Functional interceptors (Angular 15+) |
| `withInterceptors()` | Register functional interceptors |
| `DestroyRef` | Injection-based cleanup |
