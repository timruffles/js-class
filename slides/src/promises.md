## Promises
{title:1}

## An IOU

- A value, returned immediately
- Fulfilled or rejected - once
- Use before or after resolved
- Chain together
- Flow control for async

## Intuition

![Promise chain](media/promises.png)


## Promises in practice

## Steps in process

- `.then(transformResolve, transformReject)`

```javascript
const user = getUser(params["id"]);
const profile = user.then(getProfile);
const accountPage = Promise.all([user,profile])
  .then(accountPageTemplate);
```

## Present/use value

- finally used more like callback

```javascript
accountPage.then(
  renderHtml,
  renderErrorMessage
);
```

## `then` is

- Mostly: recipe for new values
- Sometimes: actions when resolved

## Where?

- ES5: libraries
- ES6: built-in
- Libraries actually better


## Promise tools

```javascript
 // returns a promise, if x is:
 // - a non-promise, a fulfilled promise for 'x'
 // - a promise, that promise
Promise.resolve(x)

// a promise rejected with 'x'
Promise.reject(x)

// a promise for an array/object with all resolved
// promises values - works with all iterables
Promise.all([promise, value, promiseB, valueB])

// a promise for first resolved
Promise.race([promise, value, promiseB, valueB])
```
## Flow control

```javascript
SomeQuery
  .then(transform)
  .then(function(value) {
    if(!isOk(value)) {
      return Promise.reject(Error("Not ok!"))
    }

    return someTest(value)) ?
      QueryA(value) : QueryB(value);
  })
  .catch((err) => Promise.reject(Error("Query failed: " + err)))
  .finally(function() {
    // anything that happens if resolved/rejected
  });
```

## Rule: don't use promises as callbacks
{rule:1}

- unless you're applying side-effects

## Promises + collections

```javascript
var userIds = [10,20,30,50,100];

// array of promises
var users = userIds.map(User.get);

// promise for array of {user, account}
var usersWithAccounts = Promise.all(users)
  .then(function(users) {
    return users.map(function(user) {
      return Promise.all({
        user: user,
        account: Account.get(user)
      });
    });
  });
```

## Promises conclusion

- promises = values for async
- don't just use as callbacks
- think about transformers for the values
- chain promises flows together

## Let's try

- exercises/promises



