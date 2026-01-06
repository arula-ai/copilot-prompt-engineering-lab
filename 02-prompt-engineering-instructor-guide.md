# GenAI DevAssist | Prompt Engineering
## Instructor Guide v1.0

**Version:** 1.0  
**Duration:** 75 minutes  
**Target Audience:** Engineers learning prompt fundamentals  
**Fidelity DevAssist Program**

---

## Table of Contents

1. [Pre-Workshop Preparation](#pre-workshop-preparation)
2. [Facilitation Timeline](#facilitation-timeline)
3. [Section-by-Section Guide](#section-by-section-guide)
4. [Lab Facilitation Instructions](#lab-facilitation-instructions)
5. [Common Issues & Solutions](#common-issues--solutions)
6. [Assessment & Evaluation](#assessment--evaluation)

---

## Pre-Workshop Preparation

### One Week Before

- [ ] Verify prompt library access for all participants
- [ ] Test all demo prompts in current Copilot version
- [ ] Prepare before/after examples
- [ ] Review CRAFT framework materials
- [ ] Create participant roster with team assignments

### Day Before

- [ ] Load presentation and test all slides
- [ ] Open prompt library in browser
- [ ] Prepare VS Code with demo files
- [ ] Print CRAFT reference cards
- [ ] Set up feedback collection

### Day Of

- [ ] Arrive 30 minutes early
- [ ] Display WiFi and setup instructions
- [ ] Open prompt library URL for participants
- [ ] Have backup demo recordings ready

---

## Facilitation Timeline

| Time | Duration | Section | Key Action |
|------|----------|---------|------------|
| 0:00 | 5 min | Opening | Set expectations, show bad→good transformation |
| 0:05 | 12 min | CRAFT Framework | Teach framework with live demos |
| 0:17 | 13 min | **Lab 1** | Transform 5 bad prompts |
| 0:30 | 10 min | Prompt Library | Tour library, show pattern usage |
| 0:40 | 15 min | **Lab 2** | Apply 3 library patterns |
| 0:55 | 8 min | Contributing | Evaluation rubric, contribution process |
| 1:03 | 10 min | **Lab 3** | Create contribution draft |
| 1:13 | 2 min | Wrap-up | Homework, resources |

---

## Section-by-Section Guide

### Section 1: Opening (0:00-0:05)

#### Key Messages
- Most Copilot suggestions are rejected due to poor prompts
- This is a skill that improves with practice
- By end of session: 70%+ first-attempt success rate

#### Opening Demo (2 min)
Show dramatic before/after:

**Bad prompt:** "Create a login function"
→ Show generic, insecure output

**Good prompt:** Full CRAFT prompt for login
→ Show production-ready output

**Impact:** "Same AI, completely different results. The difference is the prompt."

---

### Section 2: CRAFT Framework (0:05-0:17)

#### Teaching Approach

Spend 2 minutes on each CRAFT element with live demo:

1. **Context (2 min)**
   - Demo: Same request with no context vs. full context
   - Key point: "Context primes the AI's knowledge domain"

2. **Role (2 min)**
   - Demo: Generic vs. "senior security engineer" role
   - Key point: "Role determines what expertise is applied"

3. **Action (2 min)**
   - Demo: Vague vs. numbered specific requirements
   - Key point: "Numbered lists get numbered responses"

4. **Format (2 min)**
   - Demo: Same request with different format specs
   - Key point: "Format prevents unnecessary editing"

5. **Tone/Constraints (2 min)**
   - Demo: Adding constraints that prevent common mistakes
   - Key point: "Constraints from past failures"

#### Live Demo (2 min)
Build a complete CRAFT prompt step-by-step, showing Copilot output improving at each step.

---

### Section 3: Lab 1 - Crafting Effective Prompts (0:17-0:30)

#### Setup (1 min)
"You have 13 minutes. Transform all 5 bad prompts. Work with your partner. Test each in Copilot."

#### During Lab
**Circulation pattern:**
- First 3 min: Ensure everyone started, answer setup questions
- 3-8 min: Review transformations, suggest improvements
- 8-13 min: Spot-check Copilot outputs, identify good examples

#### Common Issues
| Issue | Solution |
|-------|----------|
| "What context should I add?" | Ask: "What would a new team member need to know?" |
| Prompts still too vague | Point to CRAFT checklist, ask "Did you include...?" |
| Copilot not responding well | Check for typos, restart Copilot |

#### Lab 1 Checkpoint (at 8 min)
"Quick show: How many have transformed at least 3 prompts?" (target: 80%)

#### Debrief (1 min)
Ask 1-2 participants to share their best transformation.

---

### Section 4: Prompt Library Deep Dive (0:30-0:40)

#### Library Tour (5 min)
1. Open library in browser
2. Show structure (categories)
3. Open one pattern, explain each section
4. Show variables and how to fill them

#### Pattern Demo (5 min)
Live: Use "API Service Method" pattern
1. Show template
2. Fill in variables for portfolio service
3. Execute in Copilot
4. Show high-quality output

**Key message:** "Don't reinvent the wheel. Check library first."

---

### Section 5: Lab 2 - Applying Library Patterns (0:40-0:55)

#### Setup (1 min)
"Three tasks, 15 minutes. Use patterns from the library. All three build on each other."

#### Task Guidance

**Task 1: API Service Method (5 min)**
- Pattern: `prompt-library/code-generation/api-service-method.md`
- Create: Portfolio balance retrieval
- Tip: Fill in ALL variables

**Task 2: Unit Test Suite (5 min)**
- Pattern: `prompt-library/testing/unit-test-suite.md`
- Target: Service method from Task 1
- Tip: Be specific about edge cases

**Task 3: Error Handler (5 min)**
- Pattern: `prompt-library/security/input-validation.md`
- Create: Request validation
- Tip: List security considerations

#### During Lab
- Help participants find correct patterns
- Verify variable substitution is complete
- Encourage testing outputs

---

### Section 6: Evaluating & Contributing (0:55-1:03)

#### Quality Rubric (4 min)
Walk through each criterion:
- Clarity: Can it be misinterpreted?
- Completeness: Is anything missing?
- Specificity: Are there concrete details?
- Output Quality: Is it usable?
- Consistency: Same results each time?

#### Contribution Process (4 min)
1. Required: 5+ successful uses
2. Format: Use library template
3. Include: Test evidence
4. Submit: PR to library repo
5. Review: Team champion approves

---

### Section 7: Lab 3 - Contributing to the Library (1:03-1:13)

#### Setup (1 min)
"Create one library-quality prompt. Test it 3 times. Document edge cases."

#### During Lab
- Help participants identify their best prompt
- Review template completion
- Verify consistency testing

#### Lab 3 Success Criteria
- [ ] Complete template filled
- [ ] 3 successful test runs documented
- [ ] Edge cases identified
- [ ] Variables clearly defined

---

### Section 8: Wrap-up (1:13-1:15)

#### Key Takeaways
1. CRAFT = Context, Role, Action, Format, Tone
2. Specificity wins
3. Library first
4. Iterate and contribute
5. Use the rubric

#### Homework
1. Submit one contribution
2. Document 5 personal prompts
3. Rate team's top 10 prompts

---

## Common Issues & Solutions

### Technical Issues

| Issue | Solution |
|-------|----------|
| Copilot rate limited | Wait 30 seconds, retry |
| Library not accessible | Use local copy in lab repo |
| Prompts truncated | Break into smaller prompts |
| Inconsistent results | Add more constraints |

### Facilitation Issues

| Issue | Solution |
|-------|----------|
| Participants ahead | Give advanced challenge: Create security-focused prompt |
| Participants behind | Pair with faster participant |
| Low engagement | Ask for live examples from their work |
| Questions derailing | Park in "Questions" section, address at end |

---

## Assessment & Evaluation

### During Workshop

Track for each participant:
- [ ] Completed Lab 1 (5 transformations)
- [ ] Completed Lab 2 (3 patterns applied)
- [ ] Started Lab 3 (contribution draft)
- [ ] Engaged in discussions

### Homework Evaluation

| Criterion | Points |
|-----------|--------|
| Contribution submitted | 30 |
| Contribution accepted | 20 |
| 5 prompts documented | 25 |
| Team prompts rated | 15 |
| On-time | 10 |
| **Total** | **100** |

---

## Appendix: Demo Scripts

### Demo 1: Bad vs Good Prompt

**Bad:**
```
Create a login function
```
Output: Generic, no validation, no security

**Good:**
```
Context: Express.js API for financial services using JWT

Role: Senior backend developer with security focus

Action: Create login endpoint that:
1. Validates email/password inputs
2. Checks credentials against database
3. Generates JWT (15 min expiry)
4. Sets httpOnly refresh token cookie
5. Logs attempts for audit

Format: TypeScript with full types and JSDoc
Constraints: Use bcrypt, rate limit 5/min/IP, don't leak email existence
```
Output: Production-ready, secure, complete

---

**End of Instructor Guide**
