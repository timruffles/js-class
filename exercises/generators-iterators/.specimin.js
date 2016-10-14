
/**
 * Exercise 4
 *
 * Enable this Stack class to be used as
 * an iterator.
 *
 * TODO find out how to tell the interpreter this
 *      object can be iterated
 *
 * TODO consider how the interation needs to occur
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

  *[Symbol.iterator ]() {
    while(this._values.length) {
      yield this.pop();
    }
  }
}

