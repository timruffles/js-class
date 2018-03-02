import { test, help, assert } from "../.sys/test-runner.js";
import * as specimin from "./.specimin.js";
import * as yourSolution from "./exercise.js";

const solution = window.location.search.includes('specimin') ? specimin : yourSolution;
test("can recurse through objects", function() {

            const [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
            const object =  {[a]: {[b]: {[c]: "got it" } } };
        

            assert.equal(solution.dig(object, a,b,c), "got it");
         })

test("works with no properties", function() {

            const [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
            const object =  {[a]: {[b]: {[c]: "got it" } } };
        

            assert.equal(solution.dig(object), undefined);
         })

test("safely returns null-ish value when can't dig further", function() {

            const [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
            const object =  {[a]: {[b]: {[c]: "got it" } } };
        

            assert.equal(solution.dig(object, 'z','z','z'), undefined);
         })