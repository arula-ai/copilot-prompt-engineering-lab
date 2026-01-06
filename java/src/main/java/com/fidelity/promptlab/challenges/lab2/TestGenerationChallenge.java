package com.fidelity.promptlab.challenges.lab2;

import com.fidelity.promptlab.models.Holding;

import java.math.BigDecimal;
import java.util.List;

/**
 * LAB 2 - LIBRARY PATTERNS: Test Generation
 *
 * Use prompt library patterns to generate comprehensive tests.
 *
 * Reference: prompt-library/testing/unit-test-suite.md
 *
 * Your task:
 * 1. Open the unit-test-suite.md pattern
 * 2. Adapt it for JUnit 5 and the calculateTotalValue method below
 * 3. Compare the generated tests to what you'd write manually
 */
public class TestGenerationChallenge {

    // Method to test
    public static BigDecimal calculateTotalValue(List<Holding> holdings) {
        return holdings.stream()
                .map(h -> h.getCurrentPrice().multiply(BigDecimal.valueOf(h.getQuantity())))
                .reduce(BigDecimal.ZERO, BigDecimal::add);
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
}
