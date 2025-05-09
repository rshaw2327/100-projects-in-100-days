const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json())
app.use(cookieParser())

// routes import
const product=require("./routes/product.routes")

//routes use 
app.use("/api/v1",product)

module.exports=app;