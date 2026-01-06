# Copilot Prompt Engineering Lab - Angular/TypeScript

Workshop lab for learning effective prompt engineering with GitHub Copilot using TypeScript/Angular.

## Getting Started

```bash
cd angular
npm install
npm run build
```

## Lab Structure

### Lab 1: Crafting Effective Prompts (15 min)
Location: `src/challenges/lab1-basic/`

Transform vague prompts into effective ones using the CRAFT framework.

| Challenge | File | Bad Prompt |
|-----------|------|------------|
| 1 | challenge1-login.ts | "Create a login function" |
| 2 | challenge2-tests.ts | "Write tests for this" |
| 3 | challenge3-bugfix.ts | "Fix the bug" |
| 4 | challenge4-errors.ts | "Add error handling" |
| 5 | challenge5-optimize.ts | "Optimize this code" |

### Lab 2: Applying Library Patterns (15 min)
Location: `src/challenges/lab2-library/`

Use established patterns from the prompt library.

### Lab 3: Contributing to the Library (10 min)
Create your own library-quality prompt entry.

## Resources

- CRAFT Framework: `../docs/craft-framework/guide.md`
- Quality Rubric: `../docs/rubrics/prompt-quality-rubric.md`
- Prompt Library: `../prompt-library/`

## Key Concepts

**CRAFT Framework:**
- **C**ontext - What's the situation? (Angular version, RxJS, etc.)
- **R**ole - Who should Copilot act as?
- **A**ction - What exactly should happen?
- **F**ormat - How should output look? (Observable, Promise, etc.)
- **T**one - What rules/constraints apply?

## TypeScript-Specific Considerations

When writing prompts for TypeScript/Angular, consider specifying:
- Framework version (Angular 16+, RxJS 7+)
- Module system (ES modules, CommonJS)
- Type strictness level
- Testing framework (Jest, Jasmine)
- State management (NgRx, signals)
