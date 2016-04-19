/* eslint no-undef: 0 */

// Exercise 1: TDD

// ONLY write code here once you have written a failing test



// Exercise 2: this time we're not TDD'ing

// test the below by:
//
// injecting a stub `getUser` that calls
// the callback with a user
//
// and a mock with the following methods:
//
//   { send: function(reply) }
//
//
//
export function showUserAction(getUser, res) {
  // You should NOT need to edit this function
  getUser(function (err, user) {
    if (err) {
      res.send('error: ' + err.message);
    } else {
      res.send(userPresenter(user));
    }
  });

}
