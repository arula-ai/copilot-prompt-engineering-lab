# Lab Action Guide - Java 17

Follow these steps sequentially. After each stage, check off completed items and note your quality ratings.

## Quick Reference

| Stage | Focus | Core Files / Commands |
| --- | --- | --- |
| 0 | Setup | `mvn clean compile`, `mvn test` |
| 1 | CRAFT Basics | `challenges/lab1/Challenge*.java`, `solutions/` |
| 2 | Library Patterns | `challenges/lab2/`, `prompt-library/` |
| 3 | Contribution | `challenges/lab3/`, `prompt-library/` |
| 4 | Validation | `mvn compile`, `mvn test`, quality review |

---

## Stage 0 – Environment Setup (5 min)

### Prerequisites
- Java 17 or higher: `java -version`
- Maven 3.8+: `mvn -version`

### Actions
- [ ] Navigate to the Java folder: `cd java`
- [ ] Compile the project: `mvn clean compile`
- [ ] Run tests: `mvn test`
- [ ] Confirm Copilot is active in your IDE (check status bar)
- [ ] Open `src/main/java/com/fidelity/promptlab/challenges/lab1/` in your editor

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
| **C**ontext | What's the tech stack/situation? | Spring Boot 3, Java 17, financial app |
| **R**ole | What expert should Copilot be? | Senior Java developer with Spring Security expertise |
| **A**ction | What specific steps are needed? | 1. Validate 2. Call service 3. Handle exceptions |
| **F**ormat | What should output look like? | Records, Optional, sealed interfaces, Javadoc |
| **T**one/Constraints | What rules must be followed? | OWASP compliant, use BigDecimal for money |

### Challenge Sequence

#### Challenge 1: Login Method (5 min)
- [ ] Open `Challenge1Login.java`
- [ ] Read the bad prompt: "Create a login method"
- [ ] Write your CRAFT prompt in the designated area
- [ ] Generate code with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge1-login-solution.md`

**Java-Specific Tips:**
- Specify: Spring Security, BCrypt, JWT tokens
- Request: records for DTOs, @Service annotation
- Constrain: timing-safe password comparison, account lockout

#### Challenge 2: Test Generation (5 min)
- [ ] Open `Challenge2Tests.java`
- [ ] Read the bad prompt: "Write tests for this"
- [ ] Analyze the `calculatePortfolioReturn` method with BigDecimal
- [ ] Write your CRAFT prompt targeting JUnit 5 + AssertJ
- [ ] Generate test suite with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge2-tests-solution.md`

**Java-Specific Tips:**
- Specify: @Nested classes, @ParameterizedTest, @DisplayName
- Request: `isEqualByComparingTo()` for BigDecimal comparisons
- Cover: ArithmeticException for division by zero

#### Challenge 3: Bug Fix (5 min)
- [ ] Open `Challenge3Bugfix.java`
- [ ] Read the bad prompt: "Fix the bug"
- [ ] Identify all bugs in the `formatCurrency` method:
  - Using `double` instead of `BigDecimal`
  - No thousand separators
  - Wrong negative sign position
  - Only USD/EUR supported
- [ ] Write your CRAFT prompt listing each bug explicitly
- [ ] Generate fix with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge3-bugfix-solution.md`

**Java-Specific Tips:**
- Request: `NumberFormat.getCurrencyInstance(Locale)`
- Specify: `Currency.getInstance()` for ISO 4217 codes
- Handle: currencies with different decimal places (JPY=0, USD=2, BHD=3)

#### Challenge 4: Error Handling (5 min)
- [ ] Open `Challenge4Errors.java`
- [ ] Read the bad prompt: "Add error handling"
- [ ] Analyze the missing error handling in `fetchUserPortfolios`
- [ ] Write your CRAFT prompt specifying:
  - HTTP status codes: 400, 401, 403, 404, 429, 500+
  - Network errors and timeouts
  - Retry strategy with exponential backoff
  - Typed error responses (sealed interface)
- [ ] Generate error handling with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge4-errors-solution.md`

**Java-Specific Tips:**
- Request: sealed interface for PortfolioError types
- Specify: Result<S, F> pattern instead of exceptions
- Include: SLF4J logging with MDC context

#### Challenge 5: Optimization (5 min)
- [ ] Open `Challenge5Optimize.java`
- [ ] Read the bad prompt: "Optimize this code"
- [ ] Analyze the O(n²) `findDuplicateTransactions` algorithm
- [ ] Write your CRAFT prompt with specific optimization targets:
  - Reduce to O(n log n) using HashMap grouping
  - Sort by timestamp for early termination
  - Use records for configuration
- [ ] Generate optimized code with Copilot
- [ ] Rate the output quality (1-10): ___
- [ ] Compare with `solutions/challenge5-optimize-solution.md`

**Java-Specific Tips:**
- Request: Streams API with `Collectors.groupingBy()`
- Specify: `LocalDateTime` comparison using nanos for performance
- Include: benchmark comparison in Javadoc

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
- [ ] Open `challenges/lab2/PortfolioServiceChallenge.java`
- [ ] Open `../prompt-library/code-generation/api-service-method.md`
- [ ] Review the Java example in the pattern file
- [ ] Fill in template variables:
  - `[service-name]`: PortfolioService
  - `[method-name]`: getPortfolioById
  - `[endpoint]`: GET /api/portfolios/{id}
  - `[return-type]`: Result<Portfolio, PortfolioError>
  - `[caching]`: @Cacheable with 5-minute TTL
  - `[retry]`: Resilience4j or manual 3x exponential backoff
  - `[errors]`: PortfolioNotFoundError, NetworkError
- [ ] Generate code with your customized prompt
- [ ] Quality rating: ___/10

#### 2.2 Validation Challenge
- [ ] Open `challenges/lab2/ValidationChallenge.java`
- [ ] Open `../prompt-library/security/input-validation.md`
- [ ] Apply the Java validation pattern with Bean Validation
- [ ] Generate validation service
- [ ] Quality rating: ___/10

#### 2.3 Test Generation Challenge
- [ ] Open `challenges/lab2/TestGenerationChallenge.java`
- [ ] Open `../prompt-library/testing/unit-test-suite.md`
- [ ] Apply the JUnit 5 testing pattern
- [ ] Verify coverage includes: @Nested, @ParameterizedTest, Mockito
- [ ] Quality rating: ___/10

### Stage 2 Checkpoint
- [ ] Successfully used 3 library patterns
- [ ] Understand how to customize pattern variables for Java
- [ ] Average quality rating: ___/10

---

## Stage 3 – Contributing to the Library (10 min)

### Overview
Create your own reusable prompt pattern based on discoveries during the lab.

### Actions
- [ ] Open `challenges/lab3/ContributionTemplate.java`
- [ ] Identify a pattern you discovered that works well
- [ ] Fill in the pattern template:
  - Pattern Name: _________________________________
  - Category: [ ] code-generation [ ] testing [ ] refactoring [ ] documentation [ ] security
  - Language: Java 17 / Spring Boot
- [ ] Test your pattern 5 times (use variety of scenarios)
  - Test 1: ___/10
  - Test 2: ___/10
  - Test 3: ___/10
  - Test 4: ___/10
  - Test 5: ___/10
- [ ] Calculate success rate: ___% (target: 80%+)

### Java-Specific Pattern Ideas
Consider patterns for:
- Record-based DTOs with validation
- Spring @Service with @Transactional
- Repository with custom queries
- Exception handling with @ControllerAdvice
- Streams processing pipelines

### Contribution Checklist
- [ ] Pattern tested 5+ times
- [ ] Success rate ≥ 80%
- [ ] Java example usage included
- [ ] Variables documented with examples
- [ ] Edge cases noted (null handling, exceptions)

### Stage 3 Checkpoint
- [ ] Created library-quality pattern
- [ ] Pattern file saved to: `../prompt-library/[category]/[pattern-name]-java.md`

---

## Stage 4 – Validation & Wrap-Up (5 min)

### Final Validation
- [ ] Run: `mvn clean compile` (no errors)
- [ ] Run: `mvn test` (tests pass)
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

### Java-Specific Learnings
What Java 17+ features improved your prompts?
- [ ] Records for DTOs
- [ ] Sealed interfaces for error types
- [ ] Pattern matching in switch
- [ ] Text blocks for multi-line prompts
- [ ] Optional for null safety

### Next Steps
- [ ] Review `../INSTRUCTOR_GUIDE.md` for additional exercises
- [ ] Explore remaining patterns in `../prompt-library/`
- [ ] Apply CRAFT to your real project work this week
- [ ] Try the Java-specific patterns: `*-java.md` files in prompt library

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Copilot not responding | Check internet, restart IDE, verify subscription |
| Poor quality output | Add more context, specify Java version explicitly |
| Build errors | Check Java version (`java -version`), run `mvn clean` |
| Test failures | Check for missing dependencies in `pom.xml` |
| Can't find solutions | Solutions are in `challenges/lab1/solutions/` |

## Java-Specific Prompting Tips

| Scenario | What to Specify |
|----------|-----------------|
| Money calculations | Use BigDecimal, specify RoundingMode |
| Date/time | Use java.time.*, specify timezone handling |
| Collections | Mutable vs immutable, Stream API usage |
| Null handling | Optional return, @Nullable annotations |
| Testing | JUnit 5, AssertJ, Mockito versions |
| Spring | Version 3.x, Boot vs Framework |

## Resources

- CRAFT Framework: `../docs/craft-framework/guide.md`
- Prompt Library: `../prompt-library/`
- Java-Specific Patterns: `../prompt-library/*-java.md`
- Solution Files: `challenges/lab1/solutions/`
- Instructor Guide: `../INSTRUCTOR_GUIDE.md`
