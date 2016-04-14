// test the below by:
//
// injecting a stub that returns a promise for a user
//
// and a mock with the following methods:
//
//   { send: function(reply) }
//
// 
//
export function showUserAction(getUser, res) {
  // You should NOT need to edit this function
  getUser()
    .then(function(user) {
      res.send(`<user>${user.name}</user>`);
    })
    .catch(function(err) {
      res.send(`<error>${err.message}</error>`);
    })
}
