# Lab Action Guide - Java 17

Follow these steps using GitHub Copilot Chat. After each stage, run Summarizer Mode with the Hand-Off prompt so progress lands in `docs/workflow-tracker.md`.

## Quick Reference

| Stage | Primary Modes | Core Artifacts / Commands |
| --- | --- | --- |
| 0 | Agent | `mvn clean compile`, `mvn test` |
| 1 | Planning → Agent ↔ Need Review | `#Challenge1Login.java`, `#challenge1-login-solution.md`, CRAFT prompts |
| 2 | Planning → Agent | `#PortfolioServiceChallenge.java`, `#api-service-method.md`, library patterns |
| 3 | Agent ↔ Need Review | `#ContributionTemplate.java`, new pattern file |
| 4 | Testing → Agent | `mvn compile`, `mvn test`, quality summary |

## Mode Loop Reminder
- Planning → Agent → Need Review → Testing
- Use `#filename` to reference files as chat variables
- Use Summarizer Hand-Off after each stage to track progress

---

## Stage 0 – Environment Setup

- Agent Mode: verify prerequisites with `#runInTerminal java -version` (requires 17+) and `#runInTerminal mvn -version` (requires 3.8+)
- Agent Mode: `#runInTerminal mvn clean compile` in the java folder
- Agent Mode: `#runInTerminal mvn test` to verify test execution
- Agent Mode: confirm Copilot is active by checking the status bar icon
- Agent Mode: open `src/main/java/com/fidelity/promptlab/challenges/lab1/` and verify all challenge files are accessible
- Hand-Off: summarize setup status, note any dependency issues or blockers

---

## Stage 1 – Crafting Effective Prompts with CRAFT

### 1.1 Challenge 1: Login Method
- Planning Mode: review `#Challenge1Login.java` and identify what makes the prompt "Create a login method" insufficient
- Planning Mode: reference `#guide.md` (CRAFT framework) to plan your improved prompt covering Context, Role, Action, Format, Tone
- Planning Mode: note Java-specific considerations:
  - Spring Security integration
  - BCrypt password encoding
  - JWT token generation
  - Record types for DTOs
  - Account lockout after failed attempts
- Agent Mode: write your CRAFT prompt as a comment in the challenge file, then use Copilot to generate the implementation
- Need Review Mode: compare your generated code against `#challenge1-login-solution.md`; rate quality 1-10
- Hand-Off: record your prompt, quality rating, and key learnings

### 1.2 Challenge 2: Test Generation
- Planning Mode: review `#Challenge2Tests.java` and the `calculatePortfolioReturn` method using BigDecimal
- Planning Mode: note Java-specific testing requirements:
  - JUnit 5 with @Nested and @DisplayName
  - @ParameterizedTest with @CsvSource
  - AssertJ assertions with `isEqualByComparingTo()` for BigDecimal
  - ArithmeticException handling for division by zero
- Agent Mode: craft a CRAFT prompt specifying test framework, edge cases, and parameterized tests
- Agent Mode: generate comprehensive test suite with Copilot
- Need Review Mode: compare against `#challenge2-tests-solution.md`; verify coverage of happy path, edge cases, boundaries
- Hand-Off: record quality rating and which CRAFT elements made the biggest difference

### 1.3 Challenge 3: Bug Fix
- Planning Mode: review `#Challenge3Bugfix.java` and identify all bugs:
  - Using `double` instead of `BigDecimal` (precision errors)
  - No thousand separators
  - Wrong negative sign position ("$-50" vs "-$50")
  - Only USD/EUR supported (should use ISO 4217)
- Agent Mode: craft a CRAFT prompt explicitly listing each bug with expected fix approach
- Agent Mode: generate fixed implementation using `NumberFormat.getCurrencyInstance(Locale)` and `Currency.getInstance()`
- Need Review Mode: compare against `#challenge3-bugfix-solution.md`; verify edge cases including JPY (0 decimals), BHD (3 decimals)
- Hand-Off: record quality rating and bug-fix approach learnings

### 1.4 Challenge 4: Error Handling
- Planning Mode: review `#Challenge4Errors.java` and catalog missing error handling:
  - HTTP status codes: 400, 401, 403, 404, 429, 500+
  - Network errors and timeouts
  - Retry strategy with exponential backoff
  - Typed error responses
- Planning Mode: note Java-specific patterns:
  - Sealed interface for PortfolioError types
  - Result<S, F> pattern instead of exceptions
  - SLF4J logging with MDC context
  - Spring RestClient or WebClient
- Agent Mode: craft a CRAFT prompt specifying error handling strategy and return types
- Agent Mode: generate resilient service method with Copilot
- Need Review Mode: compare against `#challenge4-errors-solution.md`; verify error decision tree coverage
- Hand-Off: record quality rating and sealed interface usage insights

### 1.5 Challenge 5: Optimization
- Planning Mode: review `#Challenge5Optimize.java` and analyze the O(n²) `findDuplicateTransactions` complexity
- Planning Mode: plan optimization approach:
  - HashMap grouping by symbol+quantity+price
  - Timestamp sorting within groups
  - Early termination when time window exceeded
  - Records for configuration options
- Agent Mode: craft a CRAFT prompt specifying target complexity O(n log n) and Java 17 features
- Agent Mode: generate optimized implementation with Copilot
- Need Review Mode: compare against `#challenge5-optimize-solution.md`; verify performance improvement
- Hand-Off: summarize all 5 challenge ratings, average quality score, and top CRAFT insights

---

## Stage 2 – Applying Library Patterns

### 2.1 Portfolio Service Pattern
- Planning Mode: review `#PortfolioServiceChallenge.java` and identify the issues (no caching, no retry, no error transformation)
- Planning Mode: open `#api-service-method.md` from the prompt library and plan variable substitution:
  - `[service-name]` → PortfolioService
  - `[method-name]` → getPortfolioById
  - `[endpoint]` → GET /api/portfolios/{id}
  - `[return-type]` → Result<Portfolio, PortfolioError>
  - `[caching]` → @Cacheable with 5-minute TTL
  - `[retry]` → Resilience4j or manual 3x exponential backoff
  - `[errors]` → PortfolioNotFoundError, NetworkError (sealed interface)
- Agent Mode: apply the customized pattern prompt in Copilot to generate the improved service
- Agent Mode: verify output includes @Service, @Cacheable, retry logic, and typed errors
- Hand-Off: record pattern effectiveness and quality rating

### 2.2 Validation Pattern
- Planning Mode: review `#ValidationChallenge.java` and open `#input-validation.md`
- Planning Mode: note Java-specific validation patterns:
  - Bean Validation annotations (@NotNull, @Pattern, @DecimalMin)
  - Custom validators for complex rules
  - ValidationResult sealed interface
- Agent Mode: apply the validation pattern to generate type-safe validation service
- Need Review Mode: verify validators handle IDOR prevention, input sanitization, OWASP alignment
- Hand-Off: record validation pattern insights

### 2.3 Test Generation Pattern
- Planning Mode: review `#TestGenerationChallenge.java` and open `#unit-test-suite.md`
- Agent Mode: apply the JUnit 5 testing pattern to generate comprehensive test coverage
- Need Review Mode: verify tests include @Nested, @ParameterizedTest, Mockito mocking, AssertJ assertions
- Hand-Off: summarize Stage 2 pattern usage and average quality rating

---

## Stage 3 – Contributing to the Library

- Planning Mode: review `#ContributionTemplate.java` and identify a repeatable prompt pattern you discovered during Labs 1-2
- Planning Mode: consider Java-specific patterns for:
  - Record-based DTOs with validation
  - Spring @Service with @Transactional
  - Repository with custom queries
  - Exception handling with @ControllerAdvice
  - Streams processing pipelines
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
- Agent Mode: if success rate ≥80%, save pattern to `prompt-library/[category]/[pattern-name]-java.md`
- Hand-Off: record pattern name, category, success rate, and file location

---

## Stage 4 – Validation & Wrap-Up

- Testing Mode: `#runInTerminal mvn clean compile` – verify no compilation errors
- Testing Mode: `#runInTerminal mvn test` – run all tests
- Agent Mode: compile quality summary across all stages:
  | Challenge | Quality Rating | Target |
  |-----------|----------------|--------|
  | 1. Login | ___/10 | 9/10 |
  | 2. Tests | ___/10 | 9/10 |
  | 3. Bug Fix | ___/10 | 9/10 |
  | 4. Errors | ___/10 | 9.5/10 |
  | 5. Optimize | ___/10 | 9/10 |
  | Lab 2 Avg | ___/10 | 9/10 |
- Agent Mode: document Java 17 features that improved prompts:
  - [ ] Records for DTOs
  - [ ] Sealed interfaces for error types
  - [ ] Pattern matching in switch
  - [ ] Text blocks for multi-line prompts
  - [ ] Optional for null safety
- Agent Mode: document top 3 CRAFT learnings in `docs/workflow-tracker.md`
- Hand-Off: confirm final quality scores, pattern contribution status, and next steps for applying CRAFT at work

---

## Troubleshooting

| Issue | Copilot Solution |
|-------|------------------|
| Copilot not responding | Agent Mode: check internet, restart IDE, verify subscription status |
| Poor quality output | Planning Mode: add more Context, specify Java version explicitly |
| Build errors | Agent Mode: `#runInTerminal mvn clean`, verify Java 17+ with `java -version` |
| Test failures | Agent Mode: check for missing dependencies in `pom.xml` |
| Can't find solutions | Agent Mode: solutions are in `challenges/lab1/solutions/` |

## Java-Specific Prompting Tips

| Scenario | What to Specify in CRAFT Prompt |
|----------|--------------------------------|
| Money calculations | Use BigDecimal, specify RoundingMode.HALF_UP |
| Date/time | Use java.time.*, specify timezone handling |
| Collections | Mutable vs immutable, Stream API usage |
| Null handling | Optional return, @Nullable/@NonNull annotations |
| Testing | JUnit 5, AssertJ, Mockito versions |
| Spring | Version 3.x, Boot vs Framework |

## Key Files Reference

- CRAFT Framework: `#guide.md` (docs/craft-framework/)
- Prompt Library: `#api-service-method.md`, `#unit-test-suite.md`, `#input-validation.md`
- Java-Specific Patterns: `#api-service-method-java.md`, `#unit-test-suite-java.md`, `#input-validation-java.md`
- Solutions: `#challenge1-login-solution.md` through `#challenge5-optimize-solution.md`
- Progress Tracking: `#workflow-tracker.md`
