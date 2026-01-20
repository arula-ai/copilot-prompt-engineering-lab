# Copilot Prompt Engineering Lab

A hands-on workshop for learning expert-level prompt engineering with GitHub Copilot using the CRAFT framework.

## Workshop Overview

**Duration:** 75 minutes
**Tracks:** Angular/TypeScript or Java 17
**Goal:** Transform vague prompts into expert prompts that generate 9/10 quality code

## Quick Start

### 1. Choose Your Track

| Track | Setup | Action Guide |
|-------|-------|--------------|
| **Angular/TypeScript** | `cd angular && npm install && npm run build` | [`angular/LAB_ACTION_GUIDE.md`](angular/LAB_ACTION_GUIDE.md) |
| **Java 17** | `cd java && mvn clean compile` | [`java/LAB_ACTION_GUIDE.md`](java/LAB_ACTION_GUIDE.md) |

### 2. Open Your Guides

- **Action Guide:** `[angular|java]/LAB_ACTION_GUIDE.md` - Step-by-step walkthrough with examples and hints
- **Progress Tracker:** [`docs/workflow-tracker.md`](docs/workflow-tracker.md) - Track your progress
- **CRAFT Framework:** [`docs/craft-framework/guide.md`](docs/craft-framework/guide.md) - Complete CRAFT reference

### 3. Verify Copilot

- Check Copilot icon is active in your IDE
- Open Copilot Chat panel
- You're ready to begin!

## Lab Structure

### Lab 1: Crafting Effective Prompts (25 min)

Transform 5 vague prompts into expert prompts using the CRAFT framework.

| Challenge | Bad Prompt | What You'll Learn |
|-----------|------------|-------------------|
| 1. Login | "Create a login function" | Security-focused authentication |
| 2. Tests | "Write tests for this" | Comprehensive test coverage |
| 3. Bug Fix | "Fix the bug" | Systematic bug identification |
| 4. Errors | "Add error handling" | Resilient error management |
| 5. Optimize | "Optimize this code" | Algorithm optimization |

**Solutions included:** Each challenge has collapsible hints in the Action Guide, plus full expert CRAFT prompts in `solutions/` folders.

### Lab 2: Applying Library Patterns (15 min)

Use established patterns from the prompt library to generate production-ready code.

- API service methods with caching and retry
- Comprehensive test suites
- Input validation with security

### Lab 3: Contributing to the Library (10 min)

Create your own reusable prompt pattern and test it for consistency (≥80% success rate).

## Copilot Chat Modes

This lab uses GitHub Copilot Chat modes for different tasks:

| Mode | Purpose | Example |
|------|---------|---------|
| **Agent** | Generate code, run commands | `Agent Mode: Generate the login service` |
| **Planning** | Review files, plan approach | `Planning Mode: Review #challenge1-login.ts` |
| **Need Review** | Compare against solutions | `Need Review Mode: Rate my output` |
| **Testing** | Run builds and tests | `Testing Mode: #runInTerminal npm test` |
| **Hand-Off** | Document progress | `Hand-Off: Summarize Stage 1` |

Chat mode configurations are in `.github/copilot-chat/`.

## The CRAFT Framework

| Element | Question | Example |
|---------|----------|---------|
| **C**ontext | What's the situation? | "Angular 17 financial app with JWT auth..." |
| **R**ole | Who should Copilot act as? | "Senior developer with security expertise..." |
| **A**ction | What exactly should happen? | "1. Validate input 2. Call API 3. Handle errors..." |
| **F**ormat | How should output look? | "Observable<Result<T, E>>, full types, JSDoc..." |
| **T**one/Constraints | What rules apply? | "Never log passwords, OWASP compliant..." |

Full guide: [`docs/craft-framework/guide.md`](docs/craft-framework/guide.md)

## Repository Structure

```
copilot-prompt-engineering-lab/
├── angular/                          # TypeScript/Angular track
│   ├── LAB_ACTION_GUIDE.md          # Step-by-step walkthrough with hints
│   ├── README.md                    # Angular-specific setup
│   └── src/challenges/
│       ├── lab1-basic/              # CRAFT challenges
│       │   └── solutions/           # Expert CRAFT prompt examples
│       ├── lab2-library/            # Library pattern exercises
│       └── lab3-contribute/         # Pattern contribution
│
├── java/                             # Java 17 track
│   ├── LAB_ACTION_GUIDE.md          # Step-by-step walkthrough with hints
│   ├── README.md                    # Java-specific setup
│   └── src/main/java/.../challenges/
│       ├── lab1/                    # CRAFT challenges
│       │   └── solutions/           # Expert CRAFT prompt examples
│       ├── lab2/                    # Library pattern exercises
│       └── lab3/                    # Pattern contribution
│
├── prompt-library/                   # 18 reusable prompt patterns (.prompt.md)
│   ├── code-generation/             # API services, data transformers
│   ├── testing/                     # Unit tests (Jest, JUnit 5)
│   ├── refactoring/                 # Extract method, review & refactor
│   ├── documentation/               # JSDoc, README generation
│   ├── security/                    # Validation, auth guards
│   ├── workflow/                    # Planning, commits, feature breakdown
│   └── README.md                    # Library documentation
│
├── .github/
│   └── copilot-chat/                # Chat mode definitions
│       ├── need-review.chatmode.md  # Quality review mode
│       └── hand-off.chatmode.md     # Progress summarizer mode
│
├── docs/
│   ├── craft-framework/guide.md     # Complete CRAFT framework guide
│   ├── workflow-tracker.md          # Progress tracking template
│   ├── rubrics/                     # Quality assessment rubrics
│   └── examples/                    # Before/after prompt examples
│
└── README.md                        # This file
```

## Prompt Library (18 Patterns)

All patterns use the official [VS Code Copilot prompt file format](https://code.visualstudio.com/docs/copilot/customization/prompt-files) (`.prompt.md`).

### Code Generation
| Pattern | File | Success Rate |
|---------|------|--------------|
| API Service Method | [`api-service-method.prompt.md`](prompt-library/code-generation/api-service-method.prompt.md) | 94% |
| API Service (Java) | [`api-service-method-java.prompt.md`](prompt-library/code-generation/api-service-method-java.prompt.md) | 93% |
| Data Transformer | [`data-transformer.prompt.md`](prompt-library/code-generation/data-transformer.prompt.md) | 91% |

### Testing
| Pattern | File | Success Rate |
|---------|------|--------------|
| Unit Test Suite | [`unit-test-suite.prompt.md`](prompt-library/testing/unit-test-suite.prompt.md) | 89% |
| Unit Test (Java) | [`unit-test-suite-java.prompt.md`](prompt-library/testing/unit-test-suite-java.prompt.md) | 91% |

### Security
| Pattern | File | Success Rate |
|---------|------|--------------|
| Input Validation | [`input-validation.prompt.md`](prompt-library/security/input-validation.prompt.md) | 88% |
| Input Validation (Java) | [`input-validation-java.prompt.md`](prompt-library/security/input-validation-java.prompt.md) | 90% |
| Auth Guard | [`auth-guard.prompt.md`](prompt-library/security/auth-guard.prompt.md) | 92% |

### Refactoring
| Pattern | File | Success Rate |
|---------|------|--------------|
| Extract Method | [`extract-method.prompt.md`](prompt-library/refactoring/extract-method.prompt.md) | 90% |
| Parameter Object | [`introduce-parameter-object.prompt.md`](prompt-library/refactoring/introduce-parameter-object.prompt.md) | 88% |
| Polymorphism | [`replace-conditional-with-polymorphism.prompt.md`](prompt-library/refactoring/replace-conditional-with-polymorphism.prompt.md) | 85% |
| Simplify Expression | [`simplify-complex-expression.prompt.md`](prompt-library/refactoring/simplify-complex-expression.prompt.md) | 91% |
| Review & Refactor | [`review-and-refactor.prompt.md`](prompt-library/refactoring/review-and-refactor.prompt.md) | 87% |

### Documentation
| Pattern | File | Success Rate |
|---------|------|--------------|
| JSDoc/Javadoc | [`jsdoc-generation.prompt.md`](prompt-library/documentation/jsdoc-generation.prompt.md) | 92% |
| README Generator | [`readme-generator.prompt.md`](prompt-library/documentation/readme-generator.prompt.md) | 91% |

### Workflow
| Pattern | File | Success Rate |
|---------|------|--------------|
| Conventional Commit | [`conventional-commit.prompt.md`](prompt-library/workflow/conventional-commit.prompt.md) | 95% |
| Implementation Plan | [`implementation-plan.prompt.md`](prompt-library/workflow/implementation-plan.prompt.md) | 88% |
| Feature Breakdown | [`feature-breakdown.prompt.md`](prompt-library/workflow/feature-breakdown.prompt.md) | 90% |

Full library documentation: [`prompt-library/README.md`](prompt-library/README.md)

## Workshop Flow

1. **Hook (5 min):** Show bad vs expert prompt difference
2. **CRAFT Introduction (10 min):** Teach the framework
3. **Lab 1 (25 min):** Hands-on CRAFT practice
4. **Lab 2 (15 min):** Library pattern application
5. **Lab 3 (10 min):** Pattern contribution
6. **Wrap-up (5 min):** Key takeaways

## Success Metrics

| Metric | Target |
|--------|--------|
| Challenge quality ratings | ≥9/10 |
| Library pattern usage | ≥80% success |
| Pattern contribution | 5+ tests at ≥80% |

## Resources

- **CRAFT Framework:** [`docs/craft-framework/guide.md`](docs/craft-framework/guide.md)
- **Prompt Library:** [`prompt-library/`](prompt-library/)
- **Quality Rubric:** [`docs/rubrics/prompt-quality-rubric.md`](docs/rubrics/prompt-quality-rubric.md)
- **Before/After Examples:** [`docs/examples/before-after.md`](docs/examples/before-after.md)
- **Copilot Modes:** [`.github/copilot-chat/`](.github/copilot-chat/)
- **VS Code Prompt Files:** [Official Documentation](https://code.visualstudio.com/docs/copilot/customization/prompt-files)

## Contributing

To add a new prompt pattern:

1. Test it 5+ times with ≥80% success rate
2. Use the official `.prompt.md` format with YAML frontmatter
3. Include `agent`, `description`, `tools`, and `argument-hint`
4. Add "Required Information" section and common pitfalls
5. Submit a PR to the appropriate category folder

See [`prompt-library/README.md`](prompt-library/README.md) for the complete format guide.

---

*Expert prompts are specific, complete, and tested. Use CRAFT for every prompt.*
