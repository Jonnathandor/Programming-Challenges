// Return the index of the first non-repeating character in a given string. 
// If there are no non-repeating characters then return -1.

// Examples:

// s = "swecareers"
// return 1.
// s = "loveswecareers", return 0.

// Note: Assume the string only contains lowercase letters.

const firstUniqueChar = (s) => {
    const letters = {};
    for(let i = 0; i < s.length; i++){
        if(!(s[i] in letters)) letters[s[i]] = 0;
        letters[s[i]] += 1;
    }
    
    for(let i = 0; i < s.length; i++){
        if(letters[s[i]] === 1) return i;
    }
    
    return -1;
}