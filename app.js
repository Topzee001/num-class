const express = require("express");
const cors = require("cors");
const numberRouter = require("./routes/numberRouter");
const app = express();

//enable cors
app.use(cors());

//create json middleware
app.use(express.json());

//route
app.use("/", numberRouter);
// app.use("/api/classify-number", numberRouter);
app.use("/classify-number", numberRouter);

module.exports = app;
