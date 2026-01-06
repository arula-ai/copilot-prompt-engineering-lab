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
