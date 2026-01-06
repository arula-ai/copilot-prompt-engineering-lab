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
