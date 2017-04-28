const request = require("supertest"),
      expect  = require("expect");

const app = require("./server").app;

it("should return \"<h1>Welcome to the landing page</h1>\" response", (done) =>{
    request(app)
        .get("/")
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: "Page not found"
            });
        })
        // .expect({
        //     error: "Page not found"
        // })
        //.expect("<h1>Welcome to the landing page</h1>")
        .end(done);
});
