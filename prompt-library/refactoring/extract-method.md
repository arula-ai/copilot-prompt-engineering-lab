# Pattern: Extract Method

**Category:** Refactoring
**Language:** TypeScript
**Success Rate:** 90%
**Last Verified:** December 2025

## Prompt Template

```
Refactor by extracting a method from [function-name]:

Current code:
[paste the code block to extract from]

Extract the following logic into a new method:
- Lines/functionality: [describe what to extract]
- New method name: [proposed-name]
- Parameters needed: [list parameters]
- Return type: [expected return type]

Requirements:
1. Maintain existing behavior exactly
2. Add appropriate JSDoc comments
3. Handle edge cases from original context
4. Keep method focused on single responsibility

Format: TypeScript with full types
Constraints: [any constraints, e.g., "Must remain a pure function"]
```

## Example Usage

```
Refactor by extracting a method from processTransaction:

Current code:
async processTransaction(tx: Transaction): Promise<Transaction> {
  // Validate
  if (!tx.symbol) throw new Error('Symbol required');
  if (tx.quantity <= 0) throw new Error('Invalid quantity');
  if (tx.price <= 0) throw new Error('Invalid price');

  // Calculate
  const total = tx.quantity * tx.price;
  const fees = total * 0.01;

  // Process
  tx.total = total;
  tx.fees = fees;
  tx.status = 'completed';
  return tx;
}

Extract the following logic into a new method:
- Lines/functionality: Validation logic (first 3 if statements)
- New method name: validateTransactionFields
- Parameters needed: tx: Transaction
- Return type: void (throws on invalid)

Requirements:
1. Maintain existing behavior exactly
2. Add appropriate JSDoc comments
3. Throw same error messages
4. Keep validation focused

Format: TypeScript with full types
Constraints: Must throw same errors as original
```

## Expected Output Quality: 9/10
