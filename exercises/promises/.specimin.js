// TODO 
//
//   implement a promise chain that threads userPromise to:
//
//     getAccount - retrieve the account
//
//   and thread user, account into `formatHtml`, ensuring you transform errors by returning `formatError`
//
//
//
//   handleUserPromise(
//     userPromise: Promise<user>,
//     getAccount: (user) => Promise<account>,
//     formatHtml: (user, account) => html: string,
//     formatError: (error, user, account) => html: string,
//  )
//
//
//
//
exports.formatUserOrError = function(userPromise, getAccount, formatHtml, formatError) {
  const accountPromise = userPromise
    .then(getAccount)

  return Promise.all([userPromise, accountPromise])
    .then(function([user, account]) {
      return formatHtml(user, account) 
    })
    .catch(function(err) {
      return formatError(err) 
    })
}
