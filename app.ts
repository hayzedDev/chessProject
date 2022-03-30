const express = require("express");
const path = require("path");
const controller = require("./controller");

const app = express();

app.use(express.static("static"));

app.get("/", controller.getOverview);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
