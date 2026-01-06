# Pattern: API Service Method

**Category:** Code Generation
**Language:** TypeScript/Angular
**Success Rate:** 94%
**Last Verified:** December 2025

## Prompt Template

```
Create a [service-name] service method in TypeScript that:

Context:
- Application: [Angular/React/Node.js] with [framework-version]
- Existing patterns: [describe existing service patterns]
- Dependencies: [list relevant services/modules]

Method Requirements:
- Name: [method-name]
- Accepts: [input-parameters-with-types]
- Returns: [Observable<T>/Promise<T>] of [return-type]

Features to include:
1. [feature-1, e.g., "Caching with 5-minute TTL"]
2. [feature-2, e.g., "Retry logic with exponential backoff (3 attempts)"]
3. [feature-3, e.g., "Error transformation to domain errors"]

Error handling:
- [error-scenario-1]: [how to handle]
- [error-scenario-2]: [how to handle]

Format: TypeScript with full type definitions and JSDoc comments
Constraints: [any constraints, e.g., "No external dependencies"]
```

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| service-name | Name of the service | "Portfolio" |
| method-name | Method to create | "getBalances" |
| input-parameters | Method inputs | "userId: string, accountIds?: string[]" |
| return-type | What method returns | "AccountBalance[]" |
| feature-1..n | Required features | "Caching", "Retry logic" |
| error-scenario | Error cases | "Network timeout", "Auth failure" |

## Example Usage

```
Create a Portfolio service method in TypeScript that:

Context:
- Application: Angular 16 with RxJS 7
- Existing patterns: Services use HttpClient, return Observables
- Dependencies: HttpClient, AuthService, CacheService

Method Requirements:
- Name: getAccountBalances
- Accepts: userId: string, accountIds?: string[]
- Returns: Observable<AccountBalance[]>

Features to include:
1. Caching with 5-minute TTL using CacheService
2. Retry logic with exponential backoff (3 attempts)
3. Request cancellation on component destroy

Error handling:
- 401 Unauthorized: Redirect to login via AuthService
- 404 Not Found: Return empty array
- 500 Server Error: Throw with user-friendly message

Format: TypeScript with full type definitions and JSDoc comments
Constraints: Must integrate with existing error interceptor
```

## Expected Output Quality: 9/10

## Edge Cases Discovered
- When accountIds is empty array vs undefined, behavior differs
- Cache key should include all parameters
- Retry should not apply to 4xx errors
