## Promises
{title:1}

## An IOU

- A value, returned immediately
- Fulfilled or rejected - once
- Use before or after resolved
- Chain together

## Intuition

![Promise chain](media/promises.png)


## Promises in practice

- `.then()` with a function that accepts the value when it arrives
- `.then()` returns a new promise - for the return value of the function

```javascript
var user = getUser(params["id"]);
var profile = user.then(getProfile);
var accountPage = Promise.spread(user,profile).then(accountPageTemplate);

accountPage.then(
  renderToDom,
  renderErrorMessage
);
```


## `then` is either:

- An action to take when promise settles
- A recipe for a new promised value

## Where?

- ES5: libraries
- ES6: built-in
- Libraries actually better


## Promise tools

```javascript
 // returns a promise, if x is:
 // - a non-promise, a resolved promise for x
 // - a promise, that promise
Promise.resolve(x)

// a rejected promise
Promise.reject(x)

// a promise for an array/object with all resolved
// promises values - works with all iterables
Promise.all([promise, value, promiseB, valueB])

// a promise for first resolved
Promise.race([promise, value, promiseB, valueB])
```
## Promise flow control

```javascript
SomeQuery
  .then(transform)
  .then(function(value) {
    if(!isOk(value)) {
      return Promise.reject(Error("Not ok!"))
    }
    if(someTest(value)) {
      return QueryA(value)
    } else {
      return QueryB(value)
    }
  })
  .catch((err) => Promise.reject(Error("Our query failed: " + err)))
  .finally(function() {
    // anything that happens if resolved/rejected
  });
```

## Rule: don't use promises as callbacks
{rule:1}

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
