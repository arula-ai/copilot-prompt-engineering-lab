# Challenge 3: Bug Fix - SOLUTION

## Bad Prompt
```
Fix the bug
```

## Expert CRAFT Prompt

```
Context:
- Angular financial application displaying portfolio values
- formatCurrency function used throughout for money display
- Must support multiple currencies and locales
- Current output examples showing bugs:
  - formatCurrency(1234.5, 'USD')  → "$1234.5" (should be "$1,234.50")
  - formatCurrency(-50, 'USD')     → "$-50" (should be "-$50.00")
  - formatCurrency(0.1 + 0.2, 'USD') → "$0.30000000000000004" (precision error)

Role: Senior developer with internationalization (i18n) experience in financial applications.

Action: Fix these specific bugs:
1. BUG: No thousand separators
   FIX: Add locale-aware grouping
2. BUG: Negative sign in wrong position ("$-50" vs "-$50")
   FIX: Use proper negative currency formatting
3. BUG: Floating point precision errors
   FIX: Round to 2 decimal places before formatting
4. BUG: Only handles USD/EUR symbols
   FIX: Support all ISO 4217 currency codes

Additionally:
5. Add input validation (null, undefined, NaN)
6. Support optional locale parameter (default to 'en-US')
7. Handle edge cases: zero, very large numbers, very small numbers

Format: TypeScript function using Intl.NumberFormat
- Full type annotations
- JSDoc with @param, @returns, @example, @throws
- Pure function (no side effects)

Constraints:
- Must handle null/undefined without throwing
- Must round to exactly 2 decimal places for all currencies
- Must work in all modern browsers (no polyfills needed)
- Performance: should be usable in ngFor loops (memoization hint)
```

## Why This Works

| CRAFT Element | What It Provides | Impact |
|---------------|------------------|--------|
| **Context** | Current bugs with examples | AI sees exactly what's wrong |
| **Role** | i18n + financial expertise | Gets proper Intl.NumberFormat usage |
| **Action** | Each bug listed with expected fix | All issues addressed |
| **Format** | Specific API, documentation needs | Clean, documented output |
| **Constraints** | Edge cases, performance, browser support | Production-ready code |

## Expected Output Quality: 9/10

The AI should generate:
```typescript
/**
 * Formats a number as currency with proper locale support.
 * @param amount - The numeric amount to format
 * @param currency - ISO 4217 currency code (e.g., 'USD', 'EUR', 'GBP')
 * @param locale - BCP 47 locale string (default: 'en-US')
 * @returns Formatted currency string
 * @example
 * formatCurrency(1234.5, 'USD') // "$1,234.50"
 * formatCurrency(-50, 'USD')    // "-$50.00"
 * formatCurrency(1000, 'EUR', 'de-DE') // "1.000,00 €"
 */
export function formatCurrency(
  amount: number | null | undefined,
  currency: string,
  locale: string = 'en-US'
): string {
  // Handle invalid input
  if (amount == null || !Number.isFinite(amount)) {
    return formatCurrency(0, currency, locale);
  }

  // Round to 2 decimal places to avoid floating point issues
  const rounded = Math.round(amount * 100) / 100;

  // Use Intl.NumberFormat for proper locale-aware formatting
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(rounded);
}
```

## Key Insights

### Why Intl.NumberFormat?
- Handles locale differences (1,234.50 vs 1.234,50)
- Correct negative formatting per locale
- All currency symbols built-in
- Browser-native (no library needed)

### Why Round First?
```javascript
// Without rounding:
0.1 + 0.2 = 0.30000000000000004

// With rounding:
Math.round((0.1 + 0.2) * 100) / 100 = 0.3
```

### Common Edge Cases to Test
| Input | Expected Output |
|-------|-----------------|
| `(0, 'USD')` | `"$0.00"` |
| `(-0.001, 'USD')` | `"$0.00"` (rounds to zero) |
| `(null, 'USD')` | `"$0.00"` (safe default) |
| `(1000000, 'JPY')` | `"¥1,000,000"` (no decimals for JPY) |
