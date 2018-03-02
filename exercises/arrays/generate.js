
const tests = require("./.test");
const fs = require("fs");


const formatted = tests.reduce((all, test) => {
    const setup = test.setup || function() {}
    const setupSrc = fnToSource(setup);

    for(const testName of Object.keys(test)) {
       if(testName === 'setup') continue;

       all.push(`test("${testName}", function() {\n${setupSrc}\n${fnToSource(test[testName])} })`);
    }

    return all;
}, []);

const header = `import { test, help, assert } from "../.sys/test-runner.js";
import * as specimin from "./.specimin.js";
import * as yourSolution from "./exercise.js";

const solution = window.location.search.includes('specimin') ? specimin : yourSolution;

`

const output = header + formatted.join("\n\n");

fs.writeFileSync("./test.js", output);


function fnToSource(fn) {
    return fn.toString().replace(/^function[^{]+{/,'').replace(/}[^}]*$/,'');
}
