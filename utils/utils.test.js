const expect = require("expect");

//user created imports
const utils = require("./utils");


it("should add two numbers", () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA("number");
    // if(res != 44){
    //     throw new Error(`Expected 44, but got ${res}.`);
    // }
});

it("should square a number", () => {
    let res = utils.square(10);

    expect(res).toBe(100).toBeA("number");
    // if(res != 100){
    //     throw new Error(`Expected 100, but got ${res}.`);
    // }
});

it("should return some value", () => {
    expect(12).toNotBe(11);
});
