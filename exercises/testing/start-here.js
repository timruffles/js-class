// here is the function to test
import { showUserAction } from "./exercise";

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

