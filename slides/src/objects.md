## Objects
{title:1}


## EverythingIsAnObject... ?

```javascript
var iAmAnObject = {};

var soAmI = 5;
soAmI.toFixed(2);

var meToo = "goo";
meToo.join("since I have methods");

var imAnObject = [];
```

## 'Object' is overloaded

## Definitions in JS

- everything that isn't `null`/`undefined`
- empty objects used as key-value stores
- things that have functions in them that reference 'this'

## So which is it?

## None of the above
{bad:1}

## Let's ask Alan Kay

> OOP to me means only messaging, local retention and hiding of state, and extreme late-binding of all things.

Alan Kay

## So what do Alan Kay's objects look like?

##    
{notitle:1}

![technical diagram of OOP](media/objects.png)

## Messaging & late-binding

- component sends a message
- another components receives and does... whatever it likes

## Results of messaging

- decouples intent from implementation (polymorphism)
- can't see/modify state of receiver

## What the hell are objects?

## 'Objects' are a pattern

- not the specific implementation

## Alan Kay's objects are

- entities that accept messages
- that access hidden state
- and do something in response to the message

## Implementations
{title:1}

## What do we need?

- identity
- state
- messages

## Without additional syntax

## Objects via closures
{notitle:1}

```javascript
// what technique is being used?

function Counter() {
  var count = 0;

  return {
    increment: () => {
      count += 1;
    },
    count: () => count,
  };
}


const c1 = counter();
const c2 = counter();

c1.increment();
c1.count(); // 1
c2.count(); // 0
```

## Issue

```javascript
var n = 1e6;
const counters = [];

// lots of copies of \`increment\` and \`count\`!
while(n--) {
  counters.push(Counter());
}
```

## Examples where this matters

- Arrays
- Element - DOM
- Promise
- Function
- all will have 1,000s of instances

## How do we share implementations?

## Closures not enough
{bad:1}

## Language level help!

```javascript
this
```

## `this` on invocation
{code:1}

```javascript
function couter() {
  return {
    // same fn for all instances!
    increment: counterIncrement,
    count: 0, 
  };
}

var c1 = counter();
var c2 = counter();

c1.increment();
c2.count; // 0

function counterIncrement() {
  this.count += 1;
} 
```

## Magic argument `this`

```javascript
// this = someObject
someObject.someProperty();

const someProperty = this.someObject;

// this = enclosing this, likely global
someProperty();
```

## Classic bug
{code:1}

```javascript
var someObject = {
  name: "lil' listeny",
  listen: function(el) {
    el.addEventListener("click", this.handle)
  },
  handle: function() {
    console.log(this.name);
  },
};

// what do we see console.log'd?
someObject.listen(button);
button.click();
```

## How can we fix?

## `=>`
{code:1}

```javascript
var someObject = {
  // ...
  listen: function(el) {
    // fat arrow has lexical this! i.e this of current scope
    el.addEventListener("click", (e) => this.handle(e))
  },
  // ...
};
```

## `fn.bind(thisValue)`
{code:1}

```javascript
var someObject = {
  // ...
  listen: function(el) {
    // .bind returns a new fn, as if bound to this via closure
    el.addEventListener("click", this.handle.bind(this))
  },
  // ...
};
```

## Writing `bind`

```javascript
function bind(fn, thisValue) {
  return function() {
    return fn.apply(thisValue, arguments);
  }
}
```

## Enough?

## Nope
{bad:1}

## e.g

```javascript
const el = document.querySelector("*");

console.log(_.keys(el).length) // 72!

document.querySelectorAll("*") // 1,002 for bbc.co.uk

// need to track per object
el.myCustomMethod = () => 1
```

## Costly to assume all objects different

## Want: flexibility and efficency

## Solution: prototypes!

##    
{notitle:1}

<img src="media/prototypes.png">

## Additional benefit

- some things modelled in chain
- e.g store common tools at `Object`

## Chain

<img src="media/prototype-chain.png">

## Lookup algorithm
{code:1}

```javascript
// always at run-time
function getProperty(object, prop) {
  if(object.hasOwnProperty(prop)) {
    return object[prop];
  } else {
    if(object.\_\_proto\_\_) {
      getProperty(object.\_\_proto\_\_, prop);
    } else {
      return undefined;
    }
  }
}
```

## Creating object with prototype
{notitle:1}

```javascript
function Structure(width, height) {
  const self = Object.create(structurePt)
  self.width = width;
  self.height = height;
  return self;
} 

const structurePt = {
  squareArea: function() {
    return this.width * this.height;
  },
};

function House(w, h, bedrooms) {
  const self = Object.create(housePt)
  Structure.call(self, w, h);
  self.bedrooms = bedrooms;
  return self;
} 

const housePt = Object.create(Structure());
housePt.sleeps = function() {
  return this.bedrooms.reduce((s,b) => s + b.sleeps, 0)
};
```

## Enough?

## Boilerplate
{bad:1}

## `new` to rescue!
{code:1}

```javascript
function Structure(width, height) {
  this.width = width;
  this.height = height;
} 

Structure.prototype = {
  squareArea: function() {
    return this.width * this.height;
  },
};

function House(w, h, bedrooms) {
  Structure.call(this, w, h);
  this.bedrooms = bedrooms;
} 

House.prototype = new Structure;
House.prototype.sleeps = function() {
  return this.bedrooms.reduce((s,b) => s + b.sleeps, 0)
};
```

## Using `new`

```javascript
const house = new House(10, 20, []);
house.sleeps() // 0
```

## `new` in depth

```javascript
function newOperator(constructor, ...args) {
  var instance = Object.create(constructor.prototype);
  var returnVal = constructor.apply(instance, args);
  return typeof returnVal == "object" ? returnVal : instance;
}
```

## Enough?

## Yes, probably

## BUT
{bad:1}

## Moar!
{code: 1}

```javascript
class Structure{
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  squareArea() {
    return this.width * this.height;
  }
} 


class House extends Structure {
  constructor(w, h, bedrooms) {
    super(w,h)
    this.bedrooms = bedrooms;
  }

  sleeps() {
    return this.bedrooms.reduce((s,b) => s + b.sleeps, 0)
  }
} 
```

## Using

<img src=media/instance.png>
