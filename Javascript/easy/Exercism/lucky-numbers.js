/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
 export function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''));
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean}  whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    return String(value) === String(value).split('').reverse().join('');
  }