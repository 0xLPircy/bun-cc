// import path from "path";
const path = require("path");

const filepath = path.join("foo", "bar", "image.png");
const filename = path.basename(filepath);
const test = path.dirname(filepath);
console.log("File:", filename);
console.log("Directory:", test);
