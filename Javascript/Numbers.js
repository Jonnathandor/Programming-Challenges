// Today I learned that Numbers is JavaScript are actually floating-point numbers. 
// and what on earth does that mean? it means that it is real difficult to 
// represent floats in computer science... so if you need really exact calculations...
// do not use javascript: https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html


/// From the article above 
// Floating-point Formats
// Several different representations of real numbers have been proposed, but by far the most widely used is the floating-point representation.1 Floating-point representations have a base  (which is always assumed to be even) and a precision p. If  = 10 and p = 3, then the number 0.1 is represented as 1.00 × 10-1. If  = 2 and p = 24, then the decimal number 0.1 cannot be represented exactly, but is approximately 1.10011001100110011001101 × 2-4.

// In general, a floating-point number will be represented as ± d.dd... d × e, where d.dd... d is called the significand2 and has p digits. More precisely ± d0 . d1 d2 ... dp-1 × e represents the number

// (1)  .
// The term floating-point number will be used to mean a real number that can be exactly represented in the format under discussion. Two other parameters associated with floating-point representations are the largest and smallest allowable exponents, emax and emin. Since there are p possible significands, and emax - emin + 1 possible exponents, a floating-point number can be encoded in


// bits, where the final +1 is for the sign bit. The precise encoding is not important for now.

// There are two reasons why a real number might not be exactly representable as a floating-point number. The most common situation is illustrated by the decimal number 0.1. Although it has a finite decimal representation, in binary it has an infinite repeating representation. Thus when  = 2, the number 0.1 lies strictly between two floating-point numbers and is exactly representable by neither of them. A less common situation is that a real number is out of range, that is, its absolute value is larger than  ×  or smaller than 1.0 ×  . Most of this paper discusses issues due to the first reason. However, numbers that are out of range will be discussed in the sections Infinity and Denormalized Numbers.

// Floating-point representations are not necessarily unique. For example, both 0.01 × 101 and 1.00 × 10-1 represent 0.1. If the leading digit is nonzero (d0  0 in equation (1) above), then the representation is said to be normalized. The floating-point number 1.00 × 10-1 is normalized, while 0.01 × 101 is not. When  = 2, p = 3, emin = -1 and emax = 2 there are 16 normalized floating-point numbers, as shown in FIGURE D-1. The bold hash marks correspond to numbers whose significand is 1.00. Requiring that a floating-point representation be normalized makes the representation unique. Unfortunately, this restriction makes it impossible to represent zero! A natural way to represent 0 is with 1.0 ×  , since this preserves the fact that the numerical ordering of nonnegative real numbers corresponds to the lexicographic ordering of their floating-point representations.3 When the exponent is stored in a k bit field, that means that only 2k - 1 values are available for use as exponents, since one must be reserved to represent 0.

// Note that the × in a floating-point number is part of the notation, and different from a floating-point multiply operation. The meaning of the × symbol should be clear from the context. For example, the expression (2.5 × 10-3) × (4.0 × 102) involves only a single floating-point multiplication.

// An easier article: https://0.30000000000000004.com/


// A number literal like 50 in JS is actually a floating-point value, and not an integer.

// The Number built-in global can be used as a global function as well. You can convert almost anything that looks like a number.
// However; It is not that firendly as parsing a string to a number. 

const date = new Date('December 17, 1995 03:24:00');
const unix = Number(date);

unix;
// => 819199440000