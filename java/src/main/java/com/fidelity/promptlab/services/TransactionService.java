package com.fidelity.promptlab.services;

import com.fidelity.promptlab.models.Transaction;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service with various issues for prompt engineering challenges.
 */
public class TransactionService {

    // Challenge: Complex validation needed
    public List<String> validateTransaction(Transaction transaction) {
        List<String> errors = new ArrayList<>();

        // Minimal validation - participants should improve with prompts
        if (transaction.getSymbol() == null || transaction.getSymbol().isEmpty()) {
            errors.add("Symbol required");
        }
        if (transaction.getQuantity() <= 0) {
            errors.add("Invalid quantity");
        }

        return errors;
    }

    // Challenge: Calculate fees - needs multiple fee tiers
    public BigDecimal calculateFees(BigDecimal amount) {
        // Overly simple - should have tiered fees
        return amount.multiply(BigDecimal.valueOf(0.01));
    }

    // Challenge: Process transaction - needs proper state machine
    public Transaction processTransaction(Transaction transaction) {
        // No state validation, no idempotency
        transaction.setStatus(Transaction.TransactionStatus.COMPLETED);
        return transaction;
    }

    // Challenge: Generate transaction report - needs formatting
    public String generateReport(List<Transaction> transactions) {
        // Very basic - participants should improve
        return transactions.stream()
                .map(t -> t.getType() + ": " + t.getSymbol() + " x" + t.getQuantity())
                .collect(Collectors.joining("\n"));
    }

    // Challenge: Detect suspicious activity - needs pattern detection
    public boolean detectSuspiciousActivity(List<Transaction> transactions) {
        // Placeholder - needs real implementation
        return false;
    }
}
