# Lab Build Instructions for Claude Code
## Workshop 2: Prompt Engineering (75 minutes)

**Purpose:** These instructions guide Claude Code to build the complete lab environment for the Prompt Engineering workshop.

**Lab Repository Name:** `copilot-prompt-engineering-lab`

---

## Overview

This lab provides a structured environment for practicing prompt engineering techniques. It includes intentionally challenging code scenarios that require well-crafted prompts to solve effectively, plus a mock prompt library structure.

---

## Build Sequence

Execute these sections in order.

---

## Section 1: Initialize Project Structure

### 1.1 Create Base Project

```bash
# Create project directory
mkdir copilot-prompt-engineering-lab
cd copilot-prompt-engineering-lab

# Initialize npm project
npm init -y

# Install dependencies
npm install typescript ts-node @types/node express @types/express
npm install jest @types/jest ts-jest --save-dev

# Initialize TypeScript
npx tsc --init
```

### 1.2 Configure TypeScript

Create `tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "sourceMap": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 1.3 Update package.json Scripts

```json
{
  "scripts": {
    "build": "tsc",
    "start": "ts-node src/index.ts",
    "test": "jest",
    "lint": "eslint src/**/*.ts"
  }
}
```

---

## Section 2: Create Directory Structure

```bash
mkdir -p src/{challenges,services,utils,models}
mkdir -p src/challenges/{lab1-basic,lab2-library,lab3-contribute}
mkdir -p prompt-library/{code-generation,testing,refactoring,documentation,security}
mkdir -p docs/{craft-framework,rubrics,examples}
mkdir -p exercises/{bad-prompts,good-prompts,your-prompts}
```

Final structure:
```
copilot-prompt-engineering-lab/
├── src/
│   ├── challenges/
│   │   ├── lab1-basic/
│   │   │   ├── challenge1-login.ts
│   │   │   ├── challenge2-tests.ts
│   │   │   ├── challenge3-bugfix.ts
│   │   │   ├── challenge4-errors.ts
│   │   │   └── challenge5-optimize.ts
│   │   ├── lab2-library/
│   │   │   ├── portfolio-service.ts
│   │   │   ├── test-generation.ts
│   │   │   └── error-handler.ts
│   │   └── lab3-contribute/
│   │       └── contribution-template.ts
│   ├── services/
│   │   ├── user.service.ts
│   │   ├── portfolio.service.ts
│   │   └── transaction.service.ts
│   ├── utils/
│   │   └── helpers.ts
│   ├── models/
│   │   └── types.ts
│   └── index.ts
├── prompt-library/
│   ├── README.md
│   ├── code-generation/
│   │   ├── api-service-method.md
│   │   ├── component-creation.md
│   │   └── data-transformer.md
│   ├── testing/
│   │   ├── unit-test-suite.md
│   │   ├── integration-test.md
│   │   └── edge-case-tests.md
│   ├── refactoring/
│   │   ├── extract-method.md
│   │   ├── simplify-conditional.md
│   │   └── remove-duplication.md
│   ├── documentation/
│   │   ├── jsdoc-generation.md
│   │   ├── readme-creation.md
│   │   └── api-documentation.md
│   └── security/
│       ├── input-validation.md
│       ├── auth-guard.md
│       └── sanitization.md
├── docs/
│   ├── craft-framework/
│   │   └── guide.md
│   ├── rubrics/
│   │   └── prompt-quality-rubric.md
│   └── examples/
│       ├── before-after.md
│       └── common-patterns.md
├── exercises/
│   ├── bad-prompts/
│   │   └── transform-these.md
│   ├── good-prompts/
│   │   └── reference-examples.md
│   └── your-prompts/
│       └── .gitkeep
└── package.json
```

---

## Section 3: Create Core Source Files

### 3.1 Models

Create `src/models/types.ts`:
```typescript
// Core domain types for the lab exercises

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'customer' | 'advisor' | 'admin';
  createdAt: Date;
  lastLogin?: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  twoFactorEnabled: boolean;
  defaultCurrency: string;
}

export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  holdings: Holding[];
  totalValue: number;
  lastUpdated: Date;
  riskProfile: 'conservative' | 'moderate' | 'aggressive';
}

export interface Holding {
  symbol: string;
  name: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

export interface Transaction {
  id: string;
  portfolioId: string;
  type: 'buy' | 'sell' | 'dividend' | 'transfer';
  symbol: string;
  quantity: number;
  price: number;
  total: number;
  fees: number;
  executedAt: Date;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
  requiresTwoFactor?: boolean;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  timestamp: Date;
}

export type Result<T, E = ApiError> = 
  | { success: true; data: T }
  | { success: false; error: E };
```

### 3.2 Services

Create `src/services/user.service.ts`:
```typescript
import { User, LoginRequest, LoginResponse, Result, ApiError } from '../models/types';

// This service has intentional issues for participants to improve with good prompts

export class UserService {
  private users: Map<string, User> = new Map();
  
  // Challenge: This login function is incomplete and insecure
  // Participants will be asked to improve it with prompts
  async login(email: string, password: string): Promise<any> {
    // TODO: Implement proper authentication
    // Current implementation is intentionally weak
    if (email && password) {
      return { success: true, token: 'fake-token' };
    }
    return { success: false };
  }

  // Challenge: No input validation
  async createUser(data: any): Promise<User> {
    const user: User = {
      id: Math.random().toString(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      role: data.role || 'customer',
      createdAt: new Date(),
      preferences: {
        theme: 'light',
        notifications: true,
        twoFactorEnabled: false,
        defaultCurrency: 'USD'
      }
    };
    this.users.set(user.id, user);
    return user;
  }

  // Challenge: No error handling
  async getUser(id: string): Promise<User> {
    return this.users.get(id)!;
  }

  // Challenge: Needs optimization - currently O(n)
  async findByEmail(email: string): Promise<User | undefined> {
    for (const user of this.users.values()) {
      if (user.email === email) {
        return user;
      }
    }
    return undefined;
  }

  // Challenge: Missing audit logging
  async updateUser(id: string, updates: Partial<User>): Promise<User> {
    const user = this.users.get(id);
    if (!user) {
      throw new Error('User not found');
    }
    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }

  // Challenge: Hard delete with no soft delete option
  async deleteUser(id: string): Promise<void> {
    this.users.delete(id);
  }
}
```

Create `src/services/portfolio.service.ts`:
```typescript
import { Portfolio, Holding, Transaction, Result } from '../models/types';

// Service for Lab 2 exercises

export class PortfolioService {
  private portfolios: Map<string, Portfolio> = new Map();
  private transactions: Map<string, Transaction[]> = new Map();

  // Participants will generate better versions of these methods using library patterns

  async getPortfolio(portfolioId: string): Promise<Portfolio | null> {
    return this.portfolios.get(portfolioId) || null;
  }

  async getPortfoliosByUser(userId: string): Promise<Portfolio[]> {
    return Array.from(this.portfolios.values())
      .filter(p => p.userId === userId);
  }

  // Challenge: Calculate total value across all holdings
  // This is intentionally simplistic for participants to improve
  calculateTotalValue(holdings: Holding[]): number {
    let total = 0;
    for (const h of holdings) {
      total += h.quantity * h.currentPrice;
    }
    return total;
  }

  // Challenge: No caching, no retry, no error handling
  async fetchMarketPrices(symbols: string[]): Promise<Map<string, number>> {
    // Simulated API call
    const prices = new Map<string, number>();
    for (const symbol of symbols) {
      prices.set(symbol, Math.random() * 1000);
    }
    return prices;
  }

  // Challenge: No transaction validation
  async recordTransaction(transaction: Omit<Transaction, 'id'>): Promise<Transaction> {
    const id = Math.random().toString(36).substring(7);
    const newTransaction: Transaction = { ...transaction, id };
    
    const existing = this.transactions.get(transaction.portfolioId) || [];
    existing.push(newTransaction);
    this.transactions.set(transaction.portfolioId, existing);
    
    return newTransaction;
  }

  // Challenge: Performance issues with large portfolios
  async getTransactionHistory(
    portfolioId: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<Transaction[]> {
    const all = this.transactions.get(portfolioId) || [];
    
    // Inefficient filtering
    return all.filter(t => {
      if (startDate && t.executedAt < startDate) return false;
      if (endDate && t.executedAt > endDate) return false;
      return true;
    });
  }
}
```

Create `src/services/transaction.service.ts`:
```typescript
import { Transaction, Portfolio, Result, ApiError } from '../models/types';

// Service with various issues for prompt engineering challenges

export class TransactionService {
  
  // Challenge: Complex validation needed
  validateTransaction(transaction: Partial<Transaction>): string[] {
    const errors: string[] = [];
    
    // Minimal validation - participants should improve with prompts
    if (!transaction.symbol) {
      errors.push('Symbol required');
    }
    if (!transaction.quantity || transaction.quantity <= 0) {
      errors.push('Invalid quantity');
    }
    
    return errors;
  }

  // Challenge: Calculate fees - needs multiple fee tiers
  calculateFees(amount: number): number {
    // Overly simple - should have tiered fees
    return amount * 0.01;
  }

  // Challenge: Process transaction - needs proper state machine
  async processTransaction(transaction: Transaction): Promise<Transaction> {
    // No state validation, no idempotency
    transaction.status = 'completed';
    return transaction;
  }

  // Challenge: Generate transaction report - needs formatting
  generateReport(transactions: Transaction[]): string {
    // Very basic - participants should improve
    return transactions.map(t => `${t.type}: ${t.symbol} x${t.quantity}`).join('\n');
  }

  // Challenge: Detect suspicious activity - needs pattern detection
  detectSuspiciousActivity(transactions: Transaction[]): boolean {
    // Placeholder - needs real implementation
    return false;
  }
}
```

### 3.3 Lab Challenge Files

Create `src/challenges/lab1-basic/challenge1-login.ts`:
```typescript
/**
 * LAB 1 - CHALLENGE 1: Login Function
 * 
 * BAD PROMPT: "Create a login function"
 * 
 * Your task: Transform this vague prompt using the CRAFT framework
 * to generate a production-ready login function.
 * 
 * CRAFT Elements to consider:
 * - Context: What kind of application? What auth mechanism?
 * - Role: What expertise should Copilot assume?
 * - Action: What specific features are needed?
 * - Format: What should the output look like?
 * - Tone/Constraints: What rules must be followed?
 * 
 * Write your improved prompt below, then test it in Copilot.
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________
// ____________________________________________
// ____________________________________________

// PASTE COPILOT OUTPUT HERE:

// QUALITY RATING (1-10): ___

// WHAT MADE THE DIFFERENCE:
// ____________________________________________
```

Create `src/challenges/lab1-basic/challenge2-tests.ts`:
```typescript
/**
 * LAB 1 - CHALLENGE 2: Test Generation
 * 
 * BAD PROMPT: "Write tests for this"
 * 
 * Target code to test:
 */

export function calculatePortfolioReturn(
  initialValue: number,
  finalValue: number,
  dividends: number = 0
): { absoluteReturn: number; percentReturn: number } {
  const absoluteReturn = finalValue - initialValue + dividends;
  const percentReturn = ((absoluteReturn) / initialValue) * 100;
  
  return {
    absoluteReturn: Math.round(absoluteReturn * 100) / 100,
    percentReturn: Math.round(percentReturn * 100) / 100
  };
}

/**
 * Your task: Create a specific prompt that generates comprehensive tests
 * 
 * Consider:
 * - What test framework?
 * - What edge cases exist?
 * - What assertions are meaningful?
 * - What's the coverage goal?
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
```

Create `src/challenges/lab1-basic/challenge3-bugfix.ts`:
```typescript
/**
 * LAB 1 - CHALLENGE 3: Bug Fix
 * 
 * BAD PROMPT: "Fix the bug"
 * 
 * This function has multiple bugs. A vague "fix it" prompt
 * will not effectively address all issues.
 */

export function formatCurrency(amount: number, currency: string): string {
  // BUG 1: Doesn't handle negative numbers properly
  // BUG 2: No validation for currency code
  // BUG 3: Floating point precision issues
  // BUG 4: No locale support
  
  const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency;
  return symbol + amount.toString();
}

// Example outputs:
// formatCurrency(1234.5, 'USD')  → "$1234.5"     (should be "$1,234.50")
// formatCurrency(-50, 'USD')     → "$-50"        (should be "-$50.00")
// formatCurrency(0.1 + 0.2, 'USD') → "$0.30000000000000004" (precision error)

/**
 * Your task: Create a specific prompt that:
 * 1. Identifies all bugs
 * 2. Provides fixes for each
 * 3. Adds proper validation
 * 4. Improves the overall implementation
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
```

Create `src/challenges/lab1-basic/challenge4-errors.ts`:
```typescript
/**
 * LAB 1 - CHALLENGE 4: Error Handling
 * 
 * BAD PROMPT: "Add error handling"
 * 
 * This function has no error handling whatsoever.
 */

export async function fetchUserPortfolios(userId: string): Promise<any[]> {
  // No validation of userId
  // No try/catch
  // No timeout handling
  // No retry logic
  // No meaningful error messages
  
  const response = await fetch(`/api/users/${userId}/portfolios`);
  const data = await response.json();
  return data.portfolios;
}

/**
 * Your task: Create a prompt that adds comprehensive error handling
 * 
 * Consider:
 * - What errors can occur?
 * - How should each be handled?
 * - What should be logged?
 * - What should the caller receive?
 * - Should there be retries?
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
```

Create `src/challenges/lab1-basic/challenge5-optimize.ts`:
```typescript
/**
 * LAB 1 - CHALLENGE 5: Code Optimization
 * 
 * BAD PROMPT: "Optimize this code"
 * 
 * This function works but is inefficient.
 */

export function findDuplicateTransactions(
  transactions: Array<{
    id: string;
    symbol: string;
    quantity: number;
    price: number;
    timestamp: Date;
  }>
): string[][] {
  const duplicates: string[][] = [];
  
  // O(n²) comparison
  for (let i = 0; i < transactions.length; i++) {
    for (let j = i + 1; j < transactions.length; j++) {
      const t1 = transactions[i];
      const t2 = transactions[j];
      
      // Check if potentially duplicate (same symbol, quantity, price within 1 minute)
      if (
        t1.symbol === t2.symbol &&
        t1.quantity === t2.quantity &&
        t1.price === t2.price &&
        Math.abs(t1.timestamp.getTime() - t2.timestamp.getTime()) < 60000
      ) {
        duplicates.push([t1.id, t2.id]);
      }
    }
  }
  
  return duplicates;
}

/**
 * Your task: Create a prompt that optimizes for:
 * - Time complexity
 * - Memory efficiency
 * - Readability
 * - Maintainability
 * 
 * Be specific about what "optimize" means!
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
```

---

## Section 4: Create Prompt Library

### 4.1 Library README

Create `prompt-library/README.md`:
```markdown
# Fidelity Copilot Prompt Library

A curated collection of tested, approved prompts for GitHub Copilot.

## Purpose

This library provides:
- Consistent patterns across teams
- Proven prompts for common tasks
- Quality-assured outputs
- Accelerated onboarding

## Structure

```
prompt-library/
├── code-generation/    # Creating new code
├── testing/           # Test creation and enhancement
├── refactoring/       # Improving existing code
├── documentation/     # Docs and comments
└── security/          # Security-focused patterns
```

## How to Use

1. Navigate to the relevant category
2. Find a pattern matching your need
3. Copy the template
4. Fill in the [variables]
5. Execute in Copilot

## Contributing

See contribution guidelines in each pattern template.
Patterns require 5+ successful uses before submission.
```

### 4.2 Code Generation Patterns

Create `prompt-library/code-generation/api-service-method.md`:
```markdown
# Pattern: API Service Method

**Category:** Code Generation  
**Language:** TypeScript/Angular  
**Success Rate:** 94%  
**Last Verified:** December 2025

## Prompt Template

```
Create a [service-name] service method in TypeScript that:

Context:
- Application: [Angular/React/Node.js] with [framework-version]
- Existing patterns: [describe existing service patterns]
- Dependencies: [list relevant services/modules]

Method Requirements:
- Name: [method-name]
- Accepts: [input-parameters-with-types]
- Returns: [Observable<T>/Promise<T>] of [return-type]

Features to include:
1. [feature-1, e.g., "Caching with 5-minute TTL"]
2. [feature-2, e.g., "Retry logic with exponential backoff (3 attempts)"]
3. [feature-3, e.g., "Error transformation to domain errors"]

Error handling:
- [error-scenario-1]: [how to handle]
- [error-scenario-2]: [how to handle]

Format: TypeScript with full type definitions and JSDoc comments
Constraints: [any constraints, e.g., "No external dependencies"]
```

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| service-name | Name of the service | "Portfolio" |
| method-name | Method to create | "getBalances" |
| input-parameters | Method inputs | "userId: string, accountIds?: string[]" |
| return-type | What method returns | "AccountBalance[]" |
| feature-1..n | Required features | "Caching", "Retry logic" |
| error-scenario | Error cases | "Network timeout", "Auth failure" |

## Example Usage

```
Create a Portfolio service method in TypeScript that:

Context:
- Application: Angular 16 with RxJS 7
- Existing patterns: Services use HttpClient, return Observables
- Dependencies: HttpClient, AuthService, CacheService

Method Requirements:
- Name: getAccountBalances
- Accepts: userId: string, accountIds?: string[]
- Returns: Observable<AccountBalance[]>

Features to include:
1. Caching with 5-minute TTL using CacheService
2. Retry logic with exponential backoff (3 attempts)
3. Request cancellation on component destroy

Error handling:
- 401 Unauthorized: Redirect to login via AuthService
- 404 Not Found: Return empty array
- 500 Server Error: Throw with user-friendly message

Format: TypeScript with full type definitions and JSDoc comments
Constraints: Must integrate with existing error interceptor
```

## Expected Output Quality: 9/10

## Edge Cases Discovered
- When accountIds is empty array vs undefined, behavior differs
- Cache key should include all parameters
- Retry should not apply to 4xx errors
```

Create `prompt-library/code-generation/data-transformer.md`:
```markdown
# Pattern: Data Transformer

**Category:** Code Generation  
**Language:** TypeScript  
**Success Rate:** 91%  
**Last Verified:** December 2025

## Prompt Template

```
Create a data transformer function that converts [source-type] to [target-type]:

Source structure:
[describe or paste source type/interface]

Target structure:
[describe or paste target type/interface]

Transformation rules:
1. [field-mapping-1]
2. [field-mapping-2]
3. [calculated-field-if-any]

Handle these edge cases:
- [edge-case-1]
- [edge-case-2]

Format: Pure function with full TypeScript types
Include: Input validation, null safety, JSDoc
Constraints: No mutations of input, must be deterministic
```

## Example Usage

```
Create a data transformer function that converts APIHolding to DisplayHolding:

Source structure:
interface APIHolding {
  sym: string;
  qty: number;
  avg_cost: number;
  cur_price: number;
  as_of: string; // ISO date string
}

Target structure:
interface DisplayHolding {
  symbol: string;
  quantity: number;
  averageCost: number;
  currentPrice: number;
  marketValue: number;
  gainLoss: number;
  gainLossPercent: number;
  lastUpdated: Date;
}

Transformation rules:
1. sym → symbol (uppercase)
2. qty → quantity (ensure integer)
3. Calculate marketValue = quantity * currentPrice
4. Calculate gainLoss = marketValue - (quantity * averageCost)
5. Calculate gainLossPercent = (gainLoss / (quantity * averageCost)) * 100

Handle these edge cases:
- quantity is 0 (avoid division by zero)
- cur_price is null or undefined
- as_of is invalid date string

Format: Pure function with full TypeScript types
Include: Input validation, null safety, JSDoc
Constraints: No mutations of input, must be deterministic
```

## Expected Output Quality: 9/10
```

### 4.3 Testing Patterns

Create `prompt-library/testing/unit-test-suite.md`:
```markdown
# Pattern: Unit Test Suite

**Category:** Testing  
**Language:** TypeScript/Jest  
**Success Rate:** 89%  
**Last Verified:** December 2025

## Prompt Template

```
Generate a comprehensive Jest test suite for [target-function/class]:

Code to test:
[paste the code or describe it]

Test framework: Jest with TypeScript
Mocking: [jest.mock / manual mocks / specific library]

Required test categories:
1. Happy path - [number] tests covering normal operation
2. Edge cases - [describe specific edges to test]
3. Error scenarios - [list error conditions]
4. Boundary values - [list boundaries]

Assertions should verify:
- [what to assert-1]
- [what to assert-2]
- [what to assert-3]

Format: 
- Use describe/it blocks with clear descriptions
- Group by functionality
- Include setup in beforeEach
- Add comments explaining complex scenarios

Constraints:
- Tests must be independent (no shared state)
- Each test should have single responsibility
- Use meaningful test names that describe behavior
```

## Example Usage

```
Generate a comprehensive Jest test suite for calculatePortfolioReturn:

Code to test:
function calculatePortfolioReturn(
  initialValue: number,
  finalValue: number,
  dividends: number = 0
): { absoluteReturn: number; percentReturn: number }

Test framework: Jest with TypeScript
Mocking: None needed (pure function)

Required test categories:
1. Happy path - 3 tests covering normal gains, losses, break-even
2. Edge cases - zero initial value, negative values, very large numbers
3. Error scenarios - NaN inputs, Infinity, undefined
4. Boundary values - 0, 0.01, Number.MAX_SAFE_INTEGER

Assertions should verify:
- Return object has both required properties
- Values are rounded to 2 decimal places
- Percentage calculation is mathematically correct

Format: 
- Use describe/it blocks with clear descriptions
- Group by scenario type
- Include setup in beforeEach where helpful

Constraints:
- Tests must be independent
- No floating point comparison issues (use toBeCloseTo)
- Each test should have single responsibility
```

## Expected Output Quality: 8.5/10
```

### 4.4 Security Patterns

Create `prompt-library/security/input-validation.md`:
```markdown
# Pattern: Input Validation

**Category:** Security  
**Language:** TypeScript  
**Success Rate:** 88%  
**Last Verified:** December 2025

## Prompt Template

```
Create an input validation function for [input-type]:

Input structure:
[paste interface or describe input]

Validation rules:
1. [field-1]: [validation-rules]
2. [field-2]: [validation-rules]
3. [field-3]: [validation-rules]

Security considerations:
- [security-concern-1]
- [security-concern-2]

Return format:
- Success: { valid: true, data: [sanitized-input] }
- Failure: { valid: false, errors: [array-of-error-messages] }

Constraints:
- Must sanitize all string inputs
- Must not throw exceptions
- Must provide specific error messages per field
- Must be synchronous
```

## Example Usage

```
Create an input validation function for LoginRequest:

Input structure:
interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

Validation rules:
1. email: Required, valid email format, max 254 chars, lowercase
2. password: Required, min 8 chars, max 128 chars, no leading/trailing whitespace
3. rememberMe: Optional, must be boolean if provided

Security considerations:
- Prevent email enumeration (generic error messages)
- No password content in error messages
- Sanitize email to prevent injection
- Rate limiting hint in response

Return format:
- Success: { valid: true, data: { sanitized LoginRequest } }
- Failure: { valid: false, errors: ["Email is required", "Invalid email format"] }

Constraints:
- Must sanitize all string inputs
- Must not throw exceptions
- Must provide specific error messages per field
- Must be synchronous
```

## Expected Output Quality: 9/10
```

Create `prompt-library/security/auth-guard.md`:
```markdown
# Pattern: Authentication Guard

**Category:** Security  
**Language:** TypeScript/Angular  
**Success Rate:** 92%  
**Last Verified:** December 2025

## Prompt Template

```
Create an authentication guard for [framework] that:

Context:
- Framework: [Angular/React/Express]
- Auth mechanism: [JWT/Session/OAuth]
- Token storage: [localStorage/httpOnly cookie/memory]

Guard requirements:
1. Check: [what to verify]
2. On success: [what happens]
3. On failure: [where to redirect/what to return]

Additional features:
- [feature-1, e.g., "Role-based access"]
- [feature-2, e.g., "Token refresh handling"]
- [feature-3, e.g., "Remember original URL"]

Security requirements:
- [requirement-1]
- [requirement-2]

Format: [Guard/Middleware/HOC] with full types
Include: Error handling, logging hooks, testability
```

## Expected Output Quality: 9/10
```

---

## Section 5: Create Documentation

### 5.1 CRAFT Framework Guide

Create `docs/craft-framework/guide.md`:
```markdown
# The CRAFT Framework for Prompt Engineering

## Overview

CRAFT is a structured approach to writing effective prompts for AI coding assistants.

## The Framework

### C - Context
**What is the situation?**

Provide background information that helps the AI understand:
- What application/project this is for
- What technologies are in use
- What existing patterns should be followed
- What constraints exist

**Example:**
```
Context: Angular 16 application with NgRx state management,
using our standard service patterns with dependency injection.
This is for the portfolio management module.
```

### R - Role
**Who should the AI act as?**

Specify the expertise level and domain:
- Senior/Junior developer
- Specific specialty (security, performance, testing)
- Domain expertise (financial services, healthcare)

**Example:**
```
Acting as a senior TypeScript developer with expertise in 
financial calculations and regulatory compliance...
```

### A - Action
**What exactly should happen?**

Be specific and use numbered lists:
- What to create/modify/fix
- Step-by-step requirements
- Success criteria

**Example:**
```
Create a service method that:
1. Accepts a userId and date range
2. Fetches transactions from the API
3. Aggregates by category
4. Returns a summary with totals
```

### F - Format
**How should the output look?**

Specify:
- Code style (TypeScript, ES6, etc.)
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
- Style constraints

**Example:**
```
Constraints:
- No external dependencies
- Must be backwards compatible with existing callers
- Maximum 50 lines per method
- Must handle null inputs gracefully
```

## Putting It Together

**Bad Prompt:**
```
Create a login function
```

**CRAFT Prompt:**
```
Context: Express.js API for a financial services application
using JWT authentication with refresh tokens.

Role: Senior backend developer focused on security best practices.

Action: Create a login endpoint handler that:
1. Validates email and password inputs
2. Checks credentials against user database
3. Generates JWT access token (15 min) and refresh token (7 days)
4. Sets httpOnly cookie for refresh token
5. Returns access token in response body
6. Logs authentication attempts for audit

Format: TypeScript async function with full error handling
Include request/response types and JSDoc documentation

Constraints:
- Must use bcrypt for password comparison
- Must rate limit to 5 attempts per minute per IP
- Must not leak whether email exists
- Must sanitize all inputs
```

## Quick Reference

| Element | Question | Key Words |
|---------|----------|-----------|
| Context | What's the situation? | "In our...", "For the...", "Using..." |
| Role | Who's the expert? | "Acting as...", "As a senior..." |
| Action | What to do? | "Create...", "Implement...", "1. 2. 3." |
| Format | How to output? | "Format as...", "Include...", "Style:" |
| Tone | What rules? | "Must not...", "Constraints:", "Avoid..." |
```

### 5.2 Quality Rubric

Create `docs/rubrics/prompt-quality-rubric.md`:
```markdown
# Prompt Quality Rubric

Use this rubric to evaluate prompt effectiveness.

## Scoring Guide

### Clarity (1-10)

| Score | Description |
|-------|-------------|
| 1-3 | Ambiguous, could be interpreted multiple ways |
| 4-6 | Mostly clear, some room for misinterpretation |
| 7-8 | Clear intent, minor ambiguities |
| 9-10 | Crystal clear, no room for misinterpretation |

### Completeness (1-10)

| Score | Description |
|-------|-------------|
| 1-3 | Missing most context, requirements unclear |
| 4-6 | Some context provided, gaps in requirements |
| 7-8 | Good context, most requirements specified |
| 9-10 | Full context, all requirements explicit |

### Specificity (1-10)

| Score | Description |
|-------|-------------|
| 1-3 | Very vague, no concrete details |
| 4-6 | Some specifics, many assumptions needed |
| 7-8 | Specific requirements, few assumptions |
| 9-10 | Highly specific, no assumptions needed |

### Output Quality (1-10)

| Score | Description |
|-------|-------------|
| 1-3 | Output needs complete rewrite |
| 4-6 | Output needs significant editing |
| 7-8 | Output needs minor adjustments |
| 9-10 | Output is ready to use as-is |

### Consistency (1-10)

| Score | Description |
|-------|-------------|
| 1-3 | Different outputs each time |
| 4-6 | Similar outputs, some variation |
| 7-8 | Consistent outputs, minor differences |
| 9-10 | Identical structure/quality each time |

## Overall Score Calculation

```
Overall = (Clarity + Completeness + Specificity + Output + Consistency) / 5
```

## Score Interpretation

| Overall | Interpretation | Action |
|---------|---------------|--------|
| 1-3 | Poor | Rewrite from scratch |
| 4-5 | Needs Work | Apply CRAFT framework |
| 6-7 | Good | Refine specifics |
| 8-9 | Very Good | Minor polish |
| 10 | Excellent | Ready for library |

## Self-Assessment Template

```markdown
## Prompt Evaluation

**Prompt:**
[Your prompt here]

**Scores:**
- Clarity: ___ /10
- Completeness: ___ /10
- Specificity: ___ /10
- Output Quality: ___ /10
- Consistency: ___ /10
- **Overall: ___ /10**

**What worked well:**
[Notes]

**What could improve:**
[Notes]

**Revised prompt:**
[If needed]
```
```

---

## Section 6: Create Exercise Files

### 6.1 Bad Prompts to Transform

Create `exercises/bad-prompts/transform-these.md`:
```markdown
# Lab 1: Transform These Bad Prompts

Your task: Transform each bad prompt using the CRAFT framework.

## Prompt 1: Login Function
**Bad:** "Create a login function"

**Your CRAFT transformation:**
```
Context:

Role:

Action:

Format:

Constraints:
```

---

## Prompt 2: Write Tests
**Bad:** "Write tests for this"

**Your CRAFT transformation:**
```
Context:

Role:

Action:

Format:

Constraints:
```

---

## Prompt 3: Fix the Bug
**Bad:** "Fix the bug"

**Your CRAFT transformation:**
```
Context:

Role:

Action:

Format:

Constraints:
```

---

## Prompt 4: Add Error Handling
**Bad:** "Add error handling"

**Your CRAFT transformation:**
```
Context:

Role:

Action:

Format:

Constraints:
```

---

## Prompt 5: Optimize This Code
**Bad:** "Optimize this code"

**Your CRAFT transformation:**
```
Context:

Role:

Action:

Format:

Constraints:
```

---

## Evaluation

For each prompt, rate your transformation:

| Prompt | Clarity | Completeness | Specificity | Output Quality | Overall |
|--------|---------|--------------|-------------|----------------|---------|
| 1 | /10 | /10 | /10 | /10 | /10 |
| 2 | /10 | /10 | /10 | /10 | /10 |
| 3 | /10 | /10 | /10 | /10 | /10 |
| 4 | /10 | /10 | /10 | /10 | /10 |
| 5 | /10 | /10 | /10 | /10 | /10 |
```

---

## Section 7: Create Entry Point

Create `src/index.ts`:
```typescript
/**
 * Copilot Prompt Engineering Lab
 * 
 * This lab provides exercises for learning effective prompt engineering
 * with GitHub Copilot.
 * 
 * Lab Structure:
 * - Lab 1: Basic prompt transformation using CRAFT framework
 * - Lab 2: Using Fidelity prompt library patterns
 * - Lab 3: Contributing to the prompt library
 */

export * from './services/user.service';
export * from './services/portfolio.service';
export * from './services/transaction.service';
export * from './models/types';

console.log('Prompt Engineering Lab Ready');
console.log('Start with exercises in exercises/bad-prompts/transform-these.md');
```

---

## Section 8: Final Setup

### 8.1 Create README

Create `README.md`:
```markdown
# Copilot Prompt Engineering Lab

Workshop lab for learning effective prompt engineering with GitHub Copilot.

## Getting Started

```bash
npm install
npm run build
```

## Lab Structure

### Lab 1: Crafting Effective Prompts (15 min)
Location: `exercises/bad-prompts/transform-these.md`

Transform vague prompts into effective ones using the CRAFT framework.

### Lab 2: Applying Library Patterns (15 min)
Location: `prompt-library/`

Use established patterns from the Fidelity prompt library.

### Lab 3: Contributing to the Library (10 min)
Create your own library-quality prompt entry.

## Resources

- CRAFT Framework: `docs/craft-framework/guide.md`
- Quality Rubric: `docs/rubrics/prompt-quality-rubric.md`
- Prompt Library: `prompt-library/`

## Key Concepts

**CRAFT Framework:**
- **C**ontext - What's the situation?
- **R**ole - Who should Copilot act as?
- **A**ction - What exactly should happen?
- **F**ormat - How should output look?
- **T**one - What rules/constraints apply?
```

### 8.2 Initialize Git

```bash
git init
echo "node_modules/\ndist/\n.env" > .gitignore
git add .
git commit -m "Initial prompt engineering lab setup"
```

---

## Verification Checklist

- [ ] `npm install` completes without errors
- [ ] `npm run build` compiles successfully
- [ ] All challenge files have clear instructions
- [ ] Prompt library has at least 5 patterns
- [ ] CRAFT framework guide is complete
- [ ] Quality rubric is usable
- [ ] README provides clear navigation

---

**End of Lab Build Instructions**
