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

it("set firstName and lastName", () => {
    let user = "Billy Bobby";
    let res = utils.setName({}, user);
    expect(res).toEqual({
        firstName: "Billy",
        lastName: "Bobby"
    }).toBeA(Object);
});

it("should return some value", () => {
    expect(12).toNotBe(11);
});

it("should compare two objects", () => {
    expect({name: "mike"}).toNotEqual({name: "Mike"}); //used for equality with objects and arrays
});

it("should examine an array", () => {
    expect([1, 2, 3]).toInclude(5); //looks at values of arrays
});

it("should examine an array", () => {
    expect([1, 2, 3]).toExclude(6); //another array testing method
});

it("should examine an object", () => {
    expect({
        name: "Kristi",
        age: 25,
        location: "Santa Fe"
    }).toExclude({
        age: 24
    });//looks to see if object has a value
});
