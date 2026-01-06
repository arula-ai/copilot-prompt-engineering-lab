/**
 * LAB 1 - CHALLENGE 5: Code Optimization
 *
 * BAD PROMPT: "Optimize this code"
 *
 * This function works but is inefficient.
 */

export function findDuplicateTransactions(
  transactions: Array<{
    id: string;
    symbol: string;
    quantity: number;
    price: number;
    timestamp: Date;
  }>
): string[][] {
  const duplicates: string[][] = [];

  // O(n²) comparison
  for (let i = 0; i < transactions.length; i++) {
    for (let j = i + 1; j < transactions.length; j++) {
      const t1 = transactions[i];
      const t2 = transactions[j];

      // Check if potentially duplicate (same symbol, quantity, price within 1 minute)
      if (
        t1.symbol === t2.symbol &&
        t1.quantity === t2.quantity &&
        t1.price === t2.price &&
        Math.abs(t1.timestamp.getTime() - t2.timestamp.getTime()) < 60000
      ) {
        duplicates.push([t1.id, t2.id]);
      }
    }
  }

  return duplicates;
}

/**
 * Your task: Create a prompt that optimizes for:
 * - Time complexity
 * - Memory efficiency
 * - Readability
 * - Maintainability
 *
 * Be specific about what "optimize" means!
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
