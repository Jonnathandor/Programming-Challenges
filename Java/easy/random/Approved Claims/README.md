# Total Approved Claims per Member

A small Java 17 programming exercise for health and dental claims interview practice.
The implementation keeps the explicit loop, validation checks, and map updates
we practised. All example data is synthetic.

## Goal

Given a list of claims, return the total approved amount for each qualifying member.
Each claim contains `claimId`, `memberId`, `amount`, `status`, and `updatedAt`.
Use `BigDecimal` for both input amounts and totals.

## Required folder structure

Create a folder named `approved-claims-challenge` and place the files at these
paths relative to that folder:

| File | Location | Purpose |
| --- | --- | --- |
| `pom.xml` | `pom.xml` | Maven project, Java target, JUnit dependency, test runner |
| `README.md` | `README.md` | Setup instructions and exercise rules |
| `Claim.java` | `src/main/java/com/example/claims/Claim.java` | Input data model, constructor, getters |
| `ClaimCalculator.java` | `src/main/java/com/example/claims/ClaimCalculator.java` | Validation and totals |
| `ClaimCalculatorTest.java` | `src/test/java/com/example/claims/ClaimCalculatorTest.java` | JUnit tests |

The Java package is `com.example.claims` in all three Java files. Maven generates
the `target/` directory when building; you do not create it manually.

## Requirements and running the tests

- JDK 17 or newer, with Java 17 selected as the project language level.
- Apache Maven 3.9.x (verified with 3.9.9).
- Internet access for Maven to download dependencies on the first run.

Check your installed tools:

```sh
java -version
mvn -version
```

In a terminal, enter the project folder containing `pom.xml` and run:

```sh
mvn test
```

To rebuild from clean output:

```sh
mvn clean test
```

Run only the pending-claim example:

```sh
mvn '-Dtest=ClaimCalculatorTest#skipsPendingClaimsAndProcessesApprovedClaims' test
```

Maven compiles the production and test classes, then runs JUnit. A successful run
ends in `BUILD SUCCESS`; test reports appear under `target/surefire-reports/`.
You can also open `pom.xml` as a Maven project in your Java IDE and run
`ClaimCalculatorTest`. This exercise is executed through its tests, so no
`main` method is required.

## Verification

Verified on 2026-09-18 with OpenJDK 17.0.20 and Apache Maven 3.9.9:

```text
mvn clean test
Tests run: 16, Failures: 0, Errors: 0, Skipped: 0
BUILD SUCCESS
```

This confirms the delivered calculator and test sources compiled and that the
16 documented test scenarios passed in that environment.

## Business rules

| Input condition | Behavior |
| --- | --- |
| Status is exactly `APPROVED`, member ID is present, amount is positive | Include amount in that member's total |
| Amount is `null`, zero, or negative | Skip claim and continue |
| Member ID is `null`, empty, or whitespace-only | Skip claim and continue |
| Status is pending, rejected, null, unknown, or differently capitalized | Skip claim and continue |
| More qualifying claims for an existing member | Add to the existing total |
| Member has no qualifying claims | Omit member from the result |
| Empty input list | Return an empty map |

## Explicit assumptions

- Claim IDs are unique. `claimId` and `updatedAt` remain metadata; this version
  does not deduplicate records or select the latest claim version.
- All amounts use the same currency. No conversion is performed.
- Amounts are added exactly. The exercise defines no rounding or two-decimal
  storage rule, so even positive amounts with more decimal places are preserved.
- Member IDs match exactly. Nonblank IDs are not trimmed or case-normalized.
- Output order is unspecified because the result is a `HashMap`.
- The input list and every Claim object must be non-null. This is an explicit
  caller precondition added to resolve the previously open null-input question.
  `Objects.requireNonNull` throws `NullPointerException` with a clear message
  when it is violated. A Claim object with a null amount or member ID is
  different: those invalid fields cause that claim to be skipped.
- `Claim` stores input as supplied. Validation belongs to the calculator for
  this exercise, allowing the tests to construct invalid input records.

## How the algorithm works

1. Create an empty map of member IDs to totals.
2. Examine each claim once.
3. Skip claims that fail the amount, member ID, or approval checks.
4. Insert the first qualifying amount for a member; add later amounts to it.
5. Return the map after the loop finishes.

For `n` claims and `m` qualifying members, expected time is **O(n)** and
additional space, including the result map, is **O(m)**. This customary
interview analysis assumes average constant-time hash-map operations and
bounded-size IDs and monetary values. Arbitrarily large decimal values make
arithmetic cost depend on digit count. In the worst case, every claim has a
different member and `m = n`.

## Reading the tests

Start with these three methods in `ClaimCalculatorTest`:

1. `returnsEmptyMapWhenClaimsAreEmpty`
2. `sumsApprovedClaimsForSameMember`
3. `skipsPendingClaimsAndProcessesApprovedClaims`

Each follows Arrange (prepare input), Act (call the real method), and Assert
(check expected behavior). The remaining tests cover interleaved members,
rejected/null/unknown statuses, invalid amounts, missing member IDs, exact
decimal addition, different decimal scales, and the null-input preconditions.

For the pending example, the input is 100.00 PENDING followed by 50.00 APPROVED
for M101. The result must contain exactly one entry: M101 -> 50.00. Putting the
pending claim first also catches accidentally returning from the method when
we intended to continue the loop.

## BigDecimal: the last comparison detail

`new BigDecimal("25.0").equals(new BigDecimal("25.00"))` is false because
`equals` compares both value and decimal scale. `compareTo` returns zero when
the numeric amounts are equal, regardless of those different scales.

Our earlier `assertEquals(new BigDecimal("25.00"), result.get("M101"))` works
for inputs whose sum has exactly that scale. The completed tests use our own
`assertAmountEquals` helper to check the business amount without requiring a
particular number of trailing zeros:

```java
assertAmountEquals("25.00", result.get("M101"));
```

The helper first checks for a missing result, constructs the expected decimal
from a string, and uses JUnit's `assertEquals(0, expected.compareTo(actual))`.
The helper is defined at the bottom of the test class. It is not a JUnit API.

Construct example amounts from decimal strings. `BigDecimal` is immutable:
`add` returns a value that must be stored, and `put` updates the map entry.

## Optional learning exercise after the passing run

In a local copy, change the status guard's `continue` to `return totals`.
Run only the pending-claim test. It should fail because processing stops before
the approved claim. Restore the line to `continue`, then run the suite again.

## Interview explanation

I iterate through the claims once, skip records that do not meet the validation
and approval rules, and accumulate a BigDecimal total in a map keyed by member
ID. The first claim creates the entry; later claims update it. I return only
members with qualifying claims. Expected time is O(n), with O(m) space for the
member totals. The tests check grouping, filtering, continuation, and decimal
accuracy, using the agreed input assumptions.

## References

- [JUnit 5.10.2 User Guide](https://docs.junit.org/5.10.2/user-guide/index.html)
- [Java 17 BigDecimal documentation](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/math/BigDecimal.html)
- [Maven Surefire 3.2.5 JUnit Platform support](https://maven.apache.org/surefire-archives/surefire-3.2.5/maven-surefire-plugin/examples/junit-platform.html)
