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

## Boolean

```javascript
var t = true;
```


## Quiz

```javascript
var FALSE = new Boolean(false);

if(FALSE) {
  console.log("A")
} else {
  console.log("B")
}
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

## `==` has issues

```javascript
var A = "\t\t\t\t\t \n \n \n" == false;

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

## `==`

1. Objects (non primitives): compares by identity, not value
1. Beyond that, very complex. Just use for `null` or `undefined`

