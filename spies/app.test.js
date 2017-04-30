const expect = require("expect");

describe("App", () => {

    it("should call the spy correctly", () => {
        let spy = expect.createSpy();
        spy();
        expect(spy).toHaveBeenCalled();
    });

    it("should call the spy correctly with arguments", () => {
        let spy = expect.createSpy();
        spy("George", 25);
        expect(spy).toHaveBeenCalledWith("George", 25);
    });
});
