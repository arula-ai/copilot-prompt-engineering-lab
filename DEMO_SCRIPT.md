# Demo Script: Live Prompt Engineering Demonstration

## Pre-Demo Setup

1. Open VS Code with the lab project loaded
2. Have two editor tabs ready:
   - Tab 1: Empty TypeScript file for live coding
   - Tab 2: Solution file (hidden) for reference
3. Clear terminal history
4. Ensure Copilot is active (check status bar)
5. Set font size to ~18pt for visibility

---

## Demo 1: The Awakening (5 min)

### Setup
Create a new file `demo-login.ts`

### Script

**[SAY]:** "Let me show you what most developers do with Copilot."

**[TYPE]:**
```typescript
// Create a login function
```

**[WAIT]:** Accept Copilot suggestion (usually something basic like):
```typescript
function login(username: string, password: string) {
  return fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });
}
```

**[SAY]:** "Looks reasonable, right? Now let me ask you some questions."

**[ASK AUDIENCE]:**
- "Does this validate the email format?" (No)
- "Does it handle network errors?" (No)
- "Does it prevent brute force attacks?" (No)
- "Would you deploy this to production?" (Hopefully no!)

**[SAY]:** "This is a 3/10. Let's see what a 9/10 looks like."

---

## Demo 2: The CRAFT Transformation (10 min)

### Setup
Clear the file or create `demo-login-expert.ts`

### Script

**[SAY]:** "Watch how I build an expert prompt using CRAFT. I'll add each element one by one."

**[TYPE]:** (Building incrementally, explaining each section)

```typescript
// Context:
// - Angular 17 financial services application
// - JWT authentication with refresh tokens
// - HttpClient for API calls, RxJS for async handling
// - Must integrate with existing AuthService and TokenStorage
```

**[SAY]:** "Context tells Copilot our tech stack and constraints. Without this, it guesses."

```typescript
// Role: Senior Angular developer with security expertise in financial applications.
```

**[SAY]:** "Role sets the expertise level. Watch how this changes the security considerations."

```typescript
// Action: Create a login method in AuthService that:
// 1. Accepts LoginRequest (email: string, password: string, rememberMe?: boolean)
// 2. Validates inputs client-side before API call
// 3. POST to /api/auth/login with credentials
// 4. On success: store access token in memory, refresh token per rememberMe preference
// 5. On 401: return typed AuthError with user-friendly message
// 6. On 429: return rate limit error with retry-after time
// 7. Emit auth state change via BehaviorSubject
// 8. Log attempt (success/failure) without sensitive data
```

**[SAY]:** "Action is the detailed specification. Each numbered item becomes a feature in the code."

```typescript
// Format: TypeScript with:
// - Full types (LoginRequest, LoginResponse, AuthError)
// - Observable<Result<AuthUser, AuthError>> return type
// - JSDoc with @example
// - inject() for dependencies

// Constraints:
// - Never log passwords or tokens
// - Clear sensitive data from memory on failure
// - Rate limit awareness (don't retry immediately on 429)
// - Must work with OnPush change detection
// - Sanitize email input (trim, lowercase)
```

**[SAY]:** "Format and Constraints ensure the output matches our codebase standards and security requirements."

**[WAIT]:** Let Copilot generate the solution

### Expected Output (highlight these features):

```typescript
interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

// ... (Copilot generates comprehensive implementation)
```

**[HIGHLIGHT]:**
- "Look - it created the type interfaces I asked for"
- "Notice the error handling for 401 AND 429"
- "See how it uses inject() not constructor injection"
- "The email is sanitized with trim() and toLowerCase()"
- "No passwords in the logging calls"

**[SAY]:** "This is a 9/10. Same task, expert prompt. The difference is about 30 seconds of thinking upfront that saves hours of debugging later."

---

## Demo 3: Test Generation (5 min, if time)

### Setup
Create `demo-tests.ts`

### Script

**[SAY]:** "Let's see CRAFT applied to test generation."

**[TYPE]:** (Bad prompt first)
```typescript
// Write tests for this function
function calculateReturn(initial: number, final: number): number {
  return ((final - initial) / initial) * 100;
}
```

**[SHOW]:** Basic test output (usually just happy path)

**[SAY]:** "Now watch with CRAFT."

**[TYPE]:**
```typescript
// Context: Jest 29 test suite for Angular financial application
// Testing calculateReturn function that calculates percentage return
// Financial precision required (currency values)

// Role: QA engineer with expertise in financial calculations and edge case testing

// Action: Generate comprehensive test suite covering:
// 1. Happy path: positive return, negative return, break-even
// 2. Edge cases: zero initial (division handling), very small values, very large values
// 3. Boundary values: Number.MAX_SAFE_INTEGER, floating point precision (0.1 + 0.2)
// 4. Invalid inputs: NaN, Infinity, undefined, null

// Format: Jest with describe/it blocks, test.each for parameterized tests
// Constraints: Use toBeCloseTo for floating point, minimum 12 tests
```

**[SHOW]:** Comprehensive test output

**[HIGHLIGHT]:**
- "Edge cases I would have forgotten"
- "Parameterized tests for boundaries"
- "Proper floating point comparison"

---

## Demo 4: Bug Fix (5 min, if time)

### Setup
Create `demo-bugfix.ts`

### Script

**[SAY]:** "Bug fixing is where specificity really matters."

**[TYPE]:** (Show the buggy code)
```typescript
// Bad prompt: "Fix this bug"

function formatCurrency(amount: number, currency: string): string {
  const symbol = currency === 'USD' ? '$' : '€';
  return symbol + amount;
}
// Bug: formatCurrency(1234.5, 'USD') returns "$1234.5" not "$1,234.50"
// Bug: formatCurrency(-50, 'USD') returns "$-50" not "-$50.00"
```

**[SAY]:** "Vague prompt gives vague fixes. Let's be specific."

**[TYPE]:**
```typescript
// Context: Financial application displaying portfolio values
// Current output bugs:
// - formatCurrency(1234.5, 'USD')  -> "$1234.5" (should be "$1,234.50")
// - formatCurrency(-50, 'USD')     -> "$-50" (should be "-$50.00")
// - formatCurrency(0.1 + 0.2, 'USD') -> "$0.30000000000000004" (precision error)

// Role: Senior developer with i18n experience in financial applications

// Action: Fix these specific bugs:
// 1. Add thousand separators using locale-aware formatting
// 2. Fix negative sign position (use proper currency formatting)
// 3. Fix floating point precision (round to 2 decimal places)
// 4. Support all ISO 4217 currency codes (not just USD/EUR)

// Format: TypeScript using Intl.NumberFormat
// Constraints: Handle null gracefully, pure function, no external libraries
```

**[SHOW]:** Proper implementation with Intl.NumberFormat

---

## Closing Remarks

**[SAY]:**
"Let me leave you with three takeaways:

1. **CRAFT is your checklist** - Context, Role, Action, Format, Constraints. Use it every time.

2. **Specificity wins** - 30 seconds of prompt thinking saves hours of debugging.

3. **Iterate** - Your first prompt is rarely perfect. Refine based on output.

The prompt library in this repo has templates for common tasks. Use them as starting points and customize for your needs."

---

## Backup Talking Points

If Copilot is slow or produces unexpected results:

- "This is actually a great teaching moment - AI tools aren't deterministic. Let me show you how to iterate..."
- "Notice the output quality varies. This is why the prompt library helps ensure consistent starting points."
- "Even with the same prompt, you might get different results. The CRAFT framework gives you a basis for refinement."

## Key Phrases to Use

- "Watch how [specific element] changes the output..."
- "This is what I call the 'CRAFT difference'..."
- "A developer who learns to prompt well becomes 10x more effective..."
- "The prompt IS the specification..."
- "Copilot is only as good as the instructions you give it..."
