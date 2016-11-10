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
//     formatHtml: (user, account) => html: string,
//     formatError: (error) => html: string,
//  )

// promiseMap( p: Promise<A>, t: (a: A) => B | Promise<B> ) => Promise<B>
// map( as: Array<A>, t: (a: A) => B )  => Array<B>
//
export function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {
  return Promise.all([
    userPromise,
    userPromise.then(getAccount)
  ])
    .then(([u,a]) => formatHtml(u,a))
    .catch(formatError);
}
