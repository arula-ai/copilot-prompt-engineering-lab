# GenAI DevAssist | Prompt Engineering
## Participant Guide v1.0

**Version:** 1.0  
**Duration:** 75 minutes  
**Fidelity DevAssist Program**

---

## Table of Contents

1. [Workshop Overview](#workshop-overview)
2. [The CRAFT Framework](#the-craft-framework)
3. [Lab 1: Crafting Effective Prompts](#lab-1-crafting-effective-prompts)
4. [Lab 2: Applying Library Patterns](#lab-2-applying-library-patterns)
5. [Lab 3: Contributing to the Library](#lab-3-contributing-to-the-library)
6. [Quick Reference Guide](#quick-reference-guide)
7. [Homework](#homework)

---

## Workshop Overview

### Learning Objectives

By completing this workshop, you will be able to:

1. **Compose** clear, specific prompts that generate high-quality code
2. **Apply** Fidelity's Copilot prompt library patterns
3. **Evaluate** prompt effectiveness using a quality rubric
4. **Contribute** to the shared prompt library

### Success Metrics

| Metric | Target |
|--------|--------|
| First-attempt success rate | >70% |
| Prompt specificity score | >8/10 |
| Library pattern usage | >80% |

---

## The CRAFT Framework

Use this framework for every prompt you write.

### C - Context
**What is the situation?**

Include:
- Application type and framework
- Existing patterns to follow
- Relevant dependencies
- Technical constraints

**Example:**
```
Context: Angular 16 application with NgRx state management,
using reactive forms and our standard service patterns.
```

### R - Role
**Who should Copilot act as?**

Include:
- Expertise level (senior, specialist)
- Domain knowledge (security, performance, testing)
- Perspective (reviewer, implementer)

**Example:**
```
Acting as a senior TypeScript developer with expertise in 
financial calculations and regulatory compliance...
```

### A - Action
**What exactly should happen?**

Include:
- Specific task to perform
- Numbered requirements
- Success criteria

**Example:**
```
Create a service method that:
1. Accepts userId and date range
2. Fetches transactions from API
3. Aggregates by category
4. Returns summary with totals
```

### F - Format
**How should output look?**

Include:
- Language/syntax requirements
- Documentation requirements
- Structure expectations

**Example:**
```
Format: TypeScript with strict types
Include JSDoc comments for all public methods
Follow Angular style guide conventions
```

### T - Tone/Constraints
**What rules must be followed?**

Include:
- Things to avoid
- Performance requirements
- Compatibility needs

**Example:**
```
Constraints:
- No external dependencies
- Must handle null inputs
- Maximum 50 lines per method
```

---

## Lab 1: Crafting Effective Prompts

### Objective
Transform 5 vague prompts into effective ones using CRAFT.

**Duration:** 13 minutes

### The Bad Prompts

Transform each of these:

---

### Prompt 1: "Create a login function"

**Your CRAFT Transformation:**

**Context:**
```

```

**Role:**
```

```

**Action:**
```

```

**Format:**
```

```

**Constraints:**
```

```

**Complete Prompt:**
```




```

**Copilot Output Quality (1-10):** ___

---

### Prompt 2: "Write tests for this"

**Your CRAFT Transformation:**

**Context:**
```

```

**Role:**
```

```

**Action:**
```

```

**Format:**
```

```

**Constraints:**
```

```

**Complete Prompt:**
```




```

**Copilot Output Quality (1-10):** ___

---

### Prompt 3: "Fix the bug"

**Your CRAFT Transformation:**

**Context:**
```

```

**Role:**
```

```

**Action:**
```

```

**Format:**
```

```

**Constraints:**
```

```

**Complete Prompt:**
```




```

**Copilot Output Quality (1-10):** ___

---

### Prompt 4: "Add error handling"

**Your CRAFT Transformation:**

**Context:**
```

```

**Role:**
```

```

**Action:**
```

```

**Format:**
```

```

**Constraints:**
```

```

**Complete Prompt:**
```




```

**Copilot Output Quality (1-10):** ___

---

### Prompt 5: "Optimize this code"

**Your CRAFT Transformation:**

**Context:**
```

```

**Role:**
```

```

**Action:**
```

```

**Format:**
```

```

**Constraints:**
```

```

**Complete Prompt:**
```




```

**Copilot Output Quality (1-10):** ___

---

### Lab 1 Self-Assessment

| Prompt | Clarity | Completeness | Specificity | Output | Total |
|--------|---------|--------------|-------------|--------|-------|
| 1 | /10 | /10 | /10 | /10 | /40 |
| 2 | /10 | /10 | /10 | /10 | /40 |
| 3 | /10 | /10 | /10 | /10 | /40 |
| 4 | /10 | /10 | /10 | /10 | /40 |
| 5 | /10 | /10 | /10 | /10 | /40 |

**Average Output Quality:** ___ /10

---

## Lab 2: Applying Library Patterns

### Objective
Use Fidelity prompt library patterns to generate production-ready code.

**Duration:** 15 minutes

### Task 1: API Service Method (5 min)

**Pattern Location:** `prompt-library/code-generation/api-service-method.md`

**Your Task:** Create a portfolio balance retrieval service

**Fill in the Template:**

```
Create a Portfolio service method in TypeScript that:

Context:
- Application: ________________________________
- Existing patterns: ________________________________
- Dependencies: ________________________________

Method Requirements:
- Name: ________________________________
- Accepts: ________________________________
- Returns: ________________________________

Features to include:
1. ________________________________
2. ________________________________
3. ________________________________

Error handling:
- ________________________________
- ________________________________

Format: ________________________________
Constraints: ________________________________
```

**Copilot Output Quality (1-10):** ___

---

### Task 2: Unit Test Suite (5 min)

**Pattern Location:** `prompt-library/testing/unit-test-suite.md`

**Your Task:** Generate tests for the service method you created

**Fill in the Template:**

```
Generate a comprehensive Jest test suite for [your service method]:

Code to test:
[paste your service method signature]

Test framework: Jest with TypeScript

Required test categories:
1. Happy path - ________________________________
2. Edge cases - ________________________________
3. Error scenarios - ________________________________
4. Boundary values - ________________________________

Assertions should verify:
- ________________________________
- ________________________________
- ________________________________

Format: describe/it blocks with clear descriptions
Constraints: Independent tests, single responsibility
```

**Copilot Output Quality (1-10):** ___

---

### Task 3: Input Validation (5 min)

**Pattern Location:** `prompt-library/security/input-validation.md`

**Your Task:** Create validation for your service's input

**Fill in the Template:**

```
Create an input validation function for [your input type]:

Input structure:
________________________________

Validation rules:
1. ________________________________
2. ________________________________
3. ________________________________

Security considerations:
- ________________________________
- ________________________________

Return format:
- Success: { valid: true, data: [sanitized-input] }
- Failure: { valid: false, errors: [array-of-error-messages] }

Constraints:
- Must sanitize all string inputs
- Must not throw exceptions
- Must provide specific error messages
```

**Copilot Output Quality (1-10):** ___

---

### Lab 2 Summary

| Task | Pattern Used | Output Quality |
|------|--------------|----------------|
| 1. API Service | api-service-method.md | /10 |
| 2. Test Suite | unit-test-suite.md | /10 |
| 3. Validation | input-validation.md | /10 |

**Key Learning:** What made the library patterns effective?
```


```

---

## Lab 3: Contributing to the Library

### Objective
Create a library-quality prompt and prepare for contribution.

**Duration:** 10 minutes

### Step 1: Identify Your Best Prompt

From your work today or previous experience, identify a prompt that:
- Works consistently (same quality output each time)
- Solves a common problem
- Would benefit other developers

**Prompt Topic:** ________________________________

---

### Step 2: Format Using Template

```markdown
## Pattern: [Your Pattern Name]

**Category:** [Code Generation/Testing/Refactoring/Documentation/Security]
**Language:** [TypeScript/Java/Python/etc.]

### Prompt Template

```
[Your complete prompt with [variables] marked]
```

### Variables

| Variable | Description | Example |
|----------|-------------|---------|
| [var-1] | | |
| [var-2] | | |
| [var-3] | | |

### Example Usage

```
[A completely filled-in example]
```

### Expected Output Quality: ___/10

### Test Results

| Run | Result | Notes |
|-----|--------|-------|
| 1 | Pass/Fail | |
| 2 | Pass/Fail | |
| 3 | Pass/Fail | |

### Edge Cases Discovered

1. ________________________________
2. ________________________________

### Author
**Name:** ________________________________
**Date:** ________________________________
```

---

### Step 3: Test for Consistency

Run your prompt 3 times and record results:

**Run 1:**
- Output usable? Yes / No
- Quality rating: ___/10
- Notes: ________________________________

**Run 2:**
- Output usable? Yes / No
- Quality rating: ___/10
- Notes: ________________________________

**Run 3:**
- Output usable? Yes / No
- Quality rating: ___/10
- Notes: ________________________________

**Consistency Score:** ___/10 (How similar were the outputs?)

---

### Step 4: Document Edge Cases

What edge cases or gotchas did you discover?

1. ________________________________
2. ________________________________
3. ________________________________

---

## Quick Reference Guide

### CRAFT Checklist

Before submitting any prompt, verify:

- [ ] **Context** included (app type, framework, patterns)
- [ ] **Role** specified (expertise, domain)
- [ ] **Action** is specific (numbered requirements)
- [ ] **Format** defined (language, docs, structure)
- [ ] **Tone/Constraints** added (rules, limitations)

### Quality Rubric Quick Reference

| Score | Meaning |
|-------|---------|
| 1-3 | Needs complete rewrite |
| 4-5 | Needs significant work |
| 6-7 | Good, needs refinement |
| 8-9 | Very good, minor polish |
| 10 | Excellent, library-ready |

### Common Prompt Improvements

| Problem | Solution |
|---------|----------|
| Generic output | Add more context |
| Wrong style | Specify format |
| Missing features | Use numbered action list |
| Insecure code | Add security constraints |
| Too verbose | Add "concise" constraint |

### Prompt Library Categories

| Category | Use For |
|----------|---------|
| Code Generation | Creating new code |
| Testing | Test creation |
| Refactoring | Improving existing code |
| Documentation | Docs and comments |
| Security | Security patterns |

---

## Homework

### Required (Due in 1 week)

#### 1. Submit One Contribution
- Use the template from Lab 3
- Test 5+ times before submitting
- Include all edge cases
- Submit PR to prompt library

**Submission Status:** ☐ Not Started  ☐ In Progress  ☐ Submitted

#### 2. Document 5 Personal Prompts
For prompts you use regularly:
- Format using CRAFT
- Rate each with rubric
- Identify improvement opportunities

| Prompt | Purpose | Quality |
|--------|---------|---------|
| 1. | | /10 |
| 2. | | /10 |
| 3. | | /10 |
| 4. | | /10 |
| 5. | | /10 |

#### 3. Rate Team's Top 10 Prompts
Review prompts your team uses most:
- Apply quality rubric
- Identify patterns
- Suggest improvements

**Completed:** ☐ Yes  ☐ No

---

## Notes

### Key Insights from Today
1. ________________________________
2. ________________________________
3. ________________________________

### Prompts That Worked Well
1. ________________________________
2. ________________________________

### Things to Try with My Team
1. ________________________________
2. ________________________________

---

## Resources

- **Prompt Library:** [Internal URL]
- **CRAFT Framework:** `docs/craft-framework/guide.md`
- **Quality Rubric:** `docs/rubrics/prompt-quality-rubric.md`
- **Office Hours:** Tuesdays 10-11 AM
- **Slack:** #copilot-prompts

---

**Participant Information**

**Name:** ________________________________

**Team:** ________________________________

**Date:** ________________________________

**Lab 1 Avg Quality:** ___/10

**Lab 2 Avg Quality:** ___/10

**Lab 3 Consistency:** ___/10

---

**End of Participant Guide**

*Remember: Great prompts are specific, complete, and tested.*
