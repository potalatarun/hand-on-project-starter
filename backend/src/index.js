const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Mongo db server started");
}).catch((err) => {
  console.log("Error is accured " + err);
});
app.get("", (req, res) => {
    res.send("hello world wonder this is running");
});
app.listen(process.env.PORT, () => {
  console.log("back end server is starting " + process.env.PORT);
});
