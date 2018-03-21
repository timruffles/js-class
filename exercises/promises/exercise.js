// TODO
//
//   implement a promise chain that threads userPromise to getAccount - which retrieves the account
//   and thread both the user and account into `formatHtml`, ensuring you transform
//   all errors by returning `formatError`
//
//   formatUserOrError(
//     userPromise: Promise<user>,
//     getAccount: (user) => Promise<account>,
//     formatHtml: (user, account) => html: string,
//     formatError: (error) => html: string,
//  ): Promise<string>

//
export function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {
  // TODO return final promise
  // TODO thread userPromise through getAccount
  // TODO combine promises for formatHtml
  // TODO ensure all errors, from all sources, will end up at formatError
}
