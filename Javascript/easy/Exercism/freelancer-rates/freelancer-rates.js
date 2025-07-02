// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.

// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!

const DAILY_HOURS = 8;
const BILLABLE_DAYS = 22;

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * DAILY_HOURS;
}

/**
 * Calculates the total cost for a given number of days,
 * applying a discount to each full “month” (BILLABLE_DAYS),
 * and rounding up to the nearest dollar.
 *
 * @param {number} ratePerHour
 * @param {number} days         – total days you need to bill
 * @param {number} discount     – decimal form, e.g. 0.15 for 15%
 * @returns {number} rounded up total price
 */
export function priceWithMonthlyDiscount(ratePerHour, days, discount) {
  const daily = dayRate(ratePerHour);
  const fullMonths = Math.floor(days / BILLABLE_DAYS);
  const leftoverDays = days % BILLABLE_DAYS;

  // cost of full months, with discount applied
  const costMonths = fullMonths * BILLABLE_DAYS * daily * (1 - discount);

  // cost of any leftover days at full daily rate
  const costLeftover = leftoverDays * daily;

  return Math.ceil(costMonths + costLeftover);
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget the total budget
 * @param {number} ratePerHour the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (dayRate(ratePerHour)));
}

/**
 * Applies a discount to the value
 *
 * @param {number} value
 * @param {number} percentage for example 20% written as 0.2
 * @returns {number} the discounted value
 */
function applyDiscount(value, percentage) {
  return value * percentage;
}
