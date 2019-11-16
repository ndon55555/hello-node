const common = require("my-submodule/common.js")

module.exports = {
    bar: function() {
        console.log("Hello from submodule2!")
        common.resource.add("bar")
    }
}