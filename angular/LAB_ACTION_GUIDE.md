# Lab Action Guide - Angular/TypeScript

Follow these steps using GitHub Copilot Chat. After each stage, run Summarizer Mode with the Hand-Off prompt so progress lands in `docs/workflow-tracker.md`.

## Quick Reference

| Stage | Primary Modes | Core Artifacts / Commands |
| --- | --- | --- |
| 0 | Agent | `npm install`, `npm run build` |
| 1 | Planning → Agent ↔ Need Review | `#challenge1-login.ts`, `#challenge1-login-solution.md`, CRAFT prompts |
| 2 | Planning → Agent | `#portfolio-service.ts`, `#api-service-method.md`, library patterns |
| 3 | Agent ↔ Need Review | `#contribution-template.ts`, new pattern file |
| 4 | Testing → Agent | `npm run build`, `npm run test`, quality summary |

## Mode Loop Reminder
- Planning → Agent → Need Review → Testing
- Use `#filename` to reference files as chat variables
- Use Summarizer Hand-Off after each stage to track progress

## Essential Guides

| Guide | Use For | Location |
|-------|---------|----------|
| CRAFT Framework | Writing effective prompts | [`docs/craft-framework/guide.md`](../docs/craft-framework/guide.md) |
| Iteration Guide | Improving prompts that don't work | [`docs/craft-framework/iteration-guide.md`](../docs/craft-framework/iteration-guide.md) |
| Pattern Selector | Finding the right pattern | [`docs/pattern-selector.md`](../docs/pattern-selector.md) |
| Variable Substitution | Filling in pattern variables | [`docs/variable-substitution-guide.md`](../docs/variable-substitution-guide.md) |
| Contribution Rubric | Validating patterns for Lab 3 | [`docs/rubrics/pattern-contribution-rubric.md`](../docs/rubrics/pattern-contribution-rubric.md) |

---

## Stage 0 – Environment Setup

- Agent Mode: `#runInTerminal npm install` in the angular folder
- Agent Mode: `#runInTerminal npm run build` to verify compilation
- Agent Mode: confirm Copilot is active by checking the status bar icon
- Agent Mode: open `src/challenges/lab1-basic/` and verify all challenge files are accessible
- Hand-Off: summarize setup status, note any dependency issues or blockers

---

## Stage 1 – Crafting Effective Prompts with CRAFT

> **Tip:** If your prompt doesn't produce 9/10 quality output on the first try, use the [Iteration Guide](../docs/craft-framework/iteration-guide.md) to diagnose and fix the gap.

### 1.1 Challenge 1: Login Function
- Planning Mode: review `#challenge1-login.ts` and identify what makes the prompt "Create a login function" insufficient
- Planning Mode: reference `#guide.md` (CRAFT framework) to plan your improved prompt covering Context, Role, Action, Format, Tone
- Agent Mode: write your CRAFT prompt as a comment in the challenge file, then use Copilot to generate the implementation
- Need Review Mode: compare your generated code against `#challenge1-login-solution.md`; rate quality 1-10
- Hand-Off: record your prompt, quality rating, and key learnings

<details>
<summary>💡 CRAFT Prompt Hint (click to expand)</summary>

**Starter Example:**
```
Context: Angular 17 financial app with JWT auth, HttpClient, RxJS

Role: Senior Angular developer with security expertise

Action: Create login method that:
1. Accepts LoginRequest (email, password, rememberMe)
2. Validates inputs client-side before API call
3. POSTs to /api/auth/login
4. Stores tokens (memory for access, localStorage per rememberMe)
5. Handles 401/429 errors with typed AuthError
6. Emits auth state via BehaviorSubject

Format: TypeScript with full types, Observable<Result<AuthUser, AuthError>>, JSDoc

Constraints: Never log passwords, sanitize email, OnPush compatible
```

📖 **Full example:** See [`solutions/challenge1-login-solution.md`](src/challenges/lab1-basic/solutions/challenge1-login-solution.md)
</details>

### 1.2 Challenge 2: Test Generation
- Planning Mode: review `#challenge2-tests.ts` and the `calculatePortfolioReturn` function
- Agent Mode: craft a CRAFT prompt specifying Jest, edge cases (zero, negative, precision), and parameterized tests
- Agent Mode: generate comprehensive test suite with Copilot
- Need Review Mode: compare against `#challenge2-tests-solution.md`; verify coverage of happy path, edge cases, boundaries
- Hand-Off: record quality rating and which CRAFT elements made the biggest difference

<details>
<summary>💡 CRAFT Prompt Hint (click to expand)</summary>

**Starter Example:**
```
Context: Jest test suite for financial app, testing calculatePortfolioReturn function

Role: QA engineer with expertise in financial calculations and precision testing

Action: Generate test suite covering:
1. Happy path: positive return, negative return, break-even, with dividends
2. Edge cases: zero initial value, very small/large numbers
3. Boundary values: floating point precision (0.1 + 0.2)
4. Invalid inputs: null, undefined, NaN handling

Format: Jest with describe blocks, test.each for parameterized tests

Constraints: Use toBeCloseTo for floating point, each test independent
```

📖 **Full example:** See [`solutions/challenge2-tests-solution.md`](src/challenges/lab1-basic/solutions/challenge2-tests-solution.md)

📚 **Library pattern:** See [`prompt-library/testing/unit-test-suite.prompt.md`](../prompt-library/testing/unit-test-suite.prompt.md)
</details>

### 1.3 Challenge 3: Bug Fix
- Planning Mode: review `#challenge3-bugfix.ts` and identify all bugs (no thousand separators, wrong negative sign, floating point, limited currencies)
- Agent Mode: craft a CRAFT prompt explicitly listing each bug with expected fix approach
- Agent Mode: generate fixed implementation using `Intl.NumberFormat`
- Need Review Mode: compare against `#challenge3-bugfix-solution.md`; verify all edge cases handled
- Hand-Off: record quality rating and bug-fix approach learnings

<details>
<summary>💡 CRAFT Prompt Hint (click to expand)</summary>

**Starter Example:**
```
Context: Angular financial app with buggy formatCurrency function
Current bugs:
- formatCurrency(1234.5, 'USD') → "$1234.5" (missing thousand separator)
- formatCurrency(-50, 'USD') → "$-50" (wrong negative position)
- formatCurrency(0.1 + 0.2, 'USD') → "$0.30000000000000004" (precision error)

Role: Senior developer with i18n experience in financial applications

Action: Fix these specific bugs:
1. Add locale-aware thousand separators
2. Use proper negative currency formatting
3. Round to 2 decimals before formatting
4. Support all ISO 4217 currency codes

Format: TypeScript using Intl.NumberFormat, JSDoc with @example

Constraints: Handle null/undefined, work in all modern browsers
```

📖 **Full example:** See [`solutions/challenge3-bugfix-solution.md`](src/challenges/lab1-basic/solutions/challenge3-bugfix-solution.md)
</details>

### 1.4 Challenge 4: Error Handling
- Planning Mode: review `#challenge4-errors.ts` and catalog missing error handling (401, 429, 500, network, timeout)
- Agent Mode: craft a CRAFT prompt specifying Observable error handling, retry with backoff, typed domain errors
- Agent Mode: generate resilient service method with Copilot
- Need Review Mode: compare against `#challenge4-errors-solution.md`; verify error decision tree coverage
- Hand-Off: record quality rating and RxJS operator usage insights

<details>
<summary>💡 CRAFT Prompt Hint (click to expand)</summary>

**Starter Example:**
```
Context: Angular portfolio service calling external API, currently no error handling

Role: Senior Angular developer with resilience engineering expertise

Action: Add comprehensive error handling:
1. Handle HTTP errors: 401/403 (auth), 404 (not found), 429 (rate limit), 500+ (server)
2. Handle network errors and timeouts
3. Implement retry with exponential backoff using RxJS (3 attempts)
4. Return Observable<Result<Portfolio, PortfolioError>>
5. Transform HttpErrorResponse to typed domain errors

Format: TypeScript with RxJS operators (catchError, retry, timer), discriminated unions

Constraints: Don't retry on 4xx client errors, respect Retry-After header
```

📖 **Full example:** See [`solutions/challenge4-errors-solution.md`](src/challenges/lab1-basic/solutions/challenge4-errors-solution.md)
</details>

### 1.5 Challenge 5: Optimization
- Planning Mode: review `#challenge5-optimize.ts` and analyze the O(n²) complexity problem
- Agent Mode: craft a CRAFT prompt specifying HashMap grouping, timestamp sorting, early termination
- Agent Mode: generate O(n log n) implementation with Copilot
- Need Review Mode: compare against `#challenge5-optimize-solution.md`; verify performance improvement
- Hand-Off: summarize all 5 challenge ratings, average quality score, and top CRAFT insights

<details>
<summary>💡 CRAFT Prompt Hint (click to expand)</summary>

**Starter Example:**
```
Context: Financial app with O(n²) findDuplicateTransactions, processing 10k+ transactions
Currently uses nested loops comparing every pair

Role: Senior developer with algorithm optimization expertise

Action: Optimize to O(n log n):
1. Group transactions by key (symbol+quantity+price) using Map
2. Sort each group by timestamp
3. Within each group, find duplicates within time window (60s)
4. Use early termination when time window exceeded
5. Return DuplicatePair[] with both transactions

Format: TypeScript with Map, Array methods, clear types

Constraints: Maintain accuracy, handle edge cases (empty array, single item groups)
```

📖 **Full example:** See [`solutions/challenge5-optimize-solution.md`](src/challenges/lab1-basic/solutions/challenge5-optimize-solution.md)
</details>

---

## Stage 2 – Applying Library Patterns

> **Tips:**
> - Use the [Pattern Selector](../docs/pattern-selector.md) to find the right pattern for your task
> - See the [Variable Substitution Guide](../docs/variable-substitution-guide.md) for how to fill in `[variables]`

### 2.1 Portfolio Service Pattern
- Planning Mode: review `#portfolio-service.ts` and identify the issues (no caching, no retry, no error transformation)
- Planning Mode: open the API service pattern from the prompt library and plan variable substitution:
  - `[service-name]` → PortfolioService
  - `[method-name]` → getPortfolioById
  - `[endpoint]` → GET /api/portfolios/{id}
  - `[return-type]` → Observable<Portfolio>
  - `[caching]` → shareReplay(1) with 5-minute TTL
  - `[retry]` → 3 attempts with exponential backoff
  - `[errors]` → PortfolioNotFoundError, NetworkError
- Agent Mode: apply the customized pattern prompt in Copilot to generate the improved service
- Agent Mode: complete the improvements checklist in the file
- Hand-Off: record pattern effectiveness and quality rating

📚 **Library pattern to use:**
- [`prompt-library/code-generation/api-service-method.prompt.md`](../prompt-library/code-generation/api-service-method.prompt.md) - API service with caching, retry, error handling

### 2.2 Test Generation Pattern
- Planning Mode: review `#test-generation.ts` and open the unit test pattern
- Agent Mode: apply the testing pattern to generate comprehensive test coverage
- Need Review Mode: verify tests cover happy path, edge cases, mocking, and parameterized scenarios
- Hand-Off: record test coverage insights

📚 **Library pattern to use:**
- [`prompt-library/testing/unit-test-suite.prompt.md`](../prompt-library/testing/unit-test-suite.prompt.md) - Jest/Vitest test generation

### 2.3 Error Handler Pattern
- Agent Mode: review `#error-handler.ts` and select appropriate pattern from prompt library
- Agent Mode: generate error handling service using library pattern
- Hand-Off: summarize Stage 2 pattern usage and average quality rating

📚 **Library patterns to consider:**
- [`prompt-library/security/input-validation.prompt.md`](../prompt-library/security/input-validation.prompt.md) - Input validation with error handling
- [`prompt-library/code-generation/data-transformer.prompt.md`](../prompt-library/code-generation/data-transformer.prompt.md) - Type-safe transformations

---

## Stage 3 – Contributing to the Library

> **Important:** Use the [Pattern Contribution Rubric](../docs/rubrics/pattern-contribution-rubric.md) to validate your pattern before submitting. It includes the test methodology, scoring criteria, and submission checklist.

- Planning Mode: review `#contribution-template.ts` and identify a repeatable prompt pattern you discovered during Labs 1-2
- Planning Mode: outline your pattern including:
  - Pattern name and category
  - Template with `[variables]`
  - Variable descriptions with examples
  - Expected output quality target
- Agent Mode: create your pattern file following the library structure
- Agent Mode: test your pattern 5 times on different scenarios:
  - Test 1: describe input → record output quality
  - Test 2: describe input → record output quality
  - Test 3: describe input → record output quality
  - Test 4: describe input → record output quality
  - Test 5: describe input → record output quality
- Agent Mode: calculate success rate (target ≥80%)
- Need Review Mode: validate pattern meets library contribution criteria
- Agent Mode: if success rate ≥80%, save pattern to `prompt-library/[category]/[pattern-name].prompt.md`
- Hand-Off: record pattern name, category, success rate, and file location

📚 **Reference patterns for contribution ideas:**
- [`prompt-library/refactoring/extract-method.prompt.md`](../prompt-library/refactoring/extract-method.prompt.md) - Extract reusable methods
- [`prompt-library/refactoring/review-and-refactor.prompt.md`](../prompt-library/refactoring/review-and-refactor.prompt.md) - Code review with suggestions
- [`prompt-library/workflow/implementation-plan.prompt.md`](../prompt-library/workflow/implementation-plan.prompt.md) - Planning before coding
- [`prompt-library/workflow/feature-breakdown.prompt.md`](../prompt-library/workflow/feature-breakdown.prompt.md) - Break features into tasks
- [`prompt-library/documentation/jsdoc-generation.prompt.md`](../prompt-library/documentation/jsdoc-generation.prompt.md) - Documentation generation
- See full library: [`prompt-library/README.md`](../prompt-library/README.md)

---

## Stage 4 – Validation & Wrap-Up

- Testing Mode: `#runInTerminal npm run build` – verify no compilation errors
- Testing Mode: `#runInTerminal npm run test` – run any existing tests
- Agent Mode: compile quality summary across all stages:
  | Challenge | Quality Rating | Target |
  |-----------|----------------|--------|
  | 1. Login | ___/10 | 9/10 |
  | 2. Tests | ___/10 | 9/10 |
  | 3. Bug Fix | ___/10 | 9/10 |
  | 4. Errors | ___/10 | 9.5/10 |
  | 5. Optimize | ___/10 | 9/10 |
  | Lab 2 Avg | ___/10 | 9/10 |
- Agent Mode: document top 3 CRAFT learnings in `docs/workflow-tracker.md`
- Hand-Off: confirm final quality scores, pattern contribution status, and next steps for applying CRAFT at work

---

## Troubleshooting

| Issue | Copilot Solution |
|-------|------------------|
| Copilot not responding | Agent Mode: check internet, restart VS Code, verify subscription status |
| Poor quality output | Planning Mode: add more Context, be more specific in Action items |
| Build errors | Agent Mode: `#runInTerminal npm install`, verify Node 18+ |
| Can't find solutions | Agent Mode: solutions are in `challenges/lab1-basic/solutions/` |

## Key Files Reference

### CRAFT Framework
- [`docs/craft-framework/guide.md`](../docs/craft-framework/guide.md) - Complete CRAFT framework guide

### Prompt Library Patterns
| Category | Pattern | Description |
|----------|---------|-------------|
| Code Generation | [`api-service-method.prompt.md`](../prompt-library/code-generation/api-service-method.prompt.md) | HTTP services with caching/retry |
| Code Generation | [`data-transformer.prompt.md`](../prompt-library/code-generation/data-transformer.prompt.md) | Type-safe data transformations |
| Testing | [`unit-test-suite.prompt.md`](../prompt-library/testing/unit-test-suite.prompt.md) | Jest/Vitest test generation |
| Security | [`input-validation.prompt.md`](../prompt-library/security/input-validation.prompt.md) | OWASP-aligned validation |
| Refactoring | [`extract-method.prompt.md`](../prompt-library/refactoring/extract-method.prompt.md) | Extract reusable methods |
| Refactoring | [`review-and-refactor.prompt.md`](../prompt-library/refactoring/review-and-refactor.prompt.md) | Code review with suggestions |
| Workflow | [`implementation-plan.prompt.md`](../prompt-library/workflow/implementation-plan.prompt.md) | Plan before coding (CRAFT) |
| Documentation | [`jsdoc-generation.prompt.md`](../prompt-library/documentation/jsdoc-generation.prompt.md) | JSDoc generation |

### Solution Files
- [`challenge1-login-solution.md`](src/challenges/lab1-basic/solutions/challenge1-login-solution.md) - Login with CRAFT example
- [`challenge2-tests-solution.md`](src/challenges/lab1-basic/solutions/challenge2-tests-solution.md) - Test generation example
- [`challenge3-bugfix-solution.md`](src/challenges/lab1-basic/solutions/challenge3-bugfix-solution.md) - Bug fix example
- [`challenge4-errors-solution.md`](src/challenges/lab1-basic/solutions/challenge4-errors-solution.md) - Error handling example
- [`challenge5-optimize-solution.md`](src/challenges/lab1-basic/solutions/challenge5-optimize-solution.md) - Optimization example

### Progress Tracking
- [`docs/workflow-tracker.md`](../docs/workflow-tracker.md) - Track your progress
