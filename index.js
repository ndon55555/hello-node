const submodule = require("my-submodule/submodule.js");
const submodule2 = require("my-submodule/submodule2.js")

console.log("Hello, world!");
submodule.foo();
submodule2.bar();

console.log(require("my-submodule/common.js"))