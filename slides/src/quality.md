## Quality
{title:1}

## Languages have gotchas

```javascript
var launch = new Boolean(false);

if(launch)
  console.log("launching missiles");
else
  console.log("phew");
  console.log("peace at last");

// what is output?
```

## ESLint

- linter: clarifies code
- blunts some of JS's nasty gotchas

## Try now

```sh
npm run lint:all

# per exercise
eslint exercises/some-exercise/exercise.js
```

## Running ESLint

- Editor plugins
- CLI:

```sh
npm install --global eslint@latest
eslint path/to/js
```
## Code style

```js
// brevity at all cost!
yes && doThing()
```

```js
if(yes) {
  doThing();
}
```

## Boring to debate!

## JSCS

- find (& fix) style deviations
- makes switching code-bases more plesant

## Try now

```sh
npm run style:all

# per exercise
npm install --global jscs@latest
jscs exercises/some-exercise/exercise.js

// boredom removal
jscs --fix exercises/some-exercise/exercise.js
```
