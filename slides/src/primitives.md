## Primitives
{title: 1}

## Team primitive

1. `undefined`
1. `null`
1. booleans
1. numbers
1. strings
1. symbols

## Quite sophisticated

## e.g i18n

```javascript
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 20/12/2012, 03:00:00
console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' }));

// 1,023,942 - one million, 23 thousand, 924
(1023942).toLocaleString('en-GB', {useGrouping: true})
// 10,23,942 - 10 lakh, 23 thousand, 924
(1023942).toLocaleString('en-IN', {useGrouping: true})

// ￥123,457
console.log((123457).toLocaleString('ja-JP',
    { style: 'currency', currency: 'JPY' }))
```

<aside class=notes>
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    - https://en.wikipedia.org/wiki/Indian_numbering_system
</aside>

## Your friend: MDN

- [MDN](https://developer.mozilla.org)
    - now Mozilla, WC3, Google, Samsung co-project
- I prefix my searches "MDN ..."

## String
```javascript
const name = 'Tim';
const description = "It's saving escapes";

const complete = \`${name}: ${opinion}\`;
```

## Interpolation: `${}`

```javascript
const opinionOnEs6 = "much nicer";
const es6 = \`Interpolation: '${opinion}'\`;

const opinionOnEs5 = "looks ugly";
const es5 = "Interpolation: '" + opinion + "'";
```

## Template strings

```javascript
const es5Html = "<h1>Ugh</h1>" +
  "<p>This is horrid</p>";

const howMuch = "Much";

const html = \`
  <h1>Writing HTML with ES.Next</h1>
  <p>${howMuch} nicer</p>
\`;
```

## Can write expressions in templates

```javascript
const html = \`
  <h1>Zoo</h1>
  <p>Good ${isMorning ? 'morning' : 'day'}</p>
  <p>${ userSummary(user) }</p>
\`;
```

## Comparison
{subtitle:true}

## `==` has issues

```javascript
const A = "\t\t\t\t\t \n \n \n" == false;

if(A) {
  console.log("A was == false");
} else {
  console.log("A wasn't == false");
}
```

## Rule: always use `===`
{rule:1}

- Much clearer

## But *ONE* place to use `==`

## `null` & `undefined`

- A nuisance since 1995.
- I'd stick to `undefined`

## Handling `null` and `undefined`

```javascript
// undefined is not eqeqeq null
console.log(undefined === null); // false

if(x === null || x === undefined) {
  // what a chore!
}

if(x == null) {
  // equivalent, shorter, idiomatic
}
```

## Rule: use `== null`
{rule:1}

```javascript
const missing = x == null;
```

## `===`

1. Same type?
1. Same value?

1. Special cases: `NaN !== NaN`
1. Objects (non primitives): compares by identity, not value

## `==`

1. Objects (non primitives): compares by identity, not value
1. Beyond that, very complex. Just use for `null` or `undefined`

## Why `NaN !== NaN`?

## Because...

- 5 times spoon shouldn't equal two to the power of whale!

```javascript
// false, NaN, NaN
console.log(
    5 \* 'spoon' === Math.pow(2, '🐋'),
    5 \* 'spoon',
    Math.pow(2, '🐋'),
);
```

## Handling `NaN`

```javascript
// true
console.log(
    isNaN(5 * 'spoon'),
);
```

## Numbers

```javascript
// ?
console.log(0.1 + 0.2 === 0.3);
```

## Floats are imprecise

## Solution: use ints

```javascript
// round to nearest micropenny (millionth of a penny)
const microPenniesToPounds = (microPennies) => (
    // micro to pennies -> pennies to pounds
    microPennies / 1e6 / 100
);
```

## Or a library

## Casting to boolean

```javascript
const truthy = [];
const falsy = 0;

console.log(
    Boolean(truthy),
    Boolean(falsy),
    !!truthy,
    !!falsy,
);
```

