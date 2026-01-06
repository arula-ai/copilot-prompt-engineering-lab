/**
 * LAB 2 - LIBRARY PATTERNS: Test Generation
 *
 * Use prompt library patterns to generate comprehensive tests.
 *
 * Reference: prompt-library/testing/unit-test-suite.md
 *
 * CHALLENGE: Generate a comprehensive test suite for calculateTotalValue.
 *
 * The function has potential issues to test:
 * - What happens with empty array?
 * - What about negative quantities or prices?
 * - Floating point precision with large numbers?
 * - Null/undefined holdings in array?
 *
 * YOUR TASK:
 * 1. Open prompt-library/testing/unit-test-suite.md
 * 2. Fill in the template for calculateTotalValue:
 *    - [function-name]: calculateTotalValue
 *    - [description]: Calculates total portfolio value from holdings
 *    - [inputs]: holdings: Holding[] (symbol, quantity, currentPrice)
 *    - [output]: number (total value)
 *    - [edge-cases]: empty array, single item, negative values, zero values
 *    - [error-scenarios]: null array, undefined holdings, NaN prices
 * 3. Use your crafted prompt in Copilot
 * 4. Paste generated tests below and analyze coverage
 */

import { Holding } from '../../models/types';

// ============================================================
// FUNCTION UNDER TEST
// ============================================================

/**
 * Calculates total portfolio value from holdings.
 * Known issues (intentional for testing challenge):
 * - No null checking
 * - No handling of negative values
 * - Potential floating point precision issues
 */
export function calculateTotalValue(holdings: Holding[]): number {
  return holdings.reduce((sum, h) => sum + h.quantity * h.currentPrice, 0);
}

// ============================================================
// YOUR GENERATED TESTS
// ============================================================

/**
 * YOUR LIBRARY PATTERN PROMPT (paste what you used):
 * ─────────────────────────────────────────────────
 *
 *
 *
 * ─────────────────────────────────────────────────
 */

// PASTE GENERATED TESTS HERE:
// (Should be Jest tests with describe/it blocks)


// ============================================================
// COVERAGE ANALYSIS
// ============================================================

/**
 * COVERAGE CHECKLIST - mark what your generated tests include:
 *
 * HAPPY PATH:
 * [ ] Single holding with positive values
 * [ ] Multiple holdings summed correctly
 * [ ] Large portfolio (10+ holdings)
 *
 * EDGE CASES:
 * [ ] Empty holdings array → returns 0
 * [ ] Single holding → returns that holding's value
 * [ ] Holding with quantity = 0 → contributes 0
 * [ ] Holding with price = 0 → contributes 0
 *
 * ERROR SCENARIOS:
 * [ ] Null array → throws or handles gracefully
 * [ ] Array with null element → throws or handles
 * [ ] Negative quantity → documents behavior
 * [ ] Negative price → documents behavior
 *
 * PRECISION:
 * [ ] Large numbers (millions) → no overflow
 * [ ] Decimal precision (0.01 prices) → accurate sum
 * [ ] Many small values → no accumulation error
 *
 * TOTAL TESTS GENERATED: ___
 * QUALITY RATING: ___/10
 */
