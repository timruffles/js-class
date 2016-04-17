// TODO write a bank account using closures (no prototype, `this` or `new`)
// that implements the following:
//
//   BankAccount(balance)
//      returns new instance, with provided balance
//
//   .deposit(n)
//      increases/reduces balance
//      throws OutOfFunds if negative deposit would go below 0
//
//   .balance(n)
//      returns balance
//
//
export function BankAccount(balance) {
}



// TODO reimplement BankAccount as a constructor
// designed to be used with `new` & `this` -
// ensuring you share `balance` and `deposit` between
// all instances
export function BankAccountWithThis(balance) {
}

// TODO implement sharing via prototypes

// TODO using prototypes, create a BankAccountWithOverdraft
// which allows balance to go below 0, but only
// as low as the overdraft allows. The API is:
//
//   BankAccountWithOverdraft(balance: number, overdraft: number)
//
//   deposit(n)
//
//      will allow withdraws to -overdraft, then throws `OutOfFunds`
export function BankAccountWithOverdraft(balance, overdraft) {
}

// TODO create inheritance relation

exports.BankAccountWithOverdraft = BankAccountWithOverdraft;
