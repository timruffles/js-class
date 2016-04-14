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
//     formatError: (error) => html: string,
//  )
//
export function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {

  // TODO return final promise
  // TODO thread userPromise through getAccount
  // TODO combine promises for formatHtml
  // TODO ensure all errors, from all sources, will end up at formatError
}
