const express = require("express");
const path = require("path");
const controller = require("./controller");

const app = express();

// app.use(express.static(path.join(__dirname, "static")));
app.use(express.static("static"));

// app.use(express.static(`${__dirname}/static`));

app.get("/", controller.getOverview);

console.log("Hi");
const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
