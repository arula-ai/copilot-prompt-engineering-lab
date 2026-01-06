# Pattern: JSDoc Generation

**Category:** Documentation
**Language:** TypeScript/JavaScript
**Success Rate:** 92%
**Last Verified:** December 2025

## Prompt Template

```
Generate comprehensive JSDoc documentation for [function/class/method]:

Code:
[paste the code]

Documentation requirements:
1. Description: [brief/detailed] explanation of purpose
2. Parameters: Document all with types and descriptions
3. Returns: Document return value and possible values
4. Throws: List all exceptions that can be thrown
5. Examples: Include [number] usage examples

Additional tags to include:
- @since [version]
- @see [related functions/docs]
- @deprecated [if applicable]

Format: Standard JSDoc format
Constraints: [any constraints, e.g., "Keep under 20 lines"]
```

## Example Usage

```
Generate comprehensive JSDoc documentation for calculatePortfolioReturn:

Code:
function calculatePortfolioReturn(
  initialValue: number,
  finalValue: number,
  dividends: number = 0
): { absoluteReturn: number; percentReturn: number }

Documentation requirements:
1. Description: Detailed explanation including formula used
2. Parameters: Document all three with valid ranges
3. Returns: Document both properties of return object
4. Throws: Document division by zero case
5. Examples: Include 3 usage examples (gain, loss, with dividends)

Additional tags to include:
- @since 1.0.0
- @see calculateAnnualizedReturn

Format: Standard JSDoc format
Constraints: Include formula in description
```

## Expected Output Quality: 9/10
