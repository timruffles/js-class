// TODO
//
//   Implement a function that passes user to getAccount, and then
//   passes both the user and account into formatHtml. All errors
//   should be handled by formatError
//
//   formatUserOrError(
//     userPromise: Promise<user>,
//     getAccount: (user) => Promise<account>,
//     formatHtml: (user, account) => html: string,
//     formatError: (error) => html: string,
//  ): Promise<string>
//
export async function formatUserOrError(userPromise, getAccount, formatHtml, formatError) {
    try {
        const user = await userPromise;
        const account = await getAccount(user);
        return formatHtml(user, account);
    } catch(e) {
        return formatError(e);
    }

}