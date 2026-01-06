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

---

## Stage 0 – Environment Setup

- Agent Mode: `#runInTerminal npm install` in the angular folder
- Agent Mode: `#runInTerminal npm run build` to verify compilation
- Agent Mode: confirm Copilot is active by checking the status bar icon
- Agent Mode: open `src/challenges/lab1-basic/` and verify all challenge files are accessible
- Hand-Off: summarize setup status, note any dependency issues or blockers

---

## Stage 1 – Crafting Effective Prompts with CRAFT

### 1.1 Challenge 1: Login Function
- Planning Mode: review `#challenge1-login.ts` and identify what makes the prompt "Create a login function" insufficient
- Planning Mode: reference `#guide.md` (CRAFT framework) to plan your improved prompt covering Context, Role, Action, Format, Tone
- Agent Mode: write your CRAFT prompt as a comment in the challenge file, then use Copilot to generate the implementation
- Need Review Mode: compare your generated code against `#challenge1-login-solution.md`; rate quality 1-10
- Hand-Off: record your prompt, quality rating, and key learnings

### 1.2 Challenge 2: Test Generation
- Planning Mode: review `#challenge2-tests.ts` and the `calculatePortfolioReturn` function
- Agent Mode: craft a CRAFT prompt specifying Jest, edge cases (zero, negative, precision), and parameterized tests
- Agent Mode: generate comprehensive test suite with Copilot
- Need Review Mode: compare against `#challenge2-tests-solution.md`; verify coverage of happy path, edge cases, boundaries
- Hand-Off: record quality rating and which CRAFT elements made the biggest difference

### 1.3 Challenge 3: Bug Fix
- Planning Mode: review `#challenge3-bugfix.ts` and identify all bugs (no thousand separators, wrong negative sign, floating point, limited currencies)
- Agent Mode: craft a CRAFT prompt explicitly listing each bug with expected fix approach
- Agent Mode: generate fixed implementation using `Intl.NumberFormat`
- Need Review Mode: compare against `#challenge3-bugfix-solution.md`; verify all edge cases handled
- Hand-Off: record quality rating and bug-fix approach learnings

### 1.4 Challenge 4: Error Handling
- Planning Mode: review `#challenge4-errors.ts` and catalog missing error handling (401, 429, 500, network, timeout)
- Agent Mode: craft a CRAFT prompt specifying Observable error handling, retry with backoff, typed domain errors
- Agent Mode: generate resilient service method with Copilot
- Need Review Mode: compare against `#challenge4-errors-solution.md`; verify error decision tree coverage
- Hand-Off: record quality rating and RxJS operator usage insights

### 1.5 Challenge 5: Optimization
- Planning Mode: review `#challenge5-optimize.ts` and analyze the O(n²) complexity problem
- Agent Mode: craft a CRAFT prompt specifying HashMap grouping, timestamp sorting, early termination
- Agent Mode: generate O(n log n) implementation with Copilot
- Need Review Mode: compare against `#challenge5-optimize-solution.md`; verify performance improvement
- Hand-Off: summarize all 5 challenge ratings, average quality score, and top CRAFT insights

---

## Stage 2 – Applying Library Patterns

### 2.1 Portfolio Service Pattern
- Planning Mode: review `#portfolio-service.ts` and identify the issues (no caching, no retry, no error transformation)
- Planning Mode: open `#api-service-method.md` from the prompt library and plan variable substitution:
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

### 2.2 Test Generation Pattern
- Planning Mode: review `#test-generation.ts` and open `#unit-test-suite.md`
- Agent Mode: apply the testing pattern to generate comprehensive test coverage
- Need Review Mode: verify tests cover happy path, edge cases, mocking, and parameterized scenarios
- Hand-Off: record test coverage insights

### 2.3 Error Handler Pattern
- Agent Mode: review `#error-handler.ts` and select appropriate pattern from prompt library
- Agent Mode: generate error handling service using library pattern
- Hand-Off: summarize Stage 2 pattern usage and average quality rating

---

## Stage 3 – Contributing to the Library

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
- Agent Mode: if success rate ≥80%, save pattern to `prompt-library/[category]/[pattern-name].md`
- Hand-Off: record pattern name, category, success rate, and file location

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

- CRAFT Framework: `#guide.md` (docs/craft-framework/)
- Prompt Library: `#api-service-method.md`, `#unit-test-suite.md`, `#input-validation.md`
- Solutions: `#challenge1-login-solution.md` through `#challenge5-optimize-solution.md`
- Progress Tracking: `#workflow-tracker.md`
