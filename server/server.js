const express = require("express"),
      app     = express();

let port = 3010;

app.get("/", (req, res) => {
    res.status(404).send({
        error: "Page not found",
        name: "Todo App v1.0"
    });
    //("<h1>Welcome to the landing page</h1>");
    console.log("You are in the landing page");
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});

module.exports.app = app;
