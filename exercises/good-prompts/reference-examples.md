# Reference Examples: Good Prompts

These prompts demonstrate effective use of the CRAFT framework.

## Example 1: API Service Method

```
Context: Angular 16 financial application using HttpClient for API calls.
Services follow our standard pattern with Observable return types.

Role: Senior Angular developer with RxJS expertise.

Action: Create a getAccountBalances method in AccountService that:
1. Accepts userId (string) and optional accountIds (string[])
2. Calls GET /api/users/{userId}/accounts/balances
3. Caches results for 5 minutes
4. Retries failed requests 3 times with exponential backoff

Format: TypeScript with full types, JSDoc comments, and proper error handling.

Constraints:
- Must return Observable<AccountBalance[]>
- Must handle 401 by redirecting to login
- Must not retry on 4xx errors
- Cache key must include all parameters
```

**Why it works:** Specific context, clear action steps, defined error handling, explicit constraints.

---

## Example 2: Unit Tests

```
Context: Jest test suite for a pure TypeScript function that calculates
portfolio returns including dividends.

Role: QA engineer focused on edge cases and boundary conditions.

Action: Generate comprehensive tests for calculatePortfolioReturn() that cover:
1. Normal scenarios: gains, losses, break-even
2. Edge cases: zero initial value, negative values
3. Boundary values: very small decimals, large numbers
4. Invalid inputs: NaN, undefined, null

Format: Jest describe/it blocks with clear test names describing behavior.

Constraints:
- Use toBeCloseTo for floating point comparisons
- Each test must be independent
- Include at least 12 test cases
- Group tests by scenario type
```

**Why it works:** Specifies framework, lists scenarios, sets minimum coverage, handles precision issues.

---

## Example 3: Security-Focused Validation

```
Context: Express.js API endpoint receiving login requests.
Must comply with OWASP security guidelines.

Role: Security engineer implementing defensive coding practices.

Action: Create validateLoginRequest function that:
1. Validates email format and length (max 254 chars)
2. Validates password presence (no content validation for security)
3. Sanitizes inputs against injection attacks
4. Returns structured validation result

Format: TypeScript function returning { valid: boolean, errors?: string[], data?: LoginRequest }

Constraints:
- Must not throw exceptions
- Must not reveal whether email exists in error messages
- Must trim and lowercase email
- Must not log password content
- Must be synchronous
```

**Why it works:** Security context explicit, OWASP reference, specific security constraints.
