exports.importAndTest = function(path, runner) {
  var failed = false;

  try {
    var exported = require(path + (process.env.SPECIMIN ? "/.specimin" : "/exercise"));
  } catch(e) {
    failed = true; 
    console.error(e);
  }

  if(failed) {
    it("is able to import the module", function() {
      assert.isFalse(failed, "there was an issue importing your module - check your syntax");
    });
  } else {
    runner(exported);
  }
}

exports.rint = function rint(n) {
  return Math.random() * (n || 100) | 0;
}

strings = ["cheese", "bagel", "mushroom", "hat"];

exports.rstring = function() {
  return strings[exports.rint(strings.length - 1)];
}

