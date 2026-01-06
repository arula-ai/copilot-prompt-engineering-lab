# Challenge 1: Login Function - SOLUTION

## Bad Prompt
```
Create a login function
```

## Expert CRAFT Prompt

```
Context:
- Angular 17 financial services application
- JWT authentication with refresh tokens
- HttpClient for API calls, RxJS for async handling
- Must integrate with existing AuthService and TokenStorage

Role: Senior Angular developer with security expertise in financial applications.

Action: Create a login method in AuthService that:
1. Accepts LoginRequest (email: string, password: string, rememberMe?: boolean)
2. Validates inputs client-side before API call
3. POST to /api/auth/login with credentials
4. On success: store access token in memory, refresh token per rememberMe preference
5. On 401: return typed AuthError with user-friendly message
6. On 429: return rate limit error with retry-after time
7. Emit auth state change via BehaviorSubject
8. Log attempt (success/failure) without sensitive data

Format: TypeScript with:
- Full types (LoginRequest, LoginResponse, AuthError)
- Observable<Result<AuthUser, AuthError>> return type
- JSDoc with @example
- inject() for dependencies

Constraints:
- Never log passwords or tokens
- Clear sensitive data from memory on failure
- Rate limit awareness (don't retry immediately on 429)
- Must work with OnPush change detection
- Sanitize email input (trim, lowercase)
```

## Why This Works

| CRAFT Element | What It Provides | Impact |
|---------------|------------------|--------|
| **Context** | Framework, auth mechanism, dependencies | AI knows the tech stack |
| **Role** | Security + financial expertise | Gets security best practices |
| **Action** | 8 numbered requirements | Nothing ambiguous |
| **Format** | Specific types, patterns, documentation | Production-ready output |
| **Constraints** | Security rules, performance needs | Avoids common vulnerabilities |

## Expected Output Quality: 9/10

The AI should generate:
- Properly typed request/response interfaces
- Observable-based async flow
- Token storage abstraction
- Error transformation to domain types
- No sensitive data in logs
- Rate limiting awareness

## Common Variations

### Simpler Version (Still Good)
```
Context: Angular 17 app with JWT auth
Role: Senior developer focused on security

Create a login method that:
1. Accepts email and password
2. POSTs to /api/auth/login
3. Returns Observable<LoginResult>
4. Handles 401 and 429 errors
5. Stores tokens securely

Format: TypeScript with full types
Constraints: Never log credentials, sanitize inputs
```

### More Specific Version (When Needed)
Add these for complex requirements:
```
Additional requirements:
- Support MFA flow (returns requiresMfa: true)
- Integrate with biometric auth on mobile
- Track login attempts in analytics (anonymized)
- Support SSO redirect for enterprise users
```
