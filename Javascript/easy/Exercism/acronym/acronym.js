export const parse = (s) => {
  let acronym = '';
  const WORDS = s.replace(/[^a-zA-Z']+/g, ' ').split(' ');
  for(const WORD of WORDS){
    acronym += WORD[0].toUpperCase();
  }
  return acronym;
};

// [^a-zA-Z']: This is the character class, it matches any character that is not lowercase a-z, uppercase A-Z, or an apostrophe '.

// +: The plus sign specifies that the preceding character class must match one or more times.
// This means the regular expression will match one or more characters that are not letters or apostrophes.

// /g: This is the global flag, it specifies that the regular expression should search for all occurrences of the pattern, not just the first one.