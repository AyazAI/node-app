const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi from express</h1>");
});

let port = 5000 || process.env.PORT;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
