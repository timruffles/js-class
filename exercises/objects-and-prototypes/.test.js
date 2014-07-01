var help = require("../.sys/test-help");

describe("", function() {

    help.importAndTest(__dirname, function(exported) {

      describe('BankAccount', function() {
        const BankAccount = exported.BankAccount;

        it('initialises balance', function() {
          const b = BankAccount(100)
            
          assert.equal(b.balance(), 100);
        })

        it('allows deposits', function() {
          const b = BankAccount(100)
          b.deposit(25)
            
          assert.equal(b.balance(), 125);
        })

        it('allows withdrawals', function() {
          const b = BankAccount(100)
          b.deposit(-25)
            
          assert.equal(b.balance(), 75);
        })

        it('protects balance against overdraws', function() {
          const b = BankAccount(100)
          assert.throws(function() {
            b.deposit(-250)
          }, /OutOfFunds/)
        })
        
        it('creates functions per instances', function() {
          const a = BankAccount(100)
          const b = BankAccount(100)

          assert.notEqual(a.balance, b.balance);
        })

        it("doesn't use this", function() {
          assert.notMatch(exported.BankAccount + "", /\bthis\b/);
        });

      })

      describe('BankAccountWithThis', function() {
        const BankAccountWithThis = exported.BankAccountWithThis;

        it('initialises balance', function() {
          const b = new BankAccountWithThis(100)
            
          assert.equal(b.balance(), 100);
        })

        it('allows deposits', function() {
          const b = new BankAccountWithThis(100)
          b.deposit(25)
            
          assert.equal(b.balance(), 125);
        })

        it('allows withdrawals', function() {
          const b = new BankAccountWithThis(100)
          b.deposit(-25)
            
          assert.equal(b.balance(), 75);
        })

        it('protects balance against overdraws', function() {
          const b = new BankAccountWithThis(100)
          assert.throws(function() {
            b.deposit(-250)
          }, /OutOfFunds/)
        })
        
        it('shares functions between instances', function() {
          const a = new BankAccountWithThis(100)
          const b = new BankAccountWithThis(100)

          assert.equal(a.balance, b.balance);
        })
      })

      describe('BankAccountWithOverdraft', function() {
        const BankAccountWithOverdraft = exported.BankAccountWithOverdraft;

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
          const b = new exported.BankAccountWithThis(100)

          assert.equal(a.balance, b.balance);
        })
      })

    });


});
