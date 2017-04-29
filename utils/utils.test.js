const expect = require("expect");

//user created imports
const utils = require("./utils");

describe("Utils", () =>{
    describe("#add", () => {
        it("should add two numbers", () => {
            let res = utils.add(33, 11);

            expect(res).toBe(44).toBeA("number");
            // if(res != 44){
            //     throw new Error(`Expected 44, but got ${res}.`);
            // }
        });

        it("should asyncAdd two numbers", (done) => {
            utils.asyncAdd(44, 11, (sum) =>{
                expect(sum).toBe(55).toBeA("number");
                done();
            });
        });
    });

    describe("#square", () => {
        it("should square a number", () => {
            let res = utils.square(10);

            expect(res).toBe(100).toBeA("number");
            // if(res != 100){
            //     throw new Error(`Expected 100, but got ${res}.`);
            // }
        });

        it("should asyncSquare a number", (done) => {
            utils.asyncSquare(10, (result) => {
                expect(result).toBe(100).toBeA("number");
                done();
            });
        });
    });
});

describe("Set Name", () =>{
    it("set firstName and lastName", () => {
        let user = {location: "Santa Fe", age: 25}
        let fullName = "Billy Bobby";
        let res = utils.setName(user, fullName);
        expect(res).toEqual({
            age: 25,
            firstName: "Billy",
            lastName: "Bobby",
            location: "Santa Fe"
        }).toBeA(Object);
    });
});

describe("Playground", () => {
    describe("#return", () => {
        it("should return some value", () => {
            expect(12).toNotBe(11);
        });
    });

    describe("#compare", () => {
        it("should compare two objects", () => {
            expect({name: "mike"}).toNotEqual({name: "Mike"}); //used for equality with objects and arrays
        });
    });

    describe("#arrays", () => {
        it("should examine an array", () => {
            expect([1, 2, 3]).toInclude(5); //looks at values of arrays
        });

        it("should examine an array", () => {
            expect([1, 2, 3]).toExclude(6); //another array testing method
        });
    });

    describe("#object", () => {
        it("should examine an object", () => {
            expect({
                name: "Kristi",
                age: 25,
                location: "Santa Fe"
            }).toExclude({
                age: 24
            });//looks to see if object has a value
        });
    });
});
