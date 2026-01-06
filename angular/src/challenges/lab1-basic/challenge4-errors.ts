/**
 * LAB 1 - CHALLENGE 4: Error Handling
 *
 * BAD PROMPT: "Add error handling"
 *
 * This function has no error handling whatsoever.
 */

export async function fetchUserPortfolios(userId: string): Promise<any[]> {
  // No validation of userId
  // No try/catch
  // No timeout handling
  // No retry logic
  // No meaningful error messages

  const response = await fetch(`/api/users/${userId}/portfolios`);
  const data = await response.json() as { portfolios: any[] };
  return data.portfolios;
}

/**
 * Your task: Create a prompt that adds comprehensive error handling
 *
 * Consider:
 * - What errors can occur?
 * - How should each be handled?
 * - What should be logged?
 * - What should the caller receive?
 * - Should there be retries?
 */

// YOUR IMPROVED PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// QUALITY RATING (1-10): ___
