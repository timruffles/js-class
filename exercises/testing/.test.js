
import { showUserAction } from "./exercise";
import help from "../.sys/test-help";

describe("showUserAction", function() {

    this.timeout(50);

    help.importAndTest(__dirname, function(exported) {

      describe('showUserAction', function() {

        it("showUserAction formats user", function(done) {
          const getUserStub = function() {
            return Promise.resolve({ name: "amy" });
          }
          const resMock = {
            send: function(result) {
              assert.match(result, /<user>/)
              done();
            }
          };
          showUserAction(getUserStub, resMock);
        });

        it("showUserAction formats error", function(done) {
          const getUserStub = function() {
            return Promise.reject(Error("fail"));
          }
          const resMock = {
            send: function(result) {
              assert.match(result, /<error>/)
              done();
            }
          };
          showUserAction(getUserStub, resMock);
        });
      
      })

    });
});
