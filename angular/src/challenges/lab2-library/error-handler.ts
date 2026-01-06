/**
 * LAB 2 - LIBRARY PATTERNS: Error Handler
 *
 * Use prompt library patterns to create secure error handling.
 *
 * Reference: prompt-library/security/input-validation.md
 *
 * Your task:
 * 1. Open the input-validation.md pattern
 * 2. Apply it to validate transaction requests
 * 3. Ensure security considerations are addressed
 */

import { Transaction } from '../../models/types';

// Current validation - minimal
export function validateTransaction(transaction: Partial<Transaction>): string[] {
  const errors: string[] = [];
  if (!transaction.symbol) errors.push('Symbol required');
  if (!transaction.quantity) errors.push('Quantity required');
  return errors;
}

// YOUR LIBRARY PATTERN PROMPT:
// ____________________________________________
// ____________________________________________
// ____________________________________________

// PASTE IMPROVED VALIDATION HERE:

// SECURITY IMPROVEMENTS:
// ____________________________________________
