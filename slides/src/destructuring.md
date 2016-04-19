## Destructuring
{title:1}

## Syntax

```javascript
var a, b, rest;
[a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2

[a, b, ...rest] = [1, 2, 3, 4, 5]
console.log(a) // 1
console.log(b) // 2
console.log(rest) // [3, 4, 5]

({a, b} = {a:1, b:2})
console.log(a) // 1
console.log(b) // 2

({a, b, ...rest} = {a:1, b:2, c:3, d:4}) //ES7 
```
## Description 

The object and array literal expressions provide an easy way to create *ad hoc* package of data.

```javascript
var x = [1, 2, 3, 4, 5]
```

The destructuring assignment uses similar syntax, but on the left-hand side of the assignment to define what elements to extract from the sourced variable.

```javascript
var x = [1, 2, 3, 4, 5]
var [y, z] = x
console.log(y); // 1
console.log(z); // 2
```

## Arrray destructuring

### Basic variable assignment

```javascript
var foo = ["one", "two", "three"];

var [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"
```

### Assignment separate from declaration

```javascript
var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
```
### Default values

```javascript
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7
```

### Swapping variables

```javascript
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

### Parsing an array returned from a function

```javascript
function f() {
  return [1, 2];
}

var a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2
```

### Ignoring some returned values

```javascript
function f() {
  return [1, 2, 3];
}

var [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

[,,] = f(); // ignore all returned values
```

## Object destructuring

### Basic assignment

```javascript
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```

### Assignment without declaration

```javascript
var a, b;

({a, b} = {a:1, b:2});
```

### Assigning to new variable names

```javascript
var o = {p: 42, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 42 
console.log(bar); // true  
```

### Default values

```javascript
var {a=10, b=5} = {a: 3};

console.log(a); // 3
console.log(b); // 5
```

### Setting a function parameter's default value

- ES5 version
```javascript
function drawES5Chart(options) {
  options = options === undefined ? {} : options;
  var size = options.size === undefined ? 'big' : options.size;
  var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
  var radius = options.radius === undefined ? 25 : options.radius;
  console.log(size, cords, radius);
  // now finally do some chart drawing
}

drawES5Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

- ES6 version
```javascript
function drawES6Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
  console.log(size, cords, radius);
  // do some chart drawing
}

// In Firefox, default values for destructuring assignments are not yet implemented (as described below). 
// The workaround is to write the parameters in the following way:
// ({size: size = 'big', cords: cords = { x: 0, y: 0 }, radius: radius = 25} = {})

drawES6Chart({
  cords: { x: 18, y: 30 },
  radius: 30
});
```

### Module (non-ES6) loading

```javascript
const { Loader, main } = require('toolkit/loader');
```

### Nested object and array destructuring

```javascript
var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
```

### For of iteration and destructuring

```javascript
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"
```

### Pulling fields from objects passed as function parameter

```javascript
function userId({id}) {
  return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
  console.log(displayName + " is " + name);
}

var user = { 
  id: 42, 
  displayName: "jdoe",
  fullName: { 
      firstName: "John",
      lastName: "Doe"
  }
};

console.log("userId: " + userId(user)); // "userId: 42"
whois(user); // "jdoe is John"
```

### Computed object property names and destructuring

```javascript
let key = "z";
let { [key]: foo } = { z: "bar" };

console.log(foo); // "bar"
```

## Exercise

    exercise/destructuring


