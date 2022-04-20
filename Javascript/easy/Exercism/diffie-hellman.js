// ## Instructions

// Diffie-Hellman key exchange.

// Alice and Bob use Diffie-Hellman key exchange to share secrets. They
// start with prime numbers, pick private keys, generate and share public
// keys, and then generate a shared secret key.

// ## Step 0

// The test program supplies prime numbers p and g.

// ## Step 1

// Alice picks a private key, a, greater than 1 and less than p. Bob does
// the same to pick a private key b.

// ## Step 2

// Alice calculates a public key A.

//     A = g**a mod p

// Using the same p and g, Bob similarly calculates a public key B from his
// private key b.

// ## Step 3

// Alice and Bob exchange public keys. Alice calculates secret key s.

//     s = B**a mod p

// Bob calculates

//     s = A**b mod p

// The calculations produce the same result! Alice and Bob now share
// secret s.

// ## Source

// ### Created by

// - @matthewmorgan

export class DiffieHellman {
    constructor(p, g) {
      if(p < 1 || p > 9999 || g < 1 || g > 9999) throw Error('Out of range');
      if(p % 2 === 0 || g % 2 === 0) throw Error('The arguments are not prime numbers');
    }
}