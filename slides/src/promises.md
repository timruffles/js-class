## Promises
{title:1}


## Intuition

![Promise chain](media/promises.png)

## An IOU

- A value, available immediately
- Settled - resolved or rejected - once
- Use before or after settled

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

## Creating resolved promise

```javascript
Promise.resolve(x)
```

- returns a promise, if x is:
- a non-promise, a fulfilled promise for 'x'
- a promise, that promise

## Creating rejected

```
Promise.reject(Error("some description"))
```

- returns a rejected promise
- should always reject with `Error` for stacks

## Groups of promises

```
Promise.all([promise, value, promiseB, valueB])
```

- returns promise for an array with all resolved
- works with all iterables (`Array`, `Map` etc)

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

- until you're *doing* something (display etc)

## Promises + collections

```javascript
var userIds = [10,20,30,50,100];

// array of promises
var users = userIds.map(User.get);

// promise for array of [user, account]
var usersWithAccounts = Promise.all(users)
  .then(function(users) {
    return users.map(function(user) {
      return Promise.all([
        user,
        Account.get(user)
      ]);
    });
  });
```

## Promises conclusion

- promises = values for async
- don't just use as callbacks
- think chains of transformations

## Let's try

- exercises/promises



