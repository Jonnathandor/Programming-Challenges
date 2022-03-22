/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
 export function timeToMixJuice(name) {
    switch(name) {
      case 'Energizer' || 'Green Garden':
        return 1.5;
      case 'Tropical Island':
        return 2.5;
      case 'All or Nothing':
        return 5;
      default:
        return 2.5;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    throw new Error('Please implement the limesToCut function');
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    throw new Error('Please implement the remainingOrders function');
  }