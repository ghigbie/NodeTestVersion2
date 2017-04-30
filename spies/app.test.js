const expect = require("expect");

describe("App", () => {

    it("It should call the spy correctly", () => {
        let spy = expect.createSpy();
        spy();
    });
});
