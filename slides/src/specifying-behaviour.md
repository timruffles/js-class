## Tests
{title:true}

## Writing good software takes time

## JS is loose

## Tests + dynamic: great mix

## How do we test?

## How do we ~~test~~?

## How do we specify behaviour?

## Documentation comes free!

## 1. Describe the context

```javascript
describe("user login", function() {

})
```

## 2. State what it should do

```javascript
describe("user login", function() {

  it("starts off with username field focussed");

  it("warns if the password is too simple");

  it("prevents sumission if invalid");

})
```

## 3. Implement assertions to ensure behaviour

```javascript
describe("user login", function() {

  it("starts off with username field focussed", function() {
    const widget = new Widget();
    widget.render();

    const input = widget.el.find("[name=username");

    assert.elementHasFocus(input);
  });

})
```

## 4. When tests fail, you write code

```javascript
class Widget {
  render() {
    // implement
  }
}
```

## 5. Or, new, lower-level tests

```javascript
// our higher level test may prompt this:

//  it("starts off with username field focussed");

describe("auto-focus component", function() {
  it("focusses an input");

  it("does not prevent focus leaving the input");
})
```


## Also: tests are code


## Keep it dry

```javascript
describe("auto-focus component", function() {
  let widget;
  beforeEach(function() {
    // put our shared setup in here, save typing
    widget = new Widget();
  });
})
```

<!-- TODO TDD loop image -->

## TDD loop

- fail/red: a failing test
- code code code!
- pass/green: our code passes test
- (refactor/performance): with confidence

## Let's try
{exercise:true}

    Exercise 1

    exercises/testing

## Hard tests
{title: 1}

## e.g

- asynchronous
- random
- Date/time dependent

## Aside: async

```javascript
// callback based - mocha supports promises too
it("should call", function(done) {
  somethingAsync(function(url) {
    assert.match(url, /users\/1/)
    done();
  }) 
})
```

## Isolate

## until it's 'too easy'

## Mocks n stubs
{title:1}

## Both fakes

## Roll your own, or library

- sinon

## Mocks: function voyeurism

```javascript
it("should call", function(done) {
  // Faking out $.get
  $.get = function(url) {
    assert.match(url, /users\/1/)
    done();
  } 

  user.retrieve(1);
})
```
## Mocks: asserting call behaviour

## Stubs

- replace dependencies of a unit

```javascript
function computeAnswer(cb) {
  $.get("/answer",function(answer) {
    cb(answer + 1);
  });
}

// STUB!
$.get = function(url, cb) {
  cb(42);
}

computeAnswer(function(answer) {
  assert.equals(result,43);
});
```

## Mocks are tests, stubs support tests

## Diagram of mocks/stubs
{notitle:1}

<img src="media/mocks-stubs.png">

## Let's try
{exercise:true}

    Exercise 2

    exercises/testing


