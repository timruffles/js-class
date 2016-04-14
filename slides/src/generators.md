## Generators
{title: true}

## Why?

## Custom iterators

- potentially infinite
- over your own data-structures

## Asynchronicity

- very powerful for creating flow control

## Iterators

```javascript
// over arrays
for(const v of values) {
}
for(const [index, v] of values.entries()) {
}

// over maps
for(const [k,v] of map.entries()) {
}
```

## Write your own!

```javascript
function *objectProperties(object) {
  const keys = Object.keys(object);
  for(const key of keys) {
    yield [key, object[key]];
  }
}

for(const [k, v] of objectProperties({a: 1, b: 2, c: 3})) {
  console.log(k, v);
}
```

## Woah!

## Baby steps: `*`

```javascript
// the '*' means we're a generator function
function *objectProperties(object) {
  // ...
}
```

## Baby steps: `yield`

```javascript
function *abc() {
  // yield returns a value to the caller (for ... of above)
  yield "a";
  yield "b";
  yield "c";
}
```

## Let's try!

TODO

## Asynchronicity

## Callbacks

```javascript
function cat(pathA, pathB, cb) {
  fs.readFile(pathA, function(err, fileA) {
    if(err) return cb(err);

    fs.readFile(pathB, function(err, fileB) {
      if(err) return cb(err);

      combine(fileA, fileB, cb);
    });
  })
}
```

## Promises

```javascript
function cat(pathA, pathB) {
  return Promise.all([
    fs.readFileAsync(pathA),
    fs.readFileAsync(pathB),
  ]).then([fileA, fileB]) => {
    return combine(fileA, fileB);  
  });
}
```

## But... can we do better?

## Yes!

```javascript
import async from "async-generator";

const cat = async(function *cat(pathA, pathB) {
  const readingA = fs.readFileAsync(pathA);

  const fileB = yield fs.readFileAsync(pathB);
  const fileA = yield readingA;

  return yield combine(fileA, fileB);  
});

cat.then(function(combined) {
  console.log(combined);
}); 
```

## OMG!

TODO a painting of a very happy person






