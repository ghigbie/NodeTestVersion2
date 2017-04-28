const request = require("supertest");

const app = require("./server").app;

it("should return \"<h1>Welcome to the landing page</h1>\" response", (done) =>{
    request(app)
        .get("/")
        .expect("<h1>Welcome to the landing page</h1>")
        .end(done);
});
