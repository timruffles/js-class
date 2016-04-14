## Objects
{title:1}

## Confusion

## Objects

```javascript
const a = { b: 1 }; // this is instance of 'Object'

```

## Nope
{bad: true}

## OOP

I mean Alan Kay objects! OOP

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
    return `<div>${ this._model.get("name") }</div>`;
  }
}

const instance = new Widget({
  model: new Map(Object.entries({"name": "crockford"})),
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

TODO simple exericse

## Okay that's the basics

## What about

## Privacy?

## ...

## Conventions

<!-- TODO add WeakMap idiom -->

```javascript
class Widget {

  // anyone can still call this, but you've made it clear it's
  // private. Getting the biggest benefit of privacy: communication
  _renderHelper() {
    return `<span class='name'>${ this._model.get("name") }</span>`;
  }

  render() {
    return `<div>${ this._renderName() }</div>`;
  }
}

const instance = new Widget(/* ... */);

instance.render();
instance._renderHelper(); // no error
```

## Inheritence

```javascript
class DefaultMap extends Map {

  constructor(members, default) {
    super(members);
    this._default = default;
  }

  get(key) {
    if(!this.has(key)) {
      this._default(key, this);  
    }

    return super.get(key);
  }
}

const instance = new DefaultMap(Object.entries({ apples: 7 }), () => 0)

instance.get("apples") // 7
instance.get("pears") // 0
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

TODO

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

## Big idea

## If an object doesn't know, it asks its prototype

##    
{notitle:1}

<img src="media/prototypes.png">

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

## Chain

<img src="media/prototype-chain.png">

## Creating object with prototype
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

## Let's try!
{exercise:true}

TODO

