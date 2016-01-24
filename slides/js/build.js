"use strict";
`requires es6`;

const slidedown = require("./slidedown");
const stdin = require("easy-stdin");

if(require.main === module) {
  main();
}

function main() {
  stdin(function(err, content) {
    if(err) {
      // die here
      throw err;
    }

    console.log(slidedown.toHtml(content));
  });
}
