const common = require("my-submodule/common.js")

module.exports = {
    foo: function() {
        console.log("Hello from submodule!");
        common.resource.add("foo")
    }
}
