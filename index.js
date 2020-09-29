const express = require("express");
const app = express();

app.use(express.json());
// app.use(express.urlencoded);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const routes = require("./controller/fizzbuzz-router");
routes(app);

app.listen(port, function () {
  console.log("Server started on port:" + port);
});
