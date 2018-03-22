## OOP
{title:1}

## OOP in JS

- ES6: `class`
- ES5: prototypes

## ES6

```javascript
class Widget {
  constructor({ model }) {
    this._model = model;
  }

  render() {
    return \`<div>${ this._model.get("name") }</div>\`;
  }
}

const instance = new Widget({
  model: new Map([["name", "crockford"]]),
});
```

## Let's break it down

```javascript
class Widget {
  // this is the function invoked when we call 'new Widget'
  constructor({ model }) {
    // ... 
  }
}
```

## Let's break it down

```javascript
class Widget {
  // ...

  // methods defined here will be callable on the instances
  render() {
    
  }
}
```

## Let's have a go
{exercise:true}

    Exercise 1

    exericses/objects-and-prototypes

## Okay that's the basics

## What about

## Privacy?

## Consensual privacy

```javascript
class Widget {

  render() {
    return \`<div>${ this._renderName() }</div>\`;
  }

  // prefix to show it's private
  _renderHelper() {
    return \`<span class='name'>
      ${ this._model.get("name") }
    </span>\`;
  }

}

const instance = new Widget(/\* ... \*/);

instance.render();
instance._renderHelper(); // no error
```

## Stricter privacy

```javascript
const privates = new WeakMap;

class Counter {
  constructor() {
    privates.set(this, { count: 0 })
  }

  get() {
    return privates.get(this).count;
  }

  add() {
    privates.get(this).count += 1;
  }
}

const instance = new Counter(/\* ... \*/);

instance.add();
instance.add();
console.log(instance.get()); // 2
```

## `WeakMap`?

- *keys* are available to garbage collect (GC)
- if only weak references remain, available for GC
- keys must be non-primitives

## `WeakMap` e.g

```javascript
const map = new Map;
const weak = new WeakMap;

const A = {};
const B = {};
const C = {};

map.set(A, "");
weak.set(B, "");

weak.set(B, "");
weak.set(C, "");

global.map = map;
global.weak = weak;
```

## Inheritance

```javascript
class DefaultMap extends Map {

  constructor(members, defaulter) {
    super(members);
    this._default = defaulter;
  }

  get(key) {
    if(!this.has(key)) {
      this._default(key, this);  
    }

    return super.get(key);
  }
}

const instance = new DefaultMap([["apples", 7 ]]), 
  () => 0)

console.log(instance.get("apples")) // 7
console.log(instance.get("pears")) // 0
```

## Broken down

```javascript
class DefaultMap extends Map {

  constructor(members, default) {
    super(members);
    this._default = default;
  }

  // ...
}
```

```javascript
// this is the default constructor of a sub-class
constructor(...args) {
  super(...args)
}
```

## Calling super methods

```javascript
class DefaultMap extends Map {
  // ...

  get(key) {
    // ...

    return super.get(key);
  }
}
```

## Let's try
{exercise:true}

    Exercise 2

    exercises/objects-and-prototypes

## Properties?

```javascript
class Widget {
  something: [];
}
```

## Nope
{bad:true}

## Deliberate ommission

## Instead

```javascript
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
```

## Why?

## Well...

## How do JS objects really work?

## Prototypes!

## So... properties

```javascript
class Widget {
}

// I'm bored of initialising in constructor!
Widget.prototype.letters = [];

const A = new Widget;
const B = new Widget;
A.letters.push("a");

console.log(B.letters) // ["a"]
```

<ul>
  <li>What went wrong?</li>
  <li class=fragment>All instances share same prototype property!</li>
</ul>

## Creating objects with prototype

##     
{notitle:1}

```javascript
const sturcture = {
  squareArea: function() {
    return this.width * this.height;
  },
};

const house = Object.create(structure);
Object.assign(house, {
  width: 5,
  height: 10,
});

const shed = Object.create(structure);
Object.assign(shed, {
  width: 2,
  height: 2,
});

house.squareArea() // 50
shed.squareArea() // 4
```


## `this` on invocation
{code:1}

```javascript
const sturcture = {
  squareArea: function() {
    return this.width * this.height;
  },
};

const house = Object.create(structure);
Object.assign(house, {
  width: 5,
  height: 10,
});

house.squareArea() // 50
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

## Via `new`
{notitle:1}

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

## `.call(thisValue, ...args)`

```javascript
function House(w, h, bedrooms) {
  Structure.call(this, w, h);
  this.bedrooms = bedrooms;
}


function Structure(width, height) {
  // our 'this' value when we call Structure.call above
  // will be an object { __proto__: House.prototype }
  this.width = width;
}
```


## Let's try!
{exercise:true}

    Exercise 3

    exercises/objects-and-prototypes

