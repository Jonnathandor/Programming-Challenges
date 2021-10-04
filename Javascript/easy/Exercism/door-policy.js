// ## Introduction

// Strings are useful for holding data that can be represented in text form.
// There are two ways to access an individual character in a string.

// The first is the `charAt()` method:

// ```javascript
// 'cat'.charAt(1);
// // => "a"
// ```

// The other way is to treat a `string` as a list of characters, where individual characters correspond to a numerical index (starts at zero):

// ```javascript
// 'cat'[1];
// // => "a"
// ```

// Some of the most-used operations on strings are to check their `length` and to concatenate them using the `+` string operators.

// ```javascript
// 'cat'.length;
// // => 3

// 'I like' + ' ' + 'cats';
// // => "I like cats"
// ```

// ## Instructions

// A new poetry club has opened in town, and you're thinking of attending.
// Because there have been incidents in the past, the club has a very specific door policy which you'll need to master, before attempting entry.

// There are two doors at the poetry club, both are guarded.
// In order to gain entry, you'll need to work out the password of that day:

// **Front door**

// 1. The guard will recite a poem, one line at the time;
//    - You will have to respond with the appropriate letter.
// 2. The guard will tell you all the letters you've responded with at once;
//    - You need to format the letters as a capitalised word.

// For example, one of their favourite writers is Michael Lockwood, who's written the following _acrostic_ poem, which means that the first letter of each sentence form a word:

// ```text
// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// ```

// When the guard recites **Stands so high**, you'll respond **S**, when the guard recites **Huge hooves too**, you'll respond **H**.

// Finally the password you write down is `Shire`, and you'll get in.

// **Back door**

// In the back of the club you'll find the most renowned poets, which is like the VIP area.
// Because this is not for everyone, the back door process is a bit more convoluted.

// 1. The guard will recite a poem, one line at the time;
//    - You will have to respond with the appropriate letter.
// 2. The guard will tell you all the letters you've responded with at once, _but there are sometimes spaces after each sentence_:
//    - You need to format the letters as a capitalised word
//    - and ask nicely, by appending `, please`

// For example, the poem mentioned before is also _telestich_, which means that the last letter of each sentence form a word:

// ```text
// Stands so high
// Huge hooves too
// Impatiently waits for
// Reins and harness
// Eager to leave
// ```

// When the guard recites **Stands so high**, you'll respond **h**, when the guard recites **Huge hooves too**, you'll respond **o**.

// Finally the password you write down is `Horse, please`, and you can party with the renowned poets.

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */
 export function frontDoorResponse(blurb) {
    return blurb[0]
  }
  
  /**
   * Respond with the correct character, given the blurb, if this were said at
   * the back door.
   *
   * @param {string} blurb
   * @returns {string}
   */
  export function backDoorResponse(blurb) {
    blurb = blurb.trim();
    return blurb[blurb.length-1];
  }
  
  /**
   * Capitalizes a word, meaning only the first character is a capital, and the
   * remaining letters are lower case.
   *
   * @param {string} word
   * @returns {string}
   */
  function capitalize(word) {
    word = word.toLocaleLowerCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  /**
   * Give the password for the front-door, given the responses.
   *
   * @param {string} responses the responses
   * @returns {string} the password
   */
  export function frontDoorPassword(responses) {
    return capitalize(responses);
  }
  
  /**
   * Give the password for the back-door, given the responses.
   *
   * @param {string} responses the responses
   * @returns {string} the password
   */
  export function backDoorPassword(responses) {
    return capitalize(responses)  + ', please';
  }