const utils = require("./utils");

it("should add two numbers", () => {
    let res = utils.add(33, 11);
    if(res != 45){
        throw new Error(`Expected 44, but got ${res}`);
    }
});
