package com.example.claims;

import java.math.BigDecimal;
import java.time.Instant;

/**
 * One input claim. Invalid field values can be represented here so that
 * ClaimCalculator can apply the challenge's skip-invalid-claims rules.
 */
public final class Claim {
    private final String claimId;
    private final String memberId;
    private final BigDecimal amount;
    private final String status;
    private final Instant updatedAt;

    public Claim(
        String claimId,
        String memberId,
        BigDecimal amount,
        String status,
        Instant updatedAt
    ) {
        this.claimId = claimId;
        this.memberId = memberId;
        this.amount = amount;
        this.status = status;
        this.updatedAt = updatedAt;
    }

    public String getClaimId() {
        return this.claimId;
    }

    public String getMemberId() {
        return this.memberId;
    }

    public BigDecimal getAmount() {
        return this.amount;
    }

    public String getStatus() {
        return this.status;
    }

    public Instant getUpdatedAt() {
        return this.updatedAt;
    }
}
