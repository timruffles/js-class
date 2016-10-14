// TODO
//
//   implement a promise chain that threads userPromise to:
//
//     getAccount - retrieve the account
//
//   and thread user, account into `formatHtml`, ensuring you transform
//   errors by returning `formatError`
//
//
//
//   handleUserPromise(
//     userPromise: Promise<user>,
//     getAccount: (user) => Promise<account>,
//
//     formatHtml: (user, account) => html: string,
//     formatError: (error) => html: string,
//  )
//
//
export function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {
  return Promise.all([
    userPromise,
    userPromise.then(getAccount),
  ])
  .then(([user,account]) => formatHtml(user,account))
  .catch(formatError)
}
