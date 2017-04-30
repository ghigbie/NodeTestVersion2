const expect = require("expect"),
      rewire = require("rewire");

let app = rewire("./app");

describe("App", () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__("db", db);

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

    it("should call saveuser with user object", () => {
        let email = "mail@amail.com";
        let password = "123abc";

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});
