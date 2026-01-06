# GenAI DevAssist | Prompt Engineering
## Presentation Outline (75 minutes)

**Version:** 1.0  
**Duration:** 75 minutes  
**Target Audience:** Engineers learning prompt fundamentals  
**Fidelity DevAssist Program**

---

## Presentation Flow Summary

| Time | Section | Duration | Type |
|------|---------|----------|------|
| 0:00 | Opening & Objectives | 5 min | Lecture |
| 0:05 | Prompt Engineering Fundamentals | 12 min | Lecture + Demo |
| 0:17 | Lab 1: Crafting Effective Prompts | 13 min | Hands-on |
| 0:30 | Fidelity Prompt Library Deep Dive | 10 min | Lecture + Demo |
| 0:40 | Lab 2: Applying Library Patterns | 15 min | Hands-on |
| 0:55 | Evaluating & Contributing Prompts | 8 min | Lecture |
| 1:03 | Lab 3: Contributing to the Library | 10 min | Hands-on |
| 1:13 | Wrap-up & Next Steps | 2 min | Discussion |

---

## Slide-by-Slide Breakdown

### Section 1: Opening & Objectives (0:00-0:05)

#### Slide 1: Title Slide
**Content:**
- Workshop Title: "Prompt Engineering with GitHub Copilot"
- Subtitle: "From Vague Requests to Precision Results"
- Fidelity DevAssist Program logo
- Date and session number

**Speaker Notes:**
Welcome participants. Frame this as the foundation for all other Copilot workshops.

---

#### Slide 2: The Prompt Problem
**Content:**
- Statistics:
  - 60% of Copilot suggestions are rejected
  - Most rejections due to misaligned expectations
  - Average prompt iteration: 3-4 attempts
- The gap: What you asked vs. What you meant vs. What Copilot understood

**Speaker Notes:**
Ask: "How many have had Copilot generate something completely wrong?" (universal experience)
"Today we close that gap."

---

#### Slide 3: Learning Objectives
**Content:**
1. **Compose** clear, specific prompts that generate high-quality code solutions for complex engineering problems
2. **Apply** Fidelity's Copilot prompt library to standardize team practices and improve code consistency
3. **Evaluate** prompt effectiveness and refine techniques to achieve optimal AI-assisted outcomes
4. **Contribute** to and update the shared prompt library with proven patterns and best practices

**Speaker Notes:**
These are practical skills you'll use immediately after this session.

---

#### Slide 4: Success Metrics
**Content:**
| Metric | How We'll Measure | Target |
|--------|-------------------|--------|
| First-attempt success rate | Prompt → Usable code | >70% |
| Prompt specificity score | Self-assessment rubric | >8/10 |
| Library pattern usage | Prompts using patterns | >80% |
| Contribution quality | Review acceptance rate | >90% |

**Speaker Notes:**
By the end of today, you should have prompts that work on the first try most of the time.

---

### Section 2: Prompt Engineering Fundamentals (0:05-0:17)

#### Slide 5: Anatomy of an Effective Prompt
**Content:**
**The CRAFT Framework:**
- **C**ontext: What's the situation?
- **R**ole: Who should Copilot act as?
- **A**ction: What exactly should happen?
- **F**ormat: How should output look?
- **T**one: What style/constraints apply?

**Visual:** Prompt breakdown diagram

**Speaker Notes:**
This framework works for any AI interaction, not just Copilot.

---

#### Slide 6: Context - Setting the Stage
**Content:**
**Bad:**
```
Create a function to validate users
```

**Better:**
```
In our Angular 16 application using reactive forms, 
create a validation function for user registration 
that integrates with our existing UserService.
```

**Best:**
```
Context: Angular 16 app with reactive forms
File: user-registration.component.ts
Existing: UserService with checkEmailExists() method
Need: Real-time email validation with debounce
```

**Speaker Notes:**
Demo: Show the different outputs from each prompt.

---

#### Slide 7: Role - Expertise Matters
**Content:**
**Generic:**
```
Write tests for this function
```

**Expert:**
```
Acting as a senior QA engineer specializing in financial 
applications, write tests for this function considering:
- Edge cases for currency calculations
- Regulatory compliance scenarios
- Performance under load
```

**Speaker Notes:**
The role primes Copilot to use different knowledge domains.

---

#### Slide 8: Action - Be Specific
**Content:**
**Vague:**
```
Fix this code
```

**Specific:**
```
Refactor this function to:
1. Handle null inputs gracefully
2. Add error logging with our Logger class
3. Return a Result<T> type instead of throwing
4. Maintain backward compatibility
```

**Speaker Notes:**
Numbered lists get numbered responses - structured input = structured output.

---

#### Slide 9: Format - Control the Output
**Content:**
**Format Specifiers:**
- "Return as a TypeScript interface"
- "Format as a Jest test suite with describe/it blocks"
- "Output as a markdown table"
- "Provide code only, no explanations"
- "Include JSDoc comments for each method"

**Demo Script:**
Show same prompt with different format specifiers → different outputs.

**Speaker Notes:**
Format is often the most overlooked element.

---

#### Slide 10: Tone & Constraints
**Content:**
**Constraint Examples:**
- "Do not use any external dependencies"
- "Must be compatible with Node.js 16"
- "Follow our team's naming convention: camelCase for functions"
- "Maximum 50 lines of code"
- "Optimize for readability over performance"

**Speaker Notes:**
Constraints prevent unwanted suggestions. Add constraints you've seen violated before.

---

#### Slide 11: Live Demo - CRAFT in Action
**Content:**
**Demo Scenario:** Create a rate limiter middleware

**Demo Script:**
1. Show bad prompt: "Create rate limiter"
2. Show Copilot output (generic, may not fit needs)
3. Apply CRAFT framework step by step
4. Show improved output

**Final Prompt:**
```
Context: Express.js API for financial transactions
Role: Senior backend engineer with security focus
Action: Create a rate limiting middleware that:
1. Limits to 100 requests per minute per IP
2. Returns 429 with retry-after header
3. Uses Redis for distributed tracking
4. Excludes health check endpoints
Format: TypeScript with full type definitions
Constraints: Must log all rate limit violations, 
compatible with our existing auth middleware
```

**Speaker Notes:**
Walk through each element, showing how the output improves.

---

### Section 3: Lab 1 - Crafting Effective Prompts (0:17-0:30)

#### Slide 12: Lab 1 Introduction
**Content:**
**Objective:** Transform vague prompts into effective ones using CRAFT framework

**Starting Point:**
- 5 "bad" prompts provided
- Transform each using CRAFT
- Test each transformation in Copilot

**Deliverables:**
1. 5 transformed prompts
2. Before/after output comparison
3. Self-assessment using rubric

**Speaker Notes:**
Work with your partner. Compare approaches.

---

#### Slide 13: Lab 1 Task Sheet
**Content:**
**Transform These Prompts:**

1. "Create a login function"
2. "Write tests for this"
3. "Fix the bug"
4. "Add error handling"
5. "Optimize this code"

**For Each:**
- Apply CRAFT framework
- Test in Copilot
- Rate output quality (1-10)
- Note what made the difference

**Speaker Notes:**
Display on screen throughout lab. Give 2-3 minutes per prompt.

---

### Section 4: Fidelity Prompt Library Deep Dive (0:30-0:40)

#### Slide 14: Introduction to the Prompt Library
**Content:**
**What:** Curated collection of tested, approved prompts
**Where:** [Internal Confluence/SharePoint link]
**Why:**
- Consistency across teams
- Proven patterns for common tasks
- Accelerated onboarding
- Quality-assured outputs

**Speaker Notes:**
This is your team's collective wisdom, not just generic templates.

---

#### Slide 15: Library Structure
**Content:**
**Categories:**
1. **Code Generation** - Creating new code
2. **Refactoring** - Improving existing code
3. **Testing** - Test creation and enhancement
4. **Documentation** - Docs and comments
5. **Security** - Security-focused patterns
6. **Review** - Code review assistance
7. **Debugging** - Problem diagnosis

**Speaker Notes:**
Show actual library structure in browser.

---

#### Slide 16: Anatomy of a Library Entry
**Content:**
```markdown
## Pattern: Service Method Generation

**Category:** Code Generation
**Language:** TypeScript/Angular

**Prompt Template:**
Create a [service-name] service method that:
- Accepts: [input-types]
- Returns: Observable<[return-type]>
- Handles: [error-scenarios]
- Integrates with: [existing-services]

**Variables:**
- service-name: Name of the service
- input-types: Method parameters
- return-type: Expected return type
- error-scenarios: Error cases to handle
- existing-services: Dependencies

**Example Usage:**
[Filled example]

**Expected Output Quality:** 9/10
**Last Verified:** [Date]
**Author:** [Name]
```

**Speaker Notes:**
Every entry follows this format for consistency.

---

#### Slide 17: Live Demo - Using Library Patterns
**Content:**
**Demo Scenario:** Create an authentication guard

**Demo Script:**
1. Open prompt library
2. Navigate to Security category
3. Find "Authentication Guard" pattern
4. Fill in variables for our use case
5. Execute in Copilot
6. Show high-quality output

**Speaker Notes:**
Emphasize: "You don't have to craft from scratch every time."

---

#### Slide 18: Pattern Categories Deep Dive
**Content:**
**Most Used Patterns at Fidelity:**

| Pattern | Use Case | Success Rate |
|---------|----------|--------------|
| API Service Method | Creating HTTP services | 94% |
| Unit Test Suite | Generating test files | 89% |
| Error Handler | Adding error handling | 92% |
| Data Transformer | DTO conversions | 91% |
| Validation Schema | Input validation | 88% |

**Speaker Notes:**
These are real metrics from our teams.

---

### Section 5: Lab 2 - Applying Library Patterns (0:40-0:55)

#### Slide 19: Lab 2 Introduction
**Content:**
**Objective:** Use Fidelity prompt library patterns to generate production-ready code

**Tasks:**
1. Create an API service method using library pattern
2. Generate a test suite using testing pattern
3. Add error handling using error handler pattern

**Deliverables:**
- 3 working code outputs
- Documented variable substitutions
- Output quality ratings

**Speaker Notes:**
Access the library at [URL]. Work through all three tasks.

---

#### Slide 20: Lab 2 Task Details
**Content:**
**Task 1: API Service Method (5 min)**
- Use: "API Service Method" pattern
- Create: Portfolio balance retrieval service
- Include: Caching, retry logic, error handling

**Task 2: Test Suite (5 min)**
- Use: "Unit Test Suite" pattern
- Target: The service method you just created
- Include: Happy path, error cases, edge cases

**Task 3: Error Handler (5 min)**
- Use: "Centralized Error Handler" pattern
- Create: Application-wide error interceptor
- Include: Logging, user notification, retry logic

**Speaker Notes:**
All three tasks build on each other.

---

### Section 6: Evaluating & Contributing Prompts (0:55-1:03)

#### Slide 21: Evaluating Prompt Effectiveness
**Content:**
**Prompt Quality Rubric:**

| Criterion | 1-3 | 4-6 | 7-10 |
|-----------|-----|-----|------|
| **Clarity** | Ambiguous | Mostly clear | Crystal clear |
| **Completeness** | Missing context | Some context | Full context |
| **Specificity** | Very vague | Somewhat specific | Highly specific |
| **Output Quality** | Needs major edits | Minor edits | Ready to use |
| **Consistency** | Random results | Mostly consistent | Always consistent |

**Speaker Notes:**
Rate your Lab 1 and Lab 2 prompts using this rubric.

---

#### Slide 22: Contributing to the Library
**Content:**
**Contribution Criteria:**
1. Successfully used 5+ times
2. Produces consistent results
3. Follows CRAFT framework
4. Includes example output
5. Documented edge cases

**Submission Process:**
1. Fork library repository
2. Add entry using template
3. Include test evidence
4. Submit PR for review
5. Team champion approves

**Speaker Notes:**
Your contributions help the whole organization.

---

#### Slide 23: Contribution Best Practices
**Content:**
**Do:**
- Test across different scenarios
- Include failure cases discovered
- Note version dependencies
- Add usage tips

**Don't:**
- Submit untested prompts
- Include proprietary code in examples
- Duplicate existing patterns
- Forget to update version dates

**Speaker Notes:**
Quality over quantity. One great prompt > five mediocre ones.

---

### Section 7: Lab 3 - Contributing to the Library (1:03-1:13)

#### Slide 24: Lab 3 Introduction
**Content:**
**Objective:** Create a library-quality prompt and prepare for contribution

**Task:**
1. Identify a prompt you've refined that works well
2. Format using library template
3. Test for consistency (run 3 times)
4. Document edge cases
5. Prepare contribution draft

**Deliverables:**
- Complete library entry draft
- Evidence of 3 successful runs
- Edge case documentation

**Speaker Notes:**
This becomes your contribution to the team.

---

#### Slide 25: Lab 3 Template
**Content:**
```markdown
## Pattern: [Your Pattern Name]

**Category:** [Code Generation/Testing/etc.]
**Language:** [TypeScript/Java/etc.]

**Prompt Template:**
[Your refined prompt with [variables]]

**Variables:**
- [variable-1]: [description]
- [variable-2]: [description]

**Example Usage:**
[A filled-in example]

**Expected Output Quality:** [X]/10
**Test Results:**
- Run 1: [Pass/Fail] - [Notes]
- Run 2: [Pass/Fail] - [Notes]
- Run 3: [Pass/Fail] - [Notes]

**Edge Cases:**
- [Edge case 1]: [How handled]
- [Edge case 2]: [How handled]

**Author:** [Your Name]
**Date:** [Today]
```

**Speaker Notes:**
Fill this out completely. Incomplete entries won't be accepted.

---

### Section 8: Wrap-up & Next Steps (1:13-1:15)

#### Slide 26: Key Takeaways
**Content:**
1. **CRAFT Framework:** Context, Role, Action, Format, Tone
2. **Specificity Wins:** Detailed prompts → precise outputs
3. **Library First:** Check library before crafting new
4. **Iterate & Contribute:** Refine prompts, share successes
5. **Measure Quality:** Use rubric for consistent evaluation

**Speaker Notes:**
These five principles will transform your Copilot experience.

---

#### Slide 27: Homework & Resources
**Content:**
**Required (Due in 1 week):**
1. Submit one prompt contribution to library
2. Document 5 prompts you use regularly using CRAFT
3. Rate your team's top 10 prompts using rubric

**Resources:**
- Fidelity Prompt Library: [Link]
- CRAFT Framework Template: [Link]
- Prompt Rubric Worksheet: [Link]
- Office Hours: Tuesdays 10-11 AM

**Speaker Notes:**
Contributions are reviewed within 48 hours.

---

#### Slide 28: Q&A and Feedback
**Content:**
- Questions?
- Feedback survey QR code
- Contact information

**Speaker Notes:**
Encourage sharing of interesting prompts discovered during labs.

---

## Appendix: Backup Slides

### Backup Slide A: Advanced Prompting Techniques
**Content:**
- **Chain of Thought:** "Think step by step..."
- **Few-Shot Examples:** Provide input-output pairs
- **Negative Examples:** "Don't do X, do Y instead"
- **Iterative Refinement:** "Now improve by..."

---

### Backup Slide B: Common Anti-Patterns
**Content:**
| Anti-Pattern | Why It Fails | Fix |
|--------------|--------------|-----|
| "Make it work" | No success criteria | Define "working" |
| Single word prompts | No context | Add CRAFT elements |
| Asking for perfection | Unrealistic | Specify acceptable |
| Copy-paste everything | Context overload | Summarize key parts |

---

## Technical Requirements

### Presenter Setup
- VS Code with GitHub Copilot
- Browser with Prompt Library access
- Terminal for testing
- Demo repository cloned

### Participant Requirements
- GitHub Copilot license
- VS Code with Copilot Chat
- Access to Fidelity Prompt Library
- Lab repository access

---

**End of Presentation Outline**
