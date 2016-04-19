
import help from "../.sys/test-help";

describe("showUserAction", function() {

    this.timeout(50);

    help.importAndTest(__dirname, function(exported) {

      describe("userPresenter", function() {
        let string;
        beforeEach(function() {
          string = exported.userPresenter({
            name: "Alice",
          })
        })

        it("outputs a string", function() {
          assert.isString(string, /Alice/);
        })

        it("formats a user with a span", function() {
          assert.match(string, /span/);
        })

        it("outputs user name", function() {
          assert.match(string, /Alice/);
        })

        it("throws if not passed a user", function() {
          assert.throws(function() {
            exported.userPresenter(1)
          })
        })

          
      })

      describe('showUserAction', function() {

        const showUserAction = exported.showUserAction;

        it("showUserAction formats user", function(done) {
          const getUserStub = function(cb) {
            cb(null, { name: "amy" });
          }
          const resMock = {
            send: function(result) {
              assert.match(result, /<span>/)
              done();
            }
          };
          showUserAction(getUserStub, resMock);
        });

      
      })

    });
});
