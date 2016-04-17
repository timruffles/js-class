## Tests

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

## 4. When tests fail, you are write code

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

## 

<!-- TODO TDD loop image -->

## TDD loop

## Let's try
{exercise:true}

## Asynchronous tests



## Specifying behavour
{summary:true}

- write specifications as imperative english sentences
- keep one assertion per specification, using `before()`
- factor out repetition: tests are code!

