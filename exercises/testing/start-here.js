// here is the function to test
import { userPresenter, showUserAction } from "./exercise";

// TODO using our TDD fail, code, pass loop, drive out userPresenter():
//
// - takes a user and returns a string
// - the returned string includes <span>
// - the returned string includes the user's name
// - throws an error if we don't pass something with a name
//
// remember: try to be strict with getting a failing test
// before deciding what code to write



describe("showUserAction", function() {

  this.timeout(50);

  it("showUserAction formats user", function(done) {
    // TODO only pass test when resMock.send is called with result string containing <user> tag
    const getUserStub = function() {
      // TODO return a resolved promise for a user like: { name: 'some name' }
    }
    const resMock = {
      send: function() {
        // TODO enforce the contract
      }
    }
    showUserAction(getUserStub, resMock);
  });

  it("showUserAction formats error", function(done) {
    // TODO only pass test when resMock.send is called with result string containing <error> tag
    const getUserStub = function() {
      // TODO return a rejected promise
    }
    const resMock = {
      send: function() {
        // TODO enforce the contract
      }
    }
    showUserAction(getUserStub, resMock);
  });

});

