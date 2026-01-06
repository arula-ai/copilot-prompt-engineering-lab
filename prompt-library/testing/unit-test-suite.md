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
