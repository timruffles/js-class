var help = require("../.sys/test-help");
const _ = require("lodash");

describe("promises", function() {

  this.timeout(150);

    help.importAndTest(__dirname, function(exported) {

      const fn = exported.formatUserOrError;

      var user;
      var account;
      var getAccount

      beforeEach(function() {
        user = {name: help.rstring()}
        getAccount = function(user) {
          account = { forUser: user.name, type: help.rstring() }
          return new Promise(function(resolve) {
            setTimeout(resolve, 5, account);
          })
        }
      })

      it("returns promise", function() {
        const p = fn(Promise.resolve(user), getAccount, formatHtml, formatError)

        assert.isDefined(p);
        assert.isFunction(p.then, "returned non-promise");
      });

      it("handles happy path where user and getAccount fulfil promises", function(done) {
        fn(Promise.resolve(user), getAccount, formatHtml, formatError)
          .then(function(r) {
            assert.equal(r, formatHtml(user, account));

            done();
          }, function() {
            done(Error("should have handled all errors in catch, but rejected with " + e)); 
          });
      });

      it("handles failures to retrieve user (user promise rejects)", function(done) {
        const err = Error("Error:" + help.rint());

        fn(Promise.reject(err), getAccount, formatHtml, formatError)
          .then(function(r) {
            assert.equal(r, formatError(err));

            done();
          }, function() {
            done(Error("should have handled all errors in catch, but rejected with " + e)); 
          });
      });

      it("handles failures to retrieve account (getAccount return promise that rejects)", function(done) {
        const err = Error("Can't find user: " + help.rint());

        fn(Promise.resolve(user), _.constant(Promise.reject(err)), formatHtml, formatError)
          .then(function(r) {
            assert.equal(r, formatError(err));

            done();
          }, function() {
            done(Error("should have handled all errors in catch, but rejected with " + e)); 
          });
      });

      function formatHtml(user, account) {
        return `<user>${user.name}</user><account>${account.type}</account>`;
      }

      function formatError(err) {
        return `<error>${err.message}</error>`;
      }


    });


});
