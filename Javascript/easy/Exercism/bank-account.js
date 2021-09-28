// ## Instructions

// Simulate a bank account supporting opening/closing, withdrawals, and deposits
// of money. Watch out for concurrent transactions!

// A bank account can be accessed in multiple ways. Clients can make
// deposits and withdrawals using the internet, mobile phones, etc. Shops
// can charge against the account.

// Create an account that can be accessed from multiple threads/processes
// (terminology depends on your programming language).

// It should be possible to close an account; operations against a closed
// account must fail.

export class BankAccount {
    constructor() {
      this._balance;
      this._isOpen;
    }
  
    open() {
      if(!this._isOpen){
        this._balance = 0;
        this._isOpen = true;
      } else {
        throw new ValueError();
      }
    }
  
    close() {
      if(this._isOpen){
        this._isOpen = false;
      } else {
        throw new ValueError();
      }
  
    }
  
    deposit(amount) {
      if(this._isOpen && amount > 0){
        this._balance += amount
      } else {
        throw new ValueError();
      }
    }
  
    withdraw(amount) {
      if(this._isOpen && this.balance >= amount && amount > 0){
        this._balance -= amount;
      } else {
        throw new ValueError();
      }
    }
  
    get balance() {
      if(this._isOpen){
        return this._balance;
      } else {
        throw new ValueError();
      }
    }
  }
  
  export class ValueError extends Error {
    constructor() {
      super('Bank account error');
    }
  }
  