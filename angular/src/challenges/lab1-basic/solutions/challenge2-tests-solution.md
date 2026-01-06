# Challenge 2: Test Generation - SOLUTION

## Bad Prompt
```
Write tests for this
```

## Expert CRAFT Prompt

```
Context:
- Jest 29 test suite for Angular application
- Testing calculatePortfolioReturn pure function
- Function calculates absolute and percent returns from initial/final values
- Financial precision required (currency values)

Role: QA engineer with expertise in financial calculations and edge case testing.

Action: Generate comprehensive test suite covering:
1. Happy path (4 tests):
   - Positive return (gain)
   - Negative return (loss)
   - Break-even (zero return)
   - With dividends included
2. Edge cases (5 tests):
   - Zero initial value (division handling)
   - Very small values (0.01)
   - Very large values (millions)
   - Negative initial value
   - All zeros
3. Boundary values (3 tests):
   - Number.MAX_SAFE_INTEGER
   - Number.MIN_VALUE
   - Precision edge (0.1 + 0.2 scenario)
4. Invalid inputs (4 tests):
   - NaN inputs
   - Infinity
   - Undefined
   - Null

Format: Jest with TypeScript
- describe/it blocks with behavior-describing names
- AAA pattern (Arrange-Act-Assert) with comments
- test.each for parameterized boundary tests
- Group by category (happy path, edge cases, etc.)

Constraints:
- Use toBeCloseTo for floating point comparisons (2 decimal places)
- Each test must be independent (no shared state)
- Test names should read like specifications
- Minimum 16 tests total
- Include setup comments explaining non-obvious test cases
```

## Why This Works

| CRAFT Element | What It Provides | Impact |
|---------------|------------------|--------|
| **Context** | Framework, function purpose, domain | AI understands what's being tested |
| **Role** | QA + financial expertise | Gets thorough edge case coverage |
| **Action** | Explicit test categories with counts | Guarantees comprehensive coverage |
| **Format** | Structure, patterns, organization | Clean, maintainable test file |
| **Constraints** | Precision handling, independence | Avoids flaky tests |

## Expected Output Quality: 9/10

The AI should generate:
- 16+ well-organized tests
- Proper floating point handling
- Meaningful test descriptions
- Edge cases that catch real bugs
- Parameterized tests for boundaries

## Sample Expected Output Structure

```typescript
describe('calculatePortfolioReturn', () => {
  describe('Happy Path', () => {
    it('calculates positive return correctly', () => { ... });
    it('calculates negative return (loss) correctly', () => { ... });
    it('returns zero for break-even scenario', () => { ... });
    it('includes dividends in return calculation', () => { ... });
  });

  describe('Edge Cases', () => {
    it('handles zero initial value without throwing', () => { ... });
    it('handles very small decimal values', () => { ... });
    // ...
  });

  describe('Boundary Values', () => {
    test.each([
      [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 0, 0],
      [0.01, 0.02, 0, 100],
      // ...
    ])('handles boundary: initial=%d, final=%d', (initial, final, dividends, expectedPct) => {
      // ...
    });
  });

  describe('Invalid Inputs', () => {
    it('handles NaN input gracefully', () => { ... });
    // ...
  });
});
```

## Common Mistakes to Avoid

| Mistake | Why It's Bad | Better Approach |
|---------|--------------|-----------------|
| `expect(result).toBe(0.3)` | Floating point fails | `expect(result).toBeCloseTo(0.3, 2)` |
| Shared variables | Tests affect each other | Fresh data in each test |
| `it('test 1')` | Meaningless name | `it('returns positive percent for gain')` |
| Only happy path | Misses real bugs | Explicit edge case requirements |
