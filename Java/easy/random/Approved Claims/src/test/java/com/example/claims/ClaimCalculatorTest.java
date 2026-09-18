package com.example.claims;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ClaimCalculatorTest {
    private static final Instant UPDATED_AT = Instant.parse("2026-09-18T12:00:00Z");

    @Test
    void returnsEmptyMapWhenClaimsAreEmpty() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of();

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertTrue(result.isEmpty());
    }

    @Test
    void sumsApprovedClaimsForSameMember() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        Claim firstClaim = new Claim(
            "C1", "M101", new BigDecimal("10.00"), "APPROVED", UPDATED_AT
        );
        Claim secondClaim = new Claim(
            "C2", "M101", new BigDecimal("15.00"), "APPROVED", UPDATED_AT
        );
        List<Claim> claims = List.of(firstClaim, secondClaim);

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("25.00", result.get("M101"));
    }

    @Test
    void keepsTotalsSeparateWhenMembersAreInterleaved() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("10.00"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M202", new BigDecimal("40.00"), "APPROVED", UPDATED_AT),
            new Claim("C3", "M101", new BigDecimal("15.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(2, result.size());
        assertAmountEquals("25.00", result.get("M101"));
        assertAmountEquals("40.00", result.get("M202"));
    }

    @Test
    void skipsPendingClaimsAndProcessesApprovedClaims() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        Claim pendingClaim = new Claim(
            "C1", "M101", new BigDecimal("100.00"), "PENDING", UPDATED_AT
        );
        Claim approvedClaim = new Claim(
            "C2", "M101", new BigDecimal("50.00"), "APPROVED", UPDATED_AT
        );
        List<Claim> claims = List.of(pendingClaim, approvedClaim);

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("50.00", result.get("M101"));
    }

    @Test
    void skipsRejectedNullAndUnknownStatuses() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("100.00"), "REJECTED", UPDATED_AT),
            new Claim("C2", "M202", new BigDecimal("100.00"), null, UPDATED_AT),
            new Claim("C3", "M303", new BigDecimal("100.00"), "UNKNOWN", UPDATED_AT),
            new Claim("C4", "M404", new BigDecimal("100.00"), "approved", UPDATED_AT),
            new Claim("C5", "M101", new BigDecimal("25.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("25.00", result.get("M101"));
    }

    @Test
    void skipsNullAmountAndProcessesNextClaim() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", null, "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("25.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("25.00", result.get("M101"));
    }

    @Test
    void omitsMemberWhoseOnlyClaimHasZeroAmount() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("0.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertTrue(result.isEmpty());
    }

    @Test
    void omitsMemberWhoseOnlyClaimHasNegativeAmount() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("-10.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertTrue(result.isEmpty());
    }

    @Test
    void continuesAfterZeroAndNegativeAmounts() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("0.00"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M202", new BigDecimal("-10.00"), "APPROVED", UPDATED_AT),
            new Claim("C3", "M303", new BigDecimal("20.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("20.00", result.get("M303"));
    }

    @Test
    void skipsNullMemberIdAndProcessesNextClaim() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", null, new BigDecimal("100.00"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("20.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("20.00", result.get("M101"));
    }

    @Test
    void skipsEmptyMemberIdAndProcessesNextClaim() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "", new BigDecimal("100.00"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("20.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("20.00", result.get("M101"));
    }

    @Test
    void skipsWhitespaceMemberIdAndProcessesNextClaim() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", " \t ", new BigDecimal("100.00"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("20.00"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("20.00", result.get("M101"));
    }

    @Test
    void addsDecimalAmountsExactly() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("0.10"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("0.20"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert
        assertEquals(1, result.size());
        assertAmountEquals("0.30", result.get("M101"));
    }

    @Test
    void acceptsDifferentDecimalScalesWithoutRounding() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = List.of(
            new Claim("C1", "M101", new BigDecimal("10.0"), "APPROVED", UPDATED_AT),
            new Claim("C2", "M101", new BigDecimal("15.000"), "APPROVED", UPDATED_AT),
            new Claim("C3", "M202", new BigDecimal("0.001"), "APPROVED", UPDATED_AT)
        );

        // Act
        Map<String, BigDecimal> result = calculator.calculateTotalClaims(claims);

        // Assert: numeric equality, with no two-decimal rounding rule.
        assertEquals(2, result.size());
        assertAmountEquals("25.00", result.get("M101"));
        assertAmountEquals("0.001", result.get("M202"));
    }

    @Test
    void rejectsNullInputList() {
        // Arrange
        ClaimCalculator calculator = new ClaimCalculator();

        // Act and Assert: null input violates the documented caller contract.
        assertThrows(NullPointerException.class,
            () -> calculator.calculateTotalClaims(null));
    }

    @Test
    void rejectsNullClaimObject() {
        // Arrange: List.of rejects null elements itself, so use Arrays.asList.
        ClaimCalculator calculator = new ClaimCalculator();
        List<Claim> claims = Arrays.asList(
            new Claim("C1", "M101", new BigDecimal("25.00"), "APPROVED", UPDATED_AT),
            null
        );

        // Act and Assert: a missing object differs from an object with invalid fields.
        assertThrows(NullPointerException.class,
            () -> calculator.calculateTotalClaims(claims));
    }

    /**
     * This is our own test helper, not a built-in JUnit assertion.
     * BigDecimal.equals checks scale too; compareTo checks the numeric value.
     * For example, 25.0 and 25.00 should represent the same approved total.
     */
    private static void assertAmountEquals(String expectedAmount, BigDecimal actualAmount) {
        assertNotNull(actualAmount, "Expected a total for this member");
        BigDecimal expected = new BigDecimal(expectedAmount);
        assertEquals(0, expected.compareTo(actualAmount),
            "Expected amount " + expected.toPlainString()
                + " but was " + actualAmount.toPlainString());
    }
}
