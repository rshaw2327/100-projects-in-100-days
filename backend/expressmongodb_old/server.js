const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const Product = require("./models/product.model");
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/product", async (req, res) => {
  console.log("inside product");
  try{
  const product = await Product.create(req.body);
  return res.status(201).json({
    success: true,
    product,

  });
}
catch{
   console.log("error", error);
  return res.status(500).json({
  success: false,
  });

}

 
});

app.listen(3000, () => {
  console.log("server running");
  mongoose
    .connect(
      "mongodb+srv://educaterich2325:MonGoDbpass@cluster0.wk7fimo.mongodb.net/"
    )
    .then(() => console.log("Connected!"));
});
