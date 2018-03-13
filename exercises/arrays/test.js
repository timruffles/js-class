import { test, help, assert } from "../.sys/test-runner.js";
import * as specimin from "./.specimin.js";
import * as yourSolution from "./exercise.js";

const solution = window.location.search.includes('specimin') ? specimin : yourSolution;

let a,b,c;
let object;
let withNull;

beforeEach(function() {
    [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
    object =  {[a]: {[b]: {[c]: "got it" } } };
    withNull =  {[a]: null };
});

test("can look up multiple properties deep in objects", function() {

            assert.equal(solution.dig(object, [a,b,c]), "got it");
         })

test("safely returns null-ish value when can't dig further", function() {

            assert.equal(solution.dig(object, ['z','z','z']), undefined);
         })

test("works with no properties provided", function() {

            assert.equal(solution.dig(object, []), undefined);
         })

test("returns null if hits a null", function() {
            assert.equal(solution.dig(withNull, ['z']), null);
         })
