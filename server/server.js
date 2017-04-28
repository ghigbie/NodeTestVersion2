const express = require("express"),
      app     = express();

let port = 3010;

app.get("/", (req, res) => {
    res.send("<h1>Welcome to the landing page</h1>");
    console.log("You are in the landing page");
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
