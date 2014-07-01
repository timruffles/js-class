# Exercise system

This handles the running of exercises. If you're in the class you don't need to read this, but you're welcome to! Bonus points :)

## Structure

```sh
exercise/foo
  verify.js   - just calls the real verify
.sys
  verify.js   - runs the exercises
```

## Testing the tests

To ensure the exercises are possible and not buggy, provide a .specimin.js in each exercise folder. To run tests vs the specimin use the `SPECIMIN` env variable.

Running all the tests is as simple as:

  for f in */verify.js; do SPECIMIN=1 node $f; done

## Writing

Use `.skeleton` to bootstrap an exercise. TDD exercises - where the student writes the tests too - need a `start-here.js` with their tests.
