# Copilot Prompt Engineering Lab

Workshop lab for learning effective prompt engineering with GitHub Copilot.

## Choose Your Language

| Language | Directory | Getting Started |
|----------|-----------|-----------------|
| **Angular/TypeScript** | `angular/` | `cd angular && npm install && npm run build` |
| **Java 17** | `java/` | `cd java && mvn clean compile` |

Both versions cover the same concepts and challenges, adapted for language-specific patterns.

## Lab Structure (75 minutes)

### Lab 1: Crafting Effective Prompts (15 min)
Transform vague prompts into effective ones using the CRAFT framework.

| Challenge | Bad Prompt | Goal |
|-----------|------------|------|
| 1 | "Create a login function" | Security-focused auth |
| 2 | "Write tests for this" | Comprehensive test suite |
| 3 | "Fix the bug" | Multi-bug identification |
| 4 | "Add error handling" | Robust error management |
| 5 | "Optimize this code" | Specific optimization |

### Lab 2: Applying Library Patterns (15 min)
Use established patterns from the prompt library.

### Lab 3: Contributing to the Library (10 min)
Create your own library-quality prompt entry.

## Shared Resources

- **CRAFT Framework:** `docs/craft-framework/guide.md`
- **Quality Rubric:** `docs/rubrics/prompt-quality-rubric.md`
- **Prompt Library:** `prompt-library/`
- **Exercises:** `exercises/`

## The CRAFT Framework

| Element | Question | Example |
|---------|----------|---------|
| **C**ontext | What's the situation? | "Spring Boot 3.2 with JPA..." |
| **R**ole | Who should Copilot act as? | "Senior security engineer..." |
| **A**ction | What exactly should happen? | "1. Validate input 2. Hash password..." |
| **F**ormat | How should output look? | "Return Optional<User>, throw on invalid" |
| **T**one | What rules/constraints apply? | "OWASP compliant, no field injection" |

## Prompt Library Patterns

### Language-Agnostic
- `code-generation/api-service-method.md`
- `code-generation/data-transformer.md`
- `testing/unit-test-suite.md`
- `security/input-validation.md`
- `security/auth-guard.md`
- `refactoring/extract-method.md`
- `documentation/jsdoc-generation.md`

### Java-Specific
- `code-generation/api-service-method-java.md`
- `testing/unit-test-suite-java.md`
- `security/input-validation-java.md`

## Quick Start

### Angular/TypeScript
```bash
cd angular
npm install
npm run build
# Start with exercises/bad-prompts/transform-these.md
```

### Java 17
```bash
cd java
mvn clean compile
mvn test
# Start with src/main/java/.../challenges/lab1/Challenge1Login.java
```
