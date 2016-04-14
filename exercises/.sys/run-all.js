/**
 *
 * NOTE - this file is designed to work in any version of node
 * >= 0.10.x  it's not babelified, and uses only 0.10.x methods
 */
var exec = require("child_process").exec;
var sh = require("shelljs");
var path = require("path");
var format = require("util").format;

main();

function main() {
  var exercises = gatherExerciseDirectories();
  runExercises(exercises);
}

function gatherExerciseDirectories() {
  var base = path.normalize(__dirname + "/..");
  return sh.ls(base)
    .map(function(p) {
      return path.join(base, p, "verify.js");
    })
    .filter(function(path) {
      return sh.test("-f", path) && !/__skeleton/.test(path);
    })
}

function runExercises(toRun) {
  var failed = false;

  loop();

  function loop() {
    if(toRun.length === 0) {
      return process.exit(failed ? 1 : 0);
    }

    var p = toRun.shift();

    var cwd = path.dirname(p);

    exec(process.execPath + ' verify.js', {
      cwd: cwd,
      env: {
        SPECIMIN: 1,
      },
    }, function(err, stdout, stderr) {
      if(err) {
        failed = true;
      }

      console.log(stdout);
      console.error(stderr);

      loop();
    })
  }
}


