/**
 * Exercise 4
 *
 * Enable this Stack class below to be used as
 * an iterator.
 *
 * Like a physical stack of books, the easiest way to
 * get items out is from the top - this is called last-in, first-out
 * order (LIFO). We want to enable the stack to be iterated
 * in LIFO order, removing each item we iterate over
 *
 *
 */

export class Stack {
  constructor() {
    this._values = [];
  }

  get size() {
    return this._values.length;
  }

  pop() {
    return this._values.pop();
  }

  push(v) {
    return this._values.push(v);
  }

  // TODO find out how to tell the interpreter this
  //      object can be iterated (it's defining a method with a special name)
  // TODO consider how the interation needs to occur

}

