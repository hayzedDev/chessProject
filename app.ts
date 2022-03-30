const express = require("express");
const path = require("path");
const controller = require("./controller");

const app = express();

app.use(express.static("static"));


app.get("/", controller.getOverview);

const port = 8000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
