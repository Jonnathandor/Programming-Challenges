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
