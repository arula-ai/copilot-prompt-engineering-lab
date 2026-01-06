# Copilot Prompt Engineering Lab - Java 17

Workshop lab for learning effective prompt engineering with GitHub Copilot using Java 17.

## Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.8+

### Build & Run

```bash
cd java
mvn clean compile
mvn test
```

## Lab Structure

### Lab 1: Crafting Effective Prompts (15 min)
Location: `src/main/java/com/fidelity/promptlab/challenges/lab1/`

Transform vague prompts into effective ones using the CRAFT framework.

| Challenge | File | Bad Prompt |
|-----------|------|------------|
| 1 | Challenge1Login.java | "Create a login method" |
| 2 | Challenge2Tests.java | "Write tests for this" |
| 3 | Challenge3Bugfix.java | "Fix the bug" |
| 4 | Challenge4Errors.java | "Add error handling" |
| 5 | Challenge5Optimize.java | "Optimize this code" |

### Lab 2: Applying Library Patterns (15 min)
Location: `src/main/java/com/fidelity/promptlab/challenges/lab2/`

Use established patterns from the prompt library, adapted for Java.

### Lab 3: Contributing to the Library (10 min)
Create your own library-quality prompt entry.

## Exercises

Start here for hands-on practice:
- **Transform Bad Prompts:** `exercises/bad-prompts/transform-these.md`
- **Reference Examples:** `exercises/good-prompts/reference-examples.md`
- **Your Prompts:** `exercises/your-prompts/` (save your work here)

## Resources

- CRAFT Framework: `../docs/craft-framework/guide.md`
- Quality Rubric: `../docs/rubrics/prompt-quality-rubric.md`
- Prompt Library: `../prompt-library/`

## Key Concepts

**CRAFT Framework:**
- **C**ontext - What's the situation? (Spring Boot, Java version, etc.)
- **R**ole - Who should Copilot act as?
- **A**ction - What exactly should happen?
- **F**ormat - How should output look? (Return type, exceptions, etc.)
- **T**one - What rules/constraints apply? (SOLID, OWASP, etc.)

## Java-Specific Considerations

When writing prompts for Java, consider specifying:
- Java version (17 features like records, sealed classes, pattern matching)
- Build tool (Maven/Gradle)
- Frameworks (Spring Boot, Quarkus, etc.)
- Testing framework (JUnit 5, AssertJ, Mockito)
- Logging framework (SLF4J, Log4j2)
- Exception handling strategy (checked vs unchecked)
