# Instructor Guide: Prompt Engineering Workshop

## Workshop Overview

**Duration:** 75 minutes
**Format:** Hands-on lab with live demonstrations
**Audience:** Developers with varying Copilot/AI coding assistant experience
**Goal:** Transform participants from vague prompt writers to expert prompt engineers using the CRAFT framework

## Pre-Workshop Checklist

### Technical Setup (Day Before)
- [ ] Verify GitHub Copilot is installed and authenticated for all participants
- [ ] Clone the lab repository on instructor machine
- [ ] Test all code compiles: `npm install && npm run build` (Angular) or `mvn compile` (Java)
- [ ] Prepare backup slides in case of Copilot outages
- [ ] Have prompt library open in separate tabs for quick reference

### Room Setup
- [ ] Projector/screen visible to all participants
- [ ] Each participant has IDE with Copilot active
- [ ] Whiteboard/flip chart for CRAFT framework diagram

## Workshop Flow

### Phase 1: Hook (5 min)

**Goal:** Create immediate engagement through cognitive dissonance

**Script:**
> "Let's start with a quick experiment. Open your IDE and type this prompt as a comment: 'Create a login function'. Accept whatever Copilot generates."

*Wait 60 seconds*

> "Now, look at what you got. Raise your hand if your code:
> - Handles authentication errors? (few hands)
> - Has rate limiting? (fewer hands)
> - Follows OWASP security guidelines? (almost none)
> - Is production-ready right now? (none)"

> "This is the difference between amateur prompting and expert prompting. In the next 70 minutes, you'll learn how to consistently get 9/10 quality code instead of 4/10."

### Phase 2: CRAFT Framework Introduction (10 min)

**Goal:** Establish the mental model

Draw on whiteboard:
```
┌─────────────────────────────────────────┐
│  CRAFT = Context + Role + Action +      │
│          Format + Tone/Constraints      │
└─────────────────────────────────────────┘
```

**Walk through each element:**

| Element | What to Say | Example |
|---------|-------------|---------|
| **C**ontext | "What does the AI need to know about your situation?" | "Angular 17, financial app, JWT auth" |
| **R**ole | "What expert would you hire for this task?" | "Senior security engineer" |
| **A**ction | "What specific steps should it perform?" | "1. Validate inputs 2. Call API 3. Handle errors" |
| **F**ormat | "What should the output look like?" | "TypeScript, Observable, JSDoc" |
| **T**one/Constraints | "What rules must be followed?" | "Never log passwords, OWASP compliant" |

**Key Teaching Point:**
> "Notice that 'Create a login function' provides ZERO of these elements. No context, no role, no specific actions, no format requirements, no constraints. You're asking a genius to guess what you want."

### Phase 3: Live Demo - Challenge 1 (10 min)

**Goal:** Show the transformation in real-time

**Step 1:** Show the bad prompt result (you should have this pre-generated)
```
// Create a login function
function login(user, pass) {
  return fetch('/login', { body: JSON.stringify({ user, pass }) })
}
```

**Step 2:** Build the CRAFT prompt live, explaining each addition:

```typescript
// Context: Angular 17 financial services application
// JWT authentication with refresh tokens
// HttpClient for API calls, RxJS for async handling
// Must integrate with existing AuthService and TokenStorage

// Role: Senior Angular developer with security expertise

// Action: Create a login method that:
// 1. Accepts LoginRequest (email, password, rememberMe)
// 2. Validates inputs client-side
// 3. POST to /api/auth/login
// 4. Store tokens appropriately
// 5. Handle 401 and 429 errors
// 6. Emit auth state change

// Format: TypeScript with Observable<Result<AuthUser, AuthError>>
// Constraints: Never log passwords, sanitize email input
```

**Step 3:** Generate and review the output
- Point out each element that matches the prompt
- Highlight security features that appeared automatically
- Show the difference in quality

### Phase 4: Hands-On Lab 1 (25 min)

**Goal:** Participants practice the transformation

**Instructions to give:**
> "Open the `challenges/lab1-basic` folder in your language (angular or java). You'll find 5 challenges. For each one:
> 1. Read the bad prompt
> 2. Transform it using CRAFT
> 3. Test your prompt in Copilot
> 4. Rate the output quality 1-10
> 5. Solutions are in the `solutions` folder - check after you try"

**Timing:**
- Challenge 1 (Login): 5 min
- Challenge 2 (Tests): 5 min
- Challenge 3 (Bug Fix): 5 min
- Challenge 4 (Errors): 5 min
- Challenge 5 (Optimize): 5 min

**Instructor Actions During Lab:**
- Walk around and observe prompts
- Offer hints, not answers
- Collect interesting examples for discussion
- Note common mistakes

**Common Mistakes to Watch For:**

| Mistake | Correction |
|---------|------------|
| Still too vague | "What specific validation rules?" |
| Missing constraints | "What shouldn't the code do?" |
| No format specified | "What types/patterns do you want?" |
| Generic role | "What expertise is needed for THIS problem?" |

### Phase 5: Lab 1 Debrief (5 min)

**Goal:** Reinforce learning through reflection

**Questions to ask:**
1. "What was your biggest 'aha' moment?"
2. "Which CRAFT element made the biggest difference?"
3. "Who got a 9/10 on any challenge? Show us your prompt."

**Key Teaching Point:**
> "Notice that expert prompts are LONGER than amateur prompts. The investment in prompt clarity pays off in code quality and reduced debugging time."

### Phase 6: Advanced Patterns (5 min)

**Goal:** Preview the prompt library

**Show:**
- Open `prompt-library/README.md`
- Demonstrate one pattern from each category:
  - Code generation: `api-service-method.md`
  - Testing: `unit-test-suite.md`
  - Refactoring: `extract-method.md`

**Key Teaching Point:**
> "You don't need to memorize CRAFT. Use these patterns as templates and customize them for your specific needs."

### Phase 7: Lab 2 - Iteration (10 min) (If time permits)

**Goal:** Practice iterative refinement

**Instructions:**
> "Open `challenges/lab2-iteration`. These challenges require you to refine prompts based on feedback. Start with your CRAFT prompt, review the output, and iterate until you reach 9/10."

### Phase 8: Wrap-Up (5 min)

**Goal:** Cement key takeaways and provide next steps

**Three Takeaways:**
1. "CRAFT is your checklist - use it every time"
2. "Specific > Generic - the more detail, the better output"
3. "Iterate - first prompt is rarely perfect"

**Resources:**
- Prompt library in this repo
- Solutions for all challenges
- CRAFT cheat sheet (one-pager)

**Call to Action:**
> "This week, try CRAFT on ONE real task at work. Measure the difference in output quality. Share your results with your team."

## Troubleshooting

### Copilot Not Responding
- Check internet connection
- Verify Copilot subscription is active
- Try restarting VS Code
- Have participants pair up if issues persist

### Copilot Giving Poor Results
- Ask participant to show their prompt
- Usually missing context or constraints
- Demonstrate how to add specificity

### Participant Struggling
- Pair them with a faster participant
- Have them focus on just Context + Action first
- Use the solution file as a learning guide

### Time Running Short
- Skip Lab 2 entirely
- Reduce Lab 1 to 3 challenges
- Do Challenge 1 as group, rest as homework

## Assessment Rubric

For evaluating participant prompts:

| Score | Criteria |
|-------|----------|
| 1-3 | Missing most CRAFT elements, vague |
| 4-6 | Has some CRAFT elements, could be more specific |
| 7-8 | All CRAFT elements present, good specificity |
| 9-10 | Expert-level detail, comprehensive constraints |

## Follow-Up Materials

Send to participants after workshop:
1. Link to this repository
2. CRAFT framework one-pager (see `/docs/craft-cheatsheet.md`)
3. Survey link for feedback
4. Slack/Teams channel for questions

## Instructor Notes

### What Works Well
- Live demo of bad vs good prompt is powerful
- Walking around during labs prevents people from getting stuck
- Celebrating good prompts encourages experimentation

### What to Avoid
- Don't lecture for too long - get hands-on quickly
- Don't show perfect prompts first - let them struggle then discover
- Don't skip the debrief - reflection cements learning

### Customization Options
- For security-focused teams: emphasize OWASP constraints
- For testing teams: spend more time on test generation
- For mixed languages: have participants choose Angular OR Java, not both
