package com.fidelity.promptlab.services;

import com.fidelity.promptlab.models.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Service for Lab 2 exercises.
 * Participants will generate better versions of these methods using library patterns.
 */
public class PortfolioService {

    private final Map<String, Portfolio> portfolios = new HashMap<>();
    private final Map<String, List<Transaction>> transactions = new HashMap<>();

    public Optional<Portfolio> getPortfolio(String portfolioId) {
        return Optional.ofNullable(portfolios.get(portfolioId));
    }

    public List<Portfolio> getPortfoliosByUser(String userId) {
        return portfolios.values().stream()
                .filter(p -> p.getUserId().equals(userId))
                .collect(Collectors.toList());
    }

    // Challenge: Calculate total value across all holdings
    // This is intentionally simplistic for participants to improve
    public BigDecimal calculateTotalValue(List<Holding> holdings) {
        BigDecimal total = BigDecimal.ZERO;
        for (Holding h : holdings) {
            total = total.add(h.getCurrentPrice().multiply(BigDecimal.valueOf(h.getQuantity())));
        }
        return total;
    }

    // Challenge: No caching, no retry, no error handling
    public Map<String, BigDecimal> fetchMarketPrices(List<String> symbols) {
        // Simulated API call
        Map<String, BigDecimal> prices = new HashMap<>();
        Random random = new Random();
        for (String symbol : symbols) {
            prices.put(symbol, BigDecimal.valueOf(random.nextDouble() * 1000));
        }
        return prices;
    }

    // Challenge: No transaction validation
    public Transaction recordTransaction(Transaction transaction) {
        String id = UUID.randomUUID().toString().substring(0, 7);
        transaction.setId(id);

        List<Transaction> existing = transactions.getOrDefault(
                transaction.getPortfolioId(), new ArrayList<>());
        existing.add(transaction);
        transactions.put(transaction.getPortfolioId(), existing);

        return transaction;
    }

    // Challenge: Performance issues with large portfolios
    public List<Transaction> getTransactionHistory(
            String portfolioId,
            LocalDateTime startDate,
            LocalDateTime endDate) {

        List<Transaction> all = transactions.getOrDefault(portfolioId, new ArrayList<>());

        // Inefficient filtering
        return all.stream()
                .filter(t -> {
                    if (startDate != null && t.getExecutedAt().isBefore(startDate)) return false;
                    if (endDate != null && t.getExecutedAt().isAfter(endDate)) return false;
                    return true;
                })
                .collect(Collectors.toList());
    }
}
