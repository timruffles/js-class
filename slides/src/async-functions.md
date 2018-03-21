## Async functions
{title:1}

## Promises are great but...

## Still not syntactically sweet

## Example problem

- retrieve a user by id
    - or send 404
- get profile using user, if present
    - update profile
    - or, create profile
- send 500 in case of any unexpected errors

## Promises

```javascript
function updateProfile(request, response) {
    getUser(params["id"])
        .then((user) => (
            if(!user) {
                return res.send(404);
            }

            return getProfile(user)
                .then(profile =>
                    profile
                    ? update(user, profile,
                        request.params)
                    : create(user, request.params)
                )
        ))
        .catch(() => response.send(500))
}
```

## Async functions

```javascript
async function updateProfile(request, response) {
    try {
        const user = await getUser(params["id"]);
        if(!user) {
            res.send(404);
        }

        const profile = await getProfile(user);
        return profile
            ? update(user, profile,
                request.params)
            : create(user, request.params)
    } catch(e) {
        response.send(500)
    }
}
```

## Syntax

```javascript
async function longForm() {}

const fatArrow = async () => {};

// ?
const returnValue = fatArrow()
```

## Async functions return promises

## e.g

```javascript
const getReddit = async (r) => fetch(`https://reddit.com/r/${r}.json`;

getReddit()
    .then(r => r.json())
    .then(
        b => console.log(b),
        e => console.error('fail', e)
    )
```

## Async composing with language!

```javascript
async function filterAsync(getPromises, predicate) {
    const promises = getPromises.map(f => f());
    const included = [];

    for(const promise of promises) {
       const value = await promise;
       if(predicate(value)) {
         included.push(value);
       }
    }

    return included;
}
```

## Shorter?

## Remember: promise knowledge still vital

```javascript
async function filterAsync(getPromises, predicate) {
    const promises = getPromises.map(f => f());
    const values = await Promise.all(promises);
    return values.filter(predicate);
}

// golfed :)
async function filterAsync(getPromises, predicate) {
    return (await Promise.all(getPromises.map(f => f())))
        .filter(predicate);
}
```

## What's the difference?

```javascript
// A
await usersPromise.update(params);

// B
(await userPromise).update(params);
```

## Exercise

    exercises/async-functions
