/**
 * A simple test runner that runs all tests one tick after
 * definition time.
 *
 * Outputs results to console.
 */

let scheduledTestRun = undefined;
let testsRun = false;
const tests = [];
const NOOP_BEFORE_EACH = () => {};
let beforeEachHook = NOOP_BEFORE_EACH;

const isNode = typeof window === 'undefined';

export function test(name, test) {
    if(testsRun) {
        throw Error(`Test '${name}' registered after run`);
    }

    tests.push({
        name,
        test,
    });

    if(!scheduledTestRun) {
        scheduledTestRun = setTimeout(runAllTests)
    }
}

export function beforeEach(fn) {
  if(beforeEachHook === NOOP_BEFORE_EACH) {
    beforeEachHook = fn;
  } else {
    throw Error('beforeEach already registered');
  }
}

function runAllTests() {
   testsRun = true;

   const passed = [];
   const failed = [];
   for(const setup of tests) {
       const {name,test} = setup;
       try {
           beforeEachHook();
           test()
       } catch(error) {
           failed.push({
               ...setup,
               error,
           })
           continue;
       }

       passed.push(setup)
   }

   if(passed.length > 0) {
       console.groupCollapsed(`%c ${passed.length} challenges passed`, 'color: green');

       for(const {name} of passed) {
           console.log(`%c✔%c ${name}`,'color: green', 'color: black')
       }

       console.groupEnd();
   }


   if(failed.length === 0) {
       return;
   }

   const [firstFailure, ...rest] = failed;

   formatFailure(firstFailure);

   if(rest.length > 0) {
       console.groupCollapsed(`%c ${rest.length} other challenges failed`, 'color: red');
       for(const other of rest) formatFailure(other);
       console.groupEnd();
   }
}

class AssertionError extends Error {
    constructor(messageComponents) {
        super();
        this.components = messageComponents;
    }
}

function formatFailure({name, error}) {
    console.log(`%c✘%c ${name}`, 'color:red', 'color: black')
    if(error instanceof AssertionError) {
        console.error(...error.components, error);
    } else {
        console.error(error);
    }

}

function formatForAssert(v) {
    return typeof v === 'string'
        ? `"${v}"`
        : v;
}

export const assert = {
    equal(a,b) {
        if(a !== b) {
           throw new AssertionError(["Expected", formatForAssert(a), "to equal", formatForAssert(b)])
        }
    }
}

export function rint(n) {
    return Math.random() * (n || 100) | 0;
}

const strings = ["cheese", "bagel", "mushroom", "hat"];

export function rstring() {
    return strings[rint(strings.length - 1)];
}

export const help = {
    rstring,
    rint,
}

export function yourWorkOrSpecimin(yourWork, specimin) {
    const useSpecimin = isNode
        ? 'USE_SPECIMIN' in process.env
        : window.location.search.includes('specimin');
    return useSpecimin ? specimin : yourWork;
}
