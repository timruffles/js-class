
// TODO write a BankAccount class that implements the following:
//
//   BankAccount(balance)
//
//   .deposit(n)
//      increases/reduces balance
//      throws OutOfFunds if negative deposit would go below 0
//
//   .balance(n)
//      returns balance
export class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  deposit(n) {
    if(this._balance + n < 0) {
      throw new Error("OutOfFunds");
    }
    this._balance += n;
  }

  balance() {
    return this._balance;
  }
}

// TODO using class, sub-class BankAccount to create a BankAccountWithOverdraft
// which allows balance to go below 0, but only
// as low as the overdraft allows. The API is:
//
//   BankAccountWithOverdraft(balance: number, overdraft: number)
//
//   deposit(n)
//
//      will allow withdraws to -overdraft, then throws `OutOfFunds`

export class BankAccountWithOverdraft extends BankAccount {
  constructor(balance, overdraft = 0) {
    super(balance);
    this._overdraft = overdraft;
  }

  deposit(n) {
    if(this._balance + n < -this._overdraft) {
      throw new Error("OutOfFunds");
    }

    this._balance += n;
  }
}




// TODO using prototypes, create a BankAccountWithOverdraft
// which allows balance to go below 0, but only
// as low as the overdraft allows. The API is:
//
//   BankAccountWithOverdraft(balance: number, overdraft: number)
//
//   deposit(n)
//  
//      will allow withdraws to -overdraft, then throws `OutOfFunds`
export function BankAccountWithOverdraftViaPt(balance, overdraft) {
  // TODO interesting - interop question
  BankAccount.call(this, balance);
  this._overdraft = overdraft;
}

BankAccountWithOverdraftViaPt.prototype = Object.create(BankAccount.prototype);

Object.assign(BankAccountWithOverdraftViaPt.prototype, {
  deposit: function(n) {
    if(this._balance + n < -this._overdraft) {
      throw new Error("OutOfFunds");
    }

    this._balance += n;
  },
});
