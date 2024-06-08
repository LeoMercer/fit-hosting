// build.js
const ncp = require("ncp").ncp;
const path = require("path");

const source = path.join(__dirname, "public");
const destination = path.join(__dirname, "build");

ncp.limit = 16;

ncp(source, destination, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Build complete!");
});
