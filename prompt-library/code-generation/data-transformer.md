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
