## Variables
{title:1}

## Two ages

- Pre-ES.next: `var
- Post: `let`, `const`

## `var`

```javascript
var someVariable;
var anotherVariable = "hello";
```

## `undefined` vs undeclared

```javascript
var notDefined;

console.log(notDefined); // ?
```

## Undeclared

```javascript
var someVar;

console.log(smeVar); // typo, what happens??
```

## Primitives
{title: 1}

## String
```javascript
var name = 'Tim';
var opinion = "Double quotes: they're worth it";

var complete = `${name}: ${opinion}`;
```

## Template strings

```javascript
var complete = `${name}: ${opinion}`;

var es5Html = "<h1>Ugh</h1>" +
  "<p>This is horrid</p>";

var html = `
  <h1>Writing HTML with ES.Next</h1>
  <p>Much nicer</p>
`;
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

// NOOOOOOOOOO - never wrap primitives
var evil = new Boolean(false);
```

## `undefined` and `null`

```javascript
var x; // ?

var y = null;
```

## `null` & `undefined`

A nuisance since 1995.
