var help = require("../.sys/test-help");

describe("", function() {

    help.importAndTest(__dirname, function(exported) {

      const BankAccount = exported.BankAccount;
      const BankAccountWithOverdraft = exported.BankAccountWithOverdraft;

      describe('BankAccount', function() {

        it('initialises balance', function() {
          const b = new BankAccount(100)
            
          assert.equal(b.balance(), 100);
        })

        it('allows deposits', function() {
          const b = new BankAccount(100)
          b.deposit(25)
            
          assert.equal(b.balance(), 125);
        })

        it('allows withdrawals', function() {
          const b = new BankAccount(100)
          b.deposit(-25)
            
          assert.equal(b.balance(), 75);
        })

        it('protects balance against overdraws', function() {
          const b = new BankAccount(100)
          assert.throws(function() {
            b.deposit(-250)
          }, /OutOfFunds/)
        })
        
      })

      describe('BankAccountWithOverdraft', function() {

        it('initialises balance', function() {
          const b = new BankAccountWithOverdraft(100)
            
          assert.equal(b.balance(), 100);
        })

        it('allows deposits', function() {
          const b = new BankAccountWithOverdraft(100)
          b.deposit(25)
            
          assert.equal(b.balance(), 125);
        })

        it('allows withdrawals', function() {
          const b = new BankAccountWithOverdraft(100)
          b.deposit(-25)
            
          assert.equal(b.balance(), 75);
        })

        it('allows withdrawals to overdraft limit', function() {
          const b = new BankAccountWithOverdraft(100, 100)
          b.deposit(-100)
          b.deposit(-100)
            
          assert.equal(b.balance(), -100);
        })

        it('protects balance against overdraws', function() {
          const b = new BankAccountWithOverdraft(100, 50)
          assert.throws(function() {
            b.deposit(-250)
          }, /OutOfFunds/)
        })
        
        it('shares functions between instances', function() {
          const a = new BankAccountWithOverdraft(100)
          const b = new BankAccountWithOverdraft(100)

          assert.equal(a.deposit, b.deposit);
        })

        it('shares functions with superclass', function() {
          const a = new BankAccountWithOverdraft(100)
          const b = new BankAccount(100)

          assert.equal(a.balance, b.balance);
        })
      })

      describe('BankAccountWithOverdraftViaPt', function() {
        const BankAccountWithOverdraftViaPt = exported.BankAccountWithOverdraftViaPt;

        it('initialises balance', function() {
          const b = new BankAccountWithOverdraftViaPt(100)
            
          assert.equal(b.balance(), 100);
        })

        it('allows deposits', function() {
          const b = new BankAccountWithOverdraftViaPt(100)
          b.deposit(25)
            
          assert.equal(b.balance(), 125);
        })

        it('allows withdrawals', function() {
          const b = new BankAccountWithOverdraftViaPt(100)
          b.deposit(-25)
            
          assert.equal(b.balance(), 75);
        })

        it('allows withdrawals to overdraft limit', function() {
          const b = new BankAccountWithOverdraftViaPt(100, 100)
          b.deposit(-100)
          b.deposit(-100)
            
          assert.equal(b.balance(), -100);
        })

        it('protects balance against overdraws', function() {
          const b = new BankAccountWithOverdraftViaPt(100, 50)
          assert.throws(function() {
            b.deposit(-250)
          }, /OutOfFunds/)
        })
        
        it('shares functions between instances', function() {
          const a = new BankAccountWithOverdraftViaPt(100)
          const b = new BankAccountWithOverdraftViaPt(100)

          assert.equal(a.deposit, b.deposit);
        })

        it('shares functions with superclass', function() {
          const a = new BankAccountWithOverdraftViaPt(100)
          const b = new BankAccount(100)

          assert.equal(a.balance, b.balance);
        })
      })

    });


});
