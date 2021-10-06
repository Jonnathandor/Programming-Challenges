// ## Instructions

// Convert a phrase to its acronym.

// Techies love their TLA (Three Letter Acronyms)!

// Help generate some jargon by writing a program that converts a long name
// like Portable Network Graphics to its acronym (PNG).

export const parse = (s) => {
    let acronym = '';
    const WORDS = s.replace(/[^a-zA-Z']+/g, ' ').split(' ');
    for(const WORD of WORDS){
      acronym += WORD[0].toUpperCase();
    }
    return acronym;
};