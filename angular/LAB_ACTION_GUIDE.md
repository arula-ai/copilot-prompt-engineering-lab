# Lab Action Guide - Angular/TypeScript

Follow these steps sequentially. After each stage, check off completed items and note your quality ratings.

## Quick Reference

| Stage | Focus | Core Files / Commands |
| --- | --- | --- |
| 0 | Setup | `npm install`, `npm run build` |
| 1 | CRAFT Basics | `challenges/lab1-basic/challenge*.ts`, `solutions/` |
| 2 | Library Patterns | `challenges/lab2-library/`, `prompt-library/` |
| 3 | Contribution | `challenges/lab3-contribute/`, `prompt-library/` |
| 4 | Validation | `npm run build`, `npm run test`, quality review |

---

## Stage 0 – Environment Setup (5 min)

### Actions
- [ ] Navigate to the Angular folder: `cd angular`
- [ ] Install dependencies: `npm install`
- [ ] Verify build: `npm run build`
- [ ] Confirm Copilot is active in your IDE (check status bar)
- [ ] Open `src/challenges/lab1-basic/` in your editor

### Checkpoint
- Build completes without errors
- Copilot suggestions appearing when you type comments
- Can navigate to challenge files

---

## Stage 1 – Crafting Effective Prompts (25 min)

### Overview
Transform vague prompts into expert prompts using the CRAFT framework.

### CRAFT Framework Quick Reference
| Element | Question to Ask | Example |
|---------|-----------------|---------|
| **C**ontext | What's the tech stack/situation? | Angular 17, financial app, JWT auth |
| **R**ole | What expert should Copilot be? | Senior Angular developer |
| **A**ction | What specific steps are needed? | 1. Validate 2. Call API 3. Handle errors |
| **F**ormat | What should output look like? | Observable, full types, JSDoc |
| **T**one/Constraints | What rules must be followed? | Never log passwords, OWASP compliant |

### Challenge Sequence

#### Challenge 1: Login Function (5 min)
- [ ] Open `challenge1-login.ts`
- [ ] Read the bad prompt: "Create a login function"
- [ ] Write your CRAFT prompt in the designated area
- [ ] Generate code with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge1-login-solution.md`

#### Challenge 2: Test Generation (5 min)
- [ ] Open `challenge2-tests.ts`
- [ ] Read the bad prompt: "Write tests for this"
- [ ] Write your CRAFT prompt targeting Jest/Jasmine
- [ ] Generate test suite with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge2-tests-solution.md`

#### Challenge 3: Bug Fix (5 min)
- [ ] Open `challenge3-bugfix.ts`
- [ ] Read the bad prompt: "Fix the bug"
- [ ] Identify all bugs in the `formatCurrency` function
- [ ] Write your CRAFT prompt listing each bug explicitly
- [ ] Generate fix with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge3-bugfix-solution.md`

#### Challenge 4: Error Handling (5 min)
- [ ] Open `challenge4-errors.ts`
- [ ] Read the bad prompt: "Add error handling"
- [ ] Write your CRAFT prompt specifying each error type (401, 429, 500, network)
- [ ] Generate error handling with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge4-errors-solution.md`

#### Challenge 5: Optimization (5 min)
- [ ] Open `challenge5-optimize.ts`
- [ ] Read the bad prompt: "Optimize this code"
- [ ] Analyze the O(n²) algorithm
- [ ] Write your CRAFT prompt with specific optimization targets
- [ ] Generate optimized code with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge5-optimize-solution.md`

### Stage 1 Checkpoint
- [ ] Completed all 5 challenges
- [ ] Average quality rating: ___/10
- [ ] Identified which CRAFT elements made the biggest difference
- [ ] Notes on what worked well: _________________________________

---

## Stage 2 – Applying Library Patterns (15 min)

### Overview
Use established patterns from the prompt library to generate high-quality code.

### Actions

#### 2.1 Portfolio Service Challenge
- [ ] Open `challenges/lab2-library/portfolio-service.ts`
- [ ] Open `../prompt-library/code-generation/api-service-method.md`
- [ ] Fill in template variables:
  - `[service-name]`: PortfolioService
  - `[method-name]`: getPortfolioById
  - `[endpoint]`: GET /api/portfolios/{id}
  - `[return-type]`: Observable<Portfolio>
  - `[caching]`: shareReplay(1) with 5-minute TTL
  - `[retry]`: 3 attempts with exponential backoff
  - `[errors]`: PortfolioNotFoundError, NetworkError
- [ ] Generate code with your customized prompt
- [ ] Complete the improvements checklist in the file
- [ ] Quality rating: ___/10

#### 2.2 Test Generation Challenge
- [ ] Open `challenges/lab2-library/test-generation.ts`
- [ ] Open `../prompt-library/testing/unit-test-suite.md`
- [ ] Apply the testing pattern to generate comprehensive tests
- [ ] Verify coverage of: happy path, edge cases, error scenarios
- [ ] Quality rating: ___/10

#### 2.3 Error Handler Challenge
- [ ] Open `challenges/lab2-library/error-handler.ts`
- [ ] Choose appropriate pattern from `../prompt-library/`
- [ ] Generate error handling service
- [ ] Quality rating: ___/10

### Stage 2 Checkpoint
- [ ] Successfully used 3 library patterns
- [ ] Understand how to customize pattern variables
- [ ] Average quality rating: ___/10

---

## Stage 3 – Contributing to the Library (10 min)

### Overview
Create your own reusable prompt pattern based on discoveries during the lab.

### Actions
- [ ] Open `challenges/lab3-contribute/contribution-template.ts`
- [ ] Identify a pattern you discovered that works well
- [ ] Fill in the pattern template:
  - Pattern Name: _________________________________
  - Category: [ ] code-generation [ ] testing [ ] refactoring [ ] documentation [ ] security
  - Language: TypeScript/Angular
- [ ] Test your pattern 5 times (use variety of scenarios)
  - Test 1: ___/10
  - Test 2: ___/10
  - Test 3: ___/10
  - Test 4: ___/10
  - Test 5: ___/10
- [ ] Calculate success rate: ___% (target: 80%+)

### Contribution Checklist
- [ ] Pattern tested 5+ times
- [ ] Success rate ≥ 80%
- [ ] Example usage included
- [ ] Variables documented with examples
- [ ] Edge cases noted

### Stage 3 Checkpoint
- [ ] Created library-quality pattern
- [ ] Pattern file saved to: `../prompt-library/[category]/[pattern-name].md`

---

## Stage 4 – Validation & Wrap-Up (5 min)

### Final Validation
- [ ] Run: `npm run build` (no errors)
- [ ] Run: `npm run test` (if tests exist)
- [ ] Review your quality ratings across all challenges

### Quality Summary
| Challenge | Your Rating | Target |
|-----------|-------------|--------|
| 1. Login | ___/10 | 9/10 |
| 2. Tests | ___/10 | 9/10 |
| 3. Bug Fix | ___/10 | 9/10 |
| 4. Errors | ___/10 | 9.5/10 |
| 5. Optimize | ___/10 | 9/10 |
| Lab 2 Avg | ___/10 | 9/10 |

### Key Takeaways
Record your top 3 learnings:
1. _________________________________________________________________
2. _________________________________________________________________
3. _________________________________________________________________

### Next Steps
- [ ] Review `../INSTRUCTOR_GUIDE.md` for additional exercises
- [ ] Explore remaining patterns in `../prompt-library/`
- [ ] Apply CRAFT to your real project work this week

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Copilot not responding | Check internet, restart IDE, verify subscription |
| Poor quality output | Add more context, be more specific in Action items |
| Build errors | Run `npm install`, check Node version (18+) |
| Can't find solutions | Solutions are in `challenges/lab1-basic/solutions/` |

## Resources

- CRAFT Framework: `../docs/craft-framework/guide.md`
- Prompt Library: `../prompt-library/`
- Solution Files: `challenges/lab1-basic/solutions/`
- Instructor Guide: `../INSTRUCTOR_GUIDE.md`
