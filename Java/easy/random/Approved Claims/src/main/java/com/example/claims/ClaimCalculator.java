package com.example.claims;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

public final class ClaimCalculator {

    /**
     * Returns approved totals for members with at least one qualifying claim.
     * Invalid fields and all statuses other than exactly APPROVED are skipped.
     *
     * Assumptions: claim IDs are unique, all amounts share a currency, and
     * member IDs are matched exactly. No rounding or sorting is performed.
     * claimId and updatedAt are metadata; no deduplication is performed.
     *
     * @param claims a non-null list containing non-null Claim objects
     * @return a new map of member IDs to BigDecimal totals
     * @throws NullPointerException if the list or any Claim object is null
     */
    public Map<String, BigDecimal> calculateTotalClaims(List<Claim> claims) {
        Objects.requireNonNull(claims, "claims must not be null");
        final Map<String, BigDecimal> totals = new HashMap<>();

        for (Claim claim : claims) {
            Objects.requireNonNull(claim, "claims must not contain null elements");

            if (claim.getAmount() == null) {
                continue;
            }

            if (claim.getAmount().compareTo(BigDecimal.ZERO) <= 0) {
                continue;
            }

            if (claim.getMemberId() == null || claim.getMemberId().isBlank()) {
                continue;
            }

            if (!"APPROVED".equals(claim.getStatus())) {
                continue;
            }

            if (!totals.containsKey(claim.getMemberId())) {
                totals.put(claim.getMemberId(), claim.getAmount());
            } else {
                BigDecimal currentTotal = totals.get(claim.getMemberId());
                BigDecimal updatedTotal = currentTotal.add(claim.getAmount());
                totals.put(claim.getMemberId(), updatedTotal);
            }
        }

        return totals;
    }
}
