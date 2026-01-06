# GenAI DevAssist | Prompt Engineering
## Participant Guide v2.0

**Version:** 2.0
**Duration:** 75 minutes
**Fidelity DevAssist Program**

---

## Table of Contents

1. [Workshop Overview](#workshop-overview)
2. [Getting Started](#getting-started)
3. [Copilot Chat Modes](#copilot-chat-modes)
4. [The CRAFT Framework](#the-craft-framework)
5. [Lab 1: Crafting Effective Prompts](#lab-1-crafting-effective-prompts)
6. [Lab 2: Applying Library Patterns](#lab-2-applying-library-patterns)
7. [Lab 3: Contributing to the Library](#lab-3-contributing-to-the-library)
8. [Quick Reference Guide](#quick-reference-guide)
9. [Homework](#homework)

---

## Workshop Overview

### Learning Objectives

By completing this workshop, you will be able to:

1. **Compose** clear, specific prompts that generate high-quality code using the CRAFT framework
2. **Apply** prompt library patterns for consistent, production-ready output
3. **Evaluate** prompt effectiveness using Copilot's Need Review Mode
4. **Contribute** reusable patterns to the shared prompt library

### Success Metrics

| Metric | Target |
|--------|--------|
| Challenge quality ratings | ≥9/10 |
| Library pattern success | ≥80% |
| Pattern contribution | 5+ test runs at ≥80% success |

### Choose Your Track

This workshop supports two language tracks:

| Track | Folder | Action Guide |
|-------|--------|--------------|
| **Angular/TypeScript** | `angular/` | `angular/LAB_ACTION_GUIDE.md` |
| **Java 17** | `java/` | `java/LAB_ACTION_GUIDE.md` |

**Your Track:** ☐ Angular/TypeScript  ☐ Java 17

---

## Getting Started

### Step 1: Environment Setup

**Angular Track:**
```bash
cd angular
npm install
npm run build
```

**Java Track:**
```bash
cd java
mvn clean compile
mvn test
```

### Step 2: Verify Copilot

- Check the Copilot icon in your IDE status bar (should be active)
- Open Copilot Chat panel
- Test with: "Hello, what can you help me with?"

### Step 3: Open Your Action Guide

Open the LAB_ACTION_GUIDE.md for your track—it contains step-by-step instructions using Copilot Chat modes.

### Step 4: Initialize Progress Tracker

Open `docs/workflow-tracker.md` and fill in:
- Your name
- Language track
- Start time

---

## Copilot Chat Modes

This lab uses different Copilot Chat modes for different tasks. Switch modes based on what you need to accomplish.

### Agent Mode
**Use for:** Executing tasks, running commands, generating code

```
Agent Mode: Write your CRAFT prompt in the challenge file, then use Copilot to generate the implementation
Agent Mode: #runInTerminal npm run build
```

### Planning Mode
**Use for:** Reviewing files, planning approach, analyzing problems

```
Planning Mode: Review #challenge1-login.ts and identify what makes "Create a login function" insufficient
Planning Mode: Reference #guide.md to plan your CRAFT prompt
```

### Need Review Mode
**Use for:** Comparing output against solutions, rating quality

```
Need Review Mode: Compare my generated code against #challenge1-login-solution.md
Need Review Mode: Rate my output quality and provide feedback
```

### Testing Mode
**Use for:** Running builds and tests, validating output

```
Testing Mode: #runInTerminal npm run test
Testing Mode: #runInTerminal mvn test
```

### Hand-Off Mode
**Use for:** Documenting progress after each stage

```
Hand-Off: Summarize Stage 1 progress and append to #workflow-tracker.md
```

### File References

Use `#filename` to reference files as chat variables:
- `#challenge1-login.ts` - Challenge file
- `#challenge1-login-solution.md` - Solution file
- `#api-service-method.md` - Library pattern
- `#workflow-tracker.md` - Progress tracker

---

## The CRAFT Framework

Use this framework for every prompt you write.

### C - Context
**What is the situation?**

| Include | Example |
|---------|---------|
| Framework & version | Angular 17, Spring Boot 3 |
| App type & domain | Financial services, trading |
| Existing patterns | JWT auth, RxJS, BigDecimal |
| Dependencies | HttpClient, RestClient |

**TypeScript Example:**
```
Context:
- Angular 17 financial services application
- JWT authentication with refresh tokens
- HttpClient for API calls, RxJS for async handling
- Must integrate with existing AuthService and TokenStorage
```

**Java Example:**
```
Context:
- Spring Boot 3 financial services application
- JWT authentication with Spring Security
- Uses RestClient for API calls
- Must integrate with existing UserRepository and JwtTokenService
```

### R - Role
**Who should Copilot act as?**

| Include | Example |
|---------|---------|
| Expertise level | Senior, specialist |
| Domain knowledge | Security, performance, testing |
| Framework expertise | Angular, Spring Boot |

**Example:**
```
Role: Senior Angular developer with security expertise in financial applications.
```

### A - Action
**What exactly should happen?**

Always use **numbered requirements**:

```
Action: Create a login method that:
1. Accepts LoginRequest (email: string, password: string, rememberMe?: boolean)
2. Validates inputs client-side before API call
3. POST to /api/auth/login with credentials
4. On success: store access token in memory, refresh token per rememberMe
5. On 401: return typed AuthError with user-friendly message
6. On 429: return rate limit error with retry-after time
7. Emit auth state change via BehaviorSubject
8. Log attempt (success/failure) without sensitive data
```

### F - Format
**How should output look?**

**TypeScript:**
```
Format: TypeScript with:
- Full types (LoginRequest, LoginResponse, AuthError)
- Observable<Result<AuthUser, AuthError>> return type
- JSDoc with @example
- inject() for dependencies
```

**Java:**
```
Format: Java 17+ with:
- Record types for DTOs
- Sealed interface for error types
- Javadoc with @param, @return, @throws
- @Service annotation
```

### T - Tone/Constraints
**What rules must be followed?**

```
Constraints:
- Never log passwords or tokens
- Clear sensitive data from memory on failure
- Rate limit awareness (don't retry immediately on 429)
- Must handle null inputs without throwing
- Follow OWASP authentication guidelines
```

---

## Lab 1: Crafting Effective Prompts

### Objective
Transform 5 vague prompts into expert prompts using CRAFT.

**Duration:** 25 minutes (5 min per challenge)

**Location:**
- Angular: `angular/src/challenges/lab1-basic/`
- Java: `java/src/main/java/.../challenges/lab1/`

### Workflow for Each Challenge

1. **Planning Mode:** Review the challenge file and identify gaps in the bad prompt
2. **Planning Mode:** Plan your CRAFT prompt using the framework
3. **Agent Mode:** Write your prompt and generate code with Copilot
4. **Need Review Mode:** Compare against the solution file and rate quality
5. **Hand-Off:** Record your rating and key learnings

---

### Challenge 1: Login Function

**Bad Prompt:** `"Create a login function"`

**Planning Mode:** Open your challenge file and identify what's missing:
- ☐ No framework/version specified
- ☐ No auth mechanism details
- ☐ No error handling requirements
- ☐ No security constraints
- ☐ No return type specified

**Your CRAFT Prompt:**

**Context:**
```




```

**Role:**
```

```

**Action:**
```
1.
2.
3.
4.
5.
```

**Format:**
```


```

**Constraints:**
```


```

**Agent Mode:** Generate code → **Need Review Mode:** Compare with `#challenge1-login-solution.md`

**Quality Rating:** ___/10  **Target:** 9/10

---

### Challenge 2: Test Generation

**Bad Prompt:** `"Write tests for this"`

**Your CRAFT Prompt:**

**Context:**
```



```

**Role:**
```

```

**Action:**
```
1. Happy path tests:
2. Edge cases:
3. Boundary values:
4. Invalid inputs:
```

**Format:**
```

```

**Constraints:**
```

```

**Quality Rating:** ___/10  **Target:** 9/10

---

### Challenge 3: Bug Fix

**Bad Prompt:** `"Fix the bug"`

**Planning Mode:** Identify all bugs in the code:
- ☐ Bug 1: ________________________________
- ☐ Bug 2: ________________________________
- ☐ Bug 3: ________________________________
- ☐ Bug 4: ________________________________

**Your CRAFT Prompt:**

**Context:**
```


```

**Role:**
```

```

**Action:** (List each bug with expected fix)
```
1. BUG: _____________ → FIX: _____________
2. BUG: _____________ → FIX: _____________
3. BUG: _____________ → FIX: _____________
4. BUG: _____________ → FIX: _____________
```

**Format:**
```

```

**Constraints:**
```

```

**Quality Rating:** ___/10  **Target:** 9/10

---

### Challenge 4: Error Handling

**Bad Prompt:** `"Add error handling"`

**Planning Mode:** Catalog all error scenarios:
- ☐ HTTP 400 (validation)
- ☐ HTTP 401 (authentication)
- ☐ HTTP 403 (authorization)
- ☐ HTTP 404 (not found)
- ☐ HTTP 429 (rate limit)
- ☐ HTTP 500+ (server error)
- ☐ Network timeout
- ☐ Connection failure

**Your CRAFT Prompt:**

**Context:**
```


```

**Role:**
```

```

**Action:**
```
1. Input validation:
2. HTTP error handling:
   - 400:
   - 401:
   - 404:
   - 429:
   - 500+:
3. Network error handling:
4. Retry strategy:
5. Logging:
```

**Format:**
```

```

**Constraints:**
```

```

**Quality Rating:** ___/10  **Target:** 9.5/10

---

### Challenge 5: Code Optimization

**Bad Prompt:** `"Optimize this code"`

**Planning Mode:** Analyze the current implementation:
- Current complexity: O(_____)
- Target complexity: O(_____)
- Optimization technique: ________________________________

**Your CRAFT Prompt:**

**Context:**
```


```

**Role:**
```

```

**Action:**
```
1. Time complexity: Reduce from O(___) to O(___)
   - Technique:
2. Memory efficiency:
3. Readability:
4. Maintainability:
```

**Format:**
```

```

**Constraints:**
```

```

**Quality Rating:** ___/10  **Target:** 9/10

---

### Lab 1 Summary

**Hand-Off Mode:** Document your Stage 1 progress

| Challenge | Bad Prompt | Your Rating | Target | Key Improvement |
|-----------|------------|-------------|--------|-----------------|
| 1. Login | "Create login" | ___/10 | 9/10 | |
| 2. Tests | "Write tests" | ___/10 | 9/10 | |
| 3. Bug Fix | "Fix bug" | ___/10 | 9/10 | |
| 4. Errors | "Add errors" | ___/10 | 9.5/10 | |
| 5. Optimize | "Optimize" | ___/10 | 9/10 | |

**Average Quality:** ___/10

**Most Impactful CRAFT Element:** ☐ Context  ☐ Role  ☐ Action  ☐ Format  ☐ Constraints

**Key Insight:**
```

```

---

## Lab 2: Applying Library Patterns

### Objective
Use prompt library patterns to generate production-ready code.

**Duration:** 15 minutes

**Pattern Location:** `prompt-library/`

### Workflow

1. **Planning Mode:** Review challenge file and identify issues
2. **Planning Mode:** Open library pattern and plan variable substitution
3. **Agent Mode:** Apply customized pattern in Copilot
4. **Need Review Mode:** Verify output meets pattern criteria
5. **Hand-Off:** Record pattern effectiveness

---

### Task 1: API Service Method (5 min)

**Pattern:** `#api-service-method.md`

**Challenge File:**
- Angular: `#portfolio-service.ts`
- Java: `#PortfolioServiceChallenge.java`

**Fill in the Variables:**

| Variable | Your Value |
|----------|------------|
| `[service-name]` | PortfolioService |
| `[method-name]` | getPortfolioById |
| `[endpoint]` | GET /api/portfolios/{id} |
| `[return-type]` | |
| `[caching]` | |
| `[retry]` | |
| `[errors]` | |

**Quality Rating:** ___/10

---

### Task 2: Test Generation (5 min)

**Pattern:** `#unit-test-suite.md`

**Variables to Fill:**

| Variable | Your Value |
|----------|------------|
| `[function-name]` | |
| `[test-framework]` | Jest / JUnit 5 |
| `[happy-path-tests]` | |
| `[edge-cases]` | |
| `[error-scenarios]` | |

**Quality Rating:** ___/10

---

### Task 3: Input Validation (5 min)

**Pattern:** `#input-validation.md`

**Variables to Fill:**

| Variable | Your Value |
|----------|------------|
| `[input-type]` | |
| `[field-1]` | |
| `[field-2]` | |
| `[security-concern-1]` | |
| `[security-concern-2]` | |

**Quality Rating:** ___/10

---

### Lab 2 Summary

**Hand-Off Mode:** Document your Stage 2 progress

| Task | Pattern Used | Quality |
|------|--------------|---------|
| 1. API Service | api-service-method.md | ___/10 |
| 2. Test Suite | unit-test-suite.md | ___/10 |
| 3. Validation | input-validation.md | ___/10 |

**Average Quality:** ___/10

**What made library patterns effective?**
```

```

---

## Lab 3: Contributing to the Library

### Objective
Create a library-quality prompt pattern and test for consistency.

**Duration:** 10 minutes

### Step 1: Identify Your Pattern

From Labs 1-2, identify a prompt approach that worked well:

**Pattern Name:** ________________________________

**Category:** ☐ Code Generation  ☐ Testing  ☐ Refactoring  ☐ Documentation  ☐ Security

**Problem it Solves:** ________________________________

---

### Step 2: Create the Pattern Template

```markdown
# Pattern: [Your Pattern Name]

**Category:** [Category]
**Language:** [TypeScript / Java]
**Success Rate:** ___%
**Last Verified:** [Date]

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `[var-1]` | | |
| `[var-2]` | | |
| `[var-3]` | | |

## Prompt Template

```
[Your template with [variables] marked]
```

## Example Usage

```
[A completely filled-in example]
```

## Expected Output Quality: ___/10

## Common Pitfalls

| Pitfall | Solution |
|---------|----------|
| | |
| | |
```

---

### Step 3: Test for Consistency (5 runs)

**Agent Mode:** Run your pattern 5 times with different inputs

| Run | Input Scenario | Quality | Pass/Fail |
|-----|----------------|---------|-----------|
| 1 | | ___/10 | ☐ |
| 2 | | ___/10 | ☐ |
| 3 | | ___/10 | ☐ |
| 4 | | ___/10 | ☐ |
| 5 | | ___/10 | ☐ |

**Success Rate:** ___/5 = ___%  **(Target: ≥80%)**

---

### Step 4: Submit Contribution

If success rate ≥80%:

**Agent Mode:** Save pattern to `prompt-library/[category]/[pattern-name].md`

**Contribution Status:** ☐ Not Ready  ☐ Ready  ☐ Submitted

---

### Lab 3 Summary

**Hand-Off Mode:** Document your Stage 3 progress

| Field | Value |
|-------|-------|
| Pattern Name | |
| Category | |
| Success Rate | % |
| File Location | |

---

## Quick Reference Guide

### CRAFT Checklist

Before generating code, verify your prompt has:

- [ ] **Context:** Framework, version, dependencies, domain
- [ ] **Role:** Expertise level, domain knowledge
- [ ] **Action:** Numbered requirements, specific steps
- [ ] **Format:** Types, patterns, documentation style
- [ ] **Constraints:** Rules, security, performance

### Quality Rating Scale

| Score | Description |
|-------|-------------|
| 9-10 | Expert-level, production-ready |
| 7-8 | Good quality, minor improvements needed |
| 5-6 | Acceptable, several gaps to address |
| 3-4 | Needs significant improvement |
| 1-2 | Does not meet requirements |

### Common Prompt Improvements

| Problem | Solution |
|---------|----------|
| Generic output | Add more Context details |
| Wrong patterns | Specify Role expertise |
| Missing features | Use numbered Action list |
| Poor structure | Define Format explicitly |
| Insecure code | Add security Constraints |

### Copilot Mode Quick Reference

| Mode | When to Use |
|------|-------------|
| Agent | Generate code, run commands |
| Planning | Review files, plan approach |
| Need Review | Compare against solutions |
| Testing | Run builds and tests |
| Hand-Off | Document progress |

---

## Homework

### Required (Due in 1 week)

#### 1. Submit One Library Contribution
- Use template from Lab 3
- Test 5+ times with ≥80% success
- Include all edge cases
- Create PR to prompt library

**Status:** ☐ Not Started  ☐ In Progress  ☐ Submitted

#### 2. Apply CRAFT to 5 Real Tasks
Document prompts from your actual project work:

| Task | CRAFT Used? | Quality |
|------|-------------|---------|
| 1. | ☐ | ___/10 |
| 2. | ☐ | ___/10 |
| 3. | ☐ | ___/10 |
| 4. | ☐ | ___/10 |
| 5. | ☐ | ___/10 |

#### 3. Review Team's Top Prompts
Apply quality rubric to prompts your team uses:

**Completed:** ☐ Yes  ☐ No

---

## Workshop Summary

### Final Quality Scores

| Lab | Average | Target |
|-----|---------|--------|
| Lab 1 | ___/10 | 9/10 |
| Lab 2 | ___/10 | 9/10 |
| Lab 3 | ___% | 80%+ |

### Top 3 Learnings

1. ________________________________________________________________
2. ________________________________________________________________
3. ________________________________________________________________

### Action Items for Your Team

1. ________________________________________________________________
2. ________________________________________________________________
3. ________________________________________________________________

---

## Resources

- **Your Action Guide:** `[angular|java]/LAB_ACTION_GUIDE.md`
- **Progress Tracker:** `docs/workflow-tracker.md`
- **Prompt Library:** `prompt-library/`
- **Solutions:** `[angular|java]/src/challenges/lab1*/solutions/`
- **CRAFT Framework:** `docs/craft-framework/guide.md`
- **Copilot Modes:** `.github/copilot-chat/`

---

**Participant Information**

| Field | Value |
|-------|-------|
| Name | |
| Team | |
| Date | |
| Track | ☐ Angular  ☐ Java |
| Lab 1 Avg | ___/10 |
| Lab 2 Avg | ___/10 |
| Lab 3 Success | ___% |

---

**End of Participant Guide**

*Remember: Expert prompts are specific, complete, and tested. Use CRAFT for every prompt.*
