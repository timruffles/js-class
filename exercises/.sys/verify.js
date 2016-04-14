/**
 * the implementation of the user-facing verify.js program
 *
 * runs two types of exercise: straight and tdd. straight
 * runs a module vs a set of mocha tests, tdd compares your
 * tests' output vs the exercise's tests (e.g when the exercise
 * is *about* writing tests)
 *
 * pass the SPECIMIN env variable to test vs the `.specimin.js`
 * file for an exercise
 *
 * NOTE - this file is designed to work in any version of node
 * >= 0.10.x  it's not babelified, and uses only 0.10.x methods
 */
var exec = require("child_process").exec;

var dn = __dirname;
var format = require("util").format;

exports = module.exports = function(path) {
  exports.test(path + "/.test.js", passFail);
}

exports.test = function(testFile, handler) {
  var cmd = format('node --use_strict "%s/../../node_modules/mocha/bin/mocha" --ui bdd -r chai -r sinon --compilers js:babel-register -r "%s/mocha-setup.js" "%s"',
    dn, dn, testFile);

  exec(cmd, { cwd: dn }, handler);
}

exports.passFail = passFail;

function passFail(error, stdout, stderr) {
  if(error) {
    fail(error, stdout, stderr);
  } else {
    succeed(stdout);
  }
}

exports.tdd = function(path) {
  if(process.env.SPECIMIN) {
    exports.test(path + "/.test", exports.passFail);
  } else {
    exports.test(path + "/start-here", function(error, stdout, stderr) {
      exports.test(path + "/.test", function(errorBase, stdoutBase, stderrBase) {
        if(error || errorBase) {
          console.log("Exercise incomplete:");
        } else {
          console.log("Exercise complete:");
        }

        title("YOUR TESTS");
        console.log(stdout);
        console.log(stderr);

        title("BASELINE TESTS");
        console.log(stdoutBase);
        console.log(stderrBase);
      });
    });

  }
}

function fail(err, stdout, stderr) {
  console.error("Exercise incomplete:\n");
  console.log(stdout);
  console.log(stderr);
  process.exit(1);
}

function succeed(stdout) {
  console.error("Exercise complete, keep it up:\n");
  console.log(stdout);
}

function title(text) {
  console.log("\n\n   ===   %s  ===   \n", text)
}

