exports.getOverview = (req, res, next) => {
  console.log("HEllo from the server");
  res.status(200).sendFile("/index.html");
};
