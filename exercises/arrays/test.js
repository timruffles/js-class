import { beforeEach, yourWorkOrSpecimin, test, help, assert } from "../.sys/test-runner.js";
import * as specimin from "./.specimin.js";
import * as yourWork from "./exercise.js";

const exercise = yourWorkOrSpecimin(yourWork, specimin);

let a,b,c;
let object;
let withNull;

beforeEach(function() {
    [a,b,c] = [help.rstring(), help.rstring(), help.rstring()];
    object =  {[a]: {[b]: {[c]: "got it" } } };
    withNull =  {[a]: null };
});

test("can look up multiple properties deep in objects", function() {
            assert.equal(exercise.dig(object, [a,b,c]), "got it");
         })

test("returns default value if it can't dig further", function() {
            assert.equal(exercise.dig(object, [a,'z','z'], 'Backup'), 'Backup');
         })

throw Error("what's the best way to define dig - check it tests array knowledge...");
test("works with no properties provided", function() {
            assert.equal(exercise.dig({a: 1}, [], 'Backup'), object);
         })

test("returns null if hits a null", function() {
            assert.equal(exercise.dig({z: null}, ['z']), null);
         })
