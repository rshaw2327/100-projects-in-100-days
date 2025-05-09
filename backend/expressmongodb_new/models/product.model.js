const mongoose= require("mongoose");
// products:
// title ,description,category,price
const productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description :{
        type:String,
        required:false,
        trim:true,
    },
    category:{
        type:String,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        maxLength:4,
        minLength:1,
        
    }
})
module.exports=mongoose.model("Products",productsSchema)

