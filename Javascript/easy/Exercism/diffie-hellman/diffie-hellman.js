export class DiffieHellman {
  #modulus;
  #base;

  constructor(p, g) {
    if(p < 1 || p > 9999 || g < 1 || g > 9999) throw Error('Out of range');
    if(p % 2 === 0 || g % 2 === 0) throw Error('The arguments are not prime numbers');
    this.#modulus = p;
    this.#base = g; 
  }

  getPublicKey(privateKey) {
    if(privateKey <= 1 || privateKey >= this.#modulus) throw Error('invalid key');
    return (this.#base ** privateKey) % this.#modulus;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.#modulus;
  }
}
