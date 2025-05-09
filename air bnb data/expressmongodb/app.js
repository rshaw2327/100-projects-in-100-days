const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const cors= require("cors")

app.use(cors())

app.use(express.json());
app.use(cookieParser());

const airBnb = require("./routes/airBnb.routes");

app.use("/api/v1", airBnb);

module.exports = app;
