## Primitives
{title: 1}

## String
```javascript
var name = 'Tim';
var description = "It's saving escapes";

var complete = \`${name}: ${opinion}\`;
```


## Interpolation: `${}`

```javascript
var opinionOnEs6 = "much nicer";
var es6 = \`Interpolation: '${opinion}'\`;

var opinionOnEs5 = "looks ugly";
var es5 = "Interpolation: '" + opinion + "'";
```

## Template strings

```javascript
var es5Html = "<h1>Ugh</h1>" +
  "<p>This is horrid</p>";

var howMuch = "Much";

var html = \`
  <h1>Writing HTML with ES.Next</h1>
  <p>${howMuch} nicer</p>
\`;
```

## `Number`

```javascript
var floaty = 1;

var floatsAreApproximate = 0.1 + 0.2; // ?
```

## Boolean

```javascript
var t = true;
```

## Quiz: truthy vs falsy

```javascript
var empty = Boolean(""); // true

Boolean("hello"); // ?

Boolean(0); // ?
Boolean(1); // ?
Boolean(7); // ?

Boolean(true); // ?
```


## Quiz

```javascript
var booly = new Boolean(false);

Boolean(booly);
```

## Rule: never wrap primitives
{rule:1}

```javascript
// ARRRRRGGGHHHH!!!!!
var x = new String("");
var 1 = new Number("");
```

## Rule: use `Boolean`
{rule:1}

```javascript
var x = "";
var coerced = Boolean(x);

// yes, you understand it, but does everyone?
var shortCoerce = !!x;

// NOOOOOOOOOO - never wrap primitives
var evil = new Boolean(false);
```

## `undefined` and `null`

```javascript
var x; // ?

var y = null;
```

## `null` & `undefined`

- A nuisance since 1995.
- I'd stick to `undefined`

## Comparison
{subtitle:true}

## Yes `==` has issues

## Rule: always use `===`
{rule:1}

## But *ONE* place to use `==`

## Handling `null` and `undefined`

```
var undefinedNotEqeqeqNull = undefined === null; // false

if(x === null || x === undefined) {
  // what a chore!
}

if(x == null) {
  // equivalent, shorter, nicer
}
```

## Rule: use `== null`
{rule:1}

```javascript
var nullish = x == null;
```

## `===`

1. Same type?
1. Same value?

1. Special cases: `NaN !== NaN`
1. Objects (non primitives): compares by identity, not value

