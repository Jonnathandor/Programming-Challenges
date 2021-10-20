
const REST_OF_ADVICE = ' is clearly the better choice.'

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
    return kind === 'car' || kind === 'truck'
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  if(option1 < option2){ return option1 + REST_OF_ADVICE; }
  return option2 + REST_OF_ADVICE;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  let currentPrice = 0;
  if(age < 3){
    currentPrice = originalPrice * 0.8;
  } else if(age > 10){
    currentPrice = originalPrice * 0.5;
  } else {
    currentPrice = originalPrice * 0.7;
  } 

  return currentPrice;
}
