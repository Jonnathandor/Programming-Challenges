// Return the index of the first non-repeating character in a given string. 
// If there are no non-repeating characters then return -1.

// Examples:

// s = "swecareers"
// return 1.
// s = "loveswecareers", return 0.

// Note: Assume the string only contains lowercase letters.

const firstUniqueChar = (s) => {
    const letters = {};
    //Creates the hashmap with the number of occurances 
    // of each letter
    for(let i = 0; i < s.length; i++){
        // adds the letter in sets the count to zer0
        if(!(s[i] in letters)) letters[s[i]] = 0; 
        letters[s[i]] += 1;
    }
    
    for(let i = 0; i < s.length; i++){ 
        // If the count is equal one ... we found the first non repreatable char
        if(letters[s[i]] === 1) return i;
    }
    
    return -1;
}