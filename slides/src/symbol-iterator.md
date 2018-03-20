## What extensions are already defined?

## Quite a few

- iteration
- regex methods
- spread

## Tip: only extension you'll want to write currently is `Symbol.iterator`

```javascript
const a = ['🐳'];
// '🐳'
for(const x of a) console.log(x)

delete Array.prototype[Symbol.iterator];

// TypeError: a is not iterable
for(const x of a) console.log(x)

// woohoo, we broke the language!
```