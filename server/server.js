const express = require("express"),
      app     = express();

let port = 3010;
app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});
