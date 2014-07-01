global.assert = require("chai").assert;

global.sinon = require("sinon");

sinon.assert.expose(assert, { prefix: "spy" });
