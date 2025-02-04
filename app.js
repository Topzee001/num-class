const express = require("express");
const cors = require("cors");
// const getRouter = require("./routes/router");
const app = express();
const querystring = require("querystring");

//enable cors
app.use(cors());

//create json middleware
app.use(express.json());

//route
// app.use("/", getRouter);
app.get("/api/classify-number", (req, res) => {
  console.log(req.query);
  //   res.send("hello from the number guy");
  res.send(req.query);
});

module.exports = app;
