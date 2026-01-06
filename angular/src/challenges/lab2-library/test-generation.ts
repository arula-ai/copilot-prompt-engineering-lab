/**
 * LAB 2 - LIBRARY PATTERNS: Test Generation
 *
 * Use prompt library patterns to generate comprehensive tests.
 *
 * Reference: prompt-library/testing/unit-test-suite.md
 *
 * Your task:
 * 1. Open the unit-test-suite.md pattern
 * 2. Apply it to the calculateTotalValue function below
 * 3. Compare the generated tests to what you'd write manually
 */

import { Holding } from '../../models/types';

// Function to test
export function calculateTotalValue(holdings: Holding[]): number {
  return holdings.reduce((sum, h) => sum + h.quantity * h.currentPrice, 0);
}

// YOUR LIBRARY PATTERN PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// PASTE GENERATED TESTS HERE:

// COVERAGE ANALYSIS:
// - Happy path covered? ___
// - Edge cases covered? ___
// - Error scenarios covered? ___
// - Boundary values covered? ___
