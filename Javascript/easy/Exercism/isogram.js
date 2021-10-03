// ## Instructions

// Determine if a word or phrase is an isogram.

// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.

// Examples of isograms:

// - lumberjacks
// - background
// - downstream
// - six-year-old

// The word _isograms_, however, is not an isogram, because the s repeats.

export const isIsogram = (str) => {
    return !/(\w).*\1/i.test(str)
};