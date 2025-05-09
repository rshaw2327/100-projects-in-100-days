const { default: mongoose } = require("mongoose");
const app = require("./app");

const port = 8080;

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://educaterich2325:MonGoDbpass@cluster0.wk7fimo.mongodb.net/"
    )
    .then((data) => {
      console.log(`mongodb connected with the server ${data.connection.host} `);
    });
};
connectDatabase();
app.listen(port,()=>{
  console.log("server is running")
})