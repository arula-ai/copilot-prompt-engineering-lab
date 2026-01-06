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
| **Angular/TypeScript** | `cd angular && npm install && npm run build` | `angular/LAB_ACTION_GUIDE.md` |
| **Java 17** | `cd java && mvn clean compile` | `java/LAB_ACTION_GUIDE.md` |

### 2. Open Your Guides

- **Participant Guide:** `02-prompt-engineering-participant-guide.md` - Your workbook for the lab
- **Action Guide:** `[angular\|java]/LAB_ACTION_GUIDE.md` - Step-by-step Copilot instructions
- **Progress Tracker:** `docs/workflow-tracker.md` - Track your progress

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

**Solutions included:** Compare your prompts against expert solutions in `solutions/` folders.

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

## Repository Structure

```
copilot-prompt-engineering-lab/
├── angular/                          # TypeScript/Angular track
│   ├── LAB_ACTION_GUIDE.md          # Step-by-step Copilot instructions
│   ├── src/challenges/
│   │   ├── lab1-basic/              # CRAFT challenges
│   │   │   └── solutions/           # Expert prompt solutions
│   │   ├── lab2-library/            # Library pattern exercises
│   │   └── lab3-contribute/         # Pattern contribution
│   └── README.md                    # Angular-specific guide
│
├── java/                             # Java 17 track
│   ├── LAB_ACTION_GUIDE.md          # Step-by-step Copilot instructions
│   ├── src/main/java/.../challenges/
│   │   ├── lab1/                    # CRAFT challenges
│   │   │   └── solutions/           # Expert prompt solutions
│   │   ├── lab2/                    # Library pattern exercises
│   │   └── lab3/                    # Pattern contribution
│   └── README.md                    # Java-specific guide
│
├── prompt-library/                   # Reusable prompt patterns
│   ├── code-generation/             # API services, data transformers
│   ├── testing/                     # Unit tests, integration tests
│   ├── refactoring/                 # Extract method, simplify
│   ├── documentation/               # JSDoc, Javadoc
│   └── security/                    # Validation, auth guards
│
├── .github/
│   ├── copilot-instructions.md      # Base Copilot configuration
│   └── copilot-chat/                # Chat mode definitions
│       ├── need-review.chatmode.md  # Quality review mode
│       └── hand-off.chatmode.md     # Progress summarizer mode
│
├── docs/
│   └── workflow-tracker.md          # Progress tracking template
│
├── 02-prompt-engineering-participant-guide.md  # Student workbook
├── INSTRUCTOR_GUIDE.md              # Facilitation guide
└── DEMO_SCRIPT.md                   # Live demonstration script
```

## Prompt Library Patterns

### Code Generation
- `api-service-method.md` - HTTP services with error handling
- `data-transformer.md` - Type-safe data transformations

### Testing
- `unit-test-suite.md` - Comprehensive test generation

### Security
- `input-validation.md` - OWASP-aligned validation
- `auth-guard.md` - Route protection

### Refactoring
- `extract-method.md` - Method extraction patterns

### Documentation
- `jsdoc-generation.md` - JSDoc/Javadoc generation

All patterns support both TypeScript and Java with language-specific examples.

## For Instructors

- **Instructor Guide:** `INSTRUCTOR_GUIDE.md` - Complete facilitation guide with timing
- **Demo Script:** `DEMO_SCRIPT.md` - Live demonstration talking points
- **Solutions:** Each lab has expert solutions for comparison

### Workshop Flow

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

- **Participant Guide:** `02-prompt-engineering-participant-guide.md`
- **CRAFT Framework:** `docs/craft-framework/guide.md`
- **Prompt Library:** `prompt-library/`
- **Copilot Modes:** `.github/copilot-chat/`

## Contributing

To add a new prompt pattern:

1. Test it 5+ times with ≥80% success rate
2. Use the template in `prompt-library/README.md`
3. Include variables, examples, and common pitfalls
4. Submit a PR to the appropriate category folder

---

*Expert prompts are specific, complete, and tested. Use CRAFT for every prompt.*
