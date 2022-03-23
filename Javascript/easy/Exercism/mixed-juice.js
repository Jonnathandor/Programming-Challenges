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
    // There is no point in executing the function 
    // if we do not need wedges or if we do not have limes
    if(wedgesNeeded === 0 || limes.length === 0){ return 0;}
    let limesCount = 0;
    const sizes = {
        small: 6,
        medium: 8,
        large: 10 
    };

    while(wedgesNeeded >= 0 && limesCount < limes.length){
        wedgesNeeded -= sizes[limes[limesCount]]
        limesCount++;
    }

    return limesCount;
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