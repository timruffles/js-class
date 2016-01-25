## Testing
{title:1}

## JS is easy to test

## If you KISS
```javascript
'generateResetToken': function (req, res) {
    var email = req.body.email;
    api.users.generateResetToken(email).then(
      api._sendMessage.bind(null,config,email)
    ).then(
      api._notifySuccess(res,{
        type: 'success',
        message: 'Check your email for further instructions',
        status: 'passive',
        id: 'successresetpw'
      })
      , api._handleFailure
    );
},

```

## Unit tests need units

## Code can prevent tests

## 'Test zero'

```sh
# no way to test monolithic jQuery (or node) apps!
app.js | wc -l # 5372
```

## Isolate

## until it's 'too easy'

## Mocks n stubs
{title:1}

## Both fakes

## Roll your own, or library: it's a role

## Mocks: function voyeurism

```javascript
var getSpy = sinon.spy($,"get");
$.get("http://example.com");
assert.calledWithMatch("http://example.com");
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

## Both are fakes

## Javascript testing superpower

- remember `bind`?
- `Function.prototype.call` can also affect `this`

## Avoid tedious setup

```javascript
function User(lots,of,deps) {
  this.lots = lots;
  // ...
}
User.prototype.getLots = function() {
  // only uses one dependency
  return this.lots + 1;
}

it("has a way of accessing lots",function() {
  var answer = User.prototype.getLots.call({lots: 42})
  assert.equal(answer,43);
})
```

## Like all stubbing...

- suggests your design isn't very modular/coherent
- if it happens a lot, why does object have unused deps?

## Fragility

- don't over stub/mock
- if it's not slow/indeterminate, and it exists, use that


## Exercise

    exercise/testing
