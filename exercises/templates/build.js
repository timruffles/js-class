var sh = require("shelljs");
var hogan = require("hogan.js");
var path = require("path");

var index = sh.cat(__dirname + "/index.html.tache");

sh.ls(__dirname + "/../exercise-*").forEach(function(f) {
  var paths = sh.ls(f + "/*.js").map(path.relative.bind(null,f));
  console.log
  hogan.compile(index).render({
    title: path.basename(f.replace("exercise-","")),
    paths: paths,
  }).to(f + "/index.html")
});

