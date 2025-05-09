const mongoose=require("mongoose");
//data:-
const airBnbSchema=new mongoose.Schema({
    hostId: {
        type:Number,
        required:true,

    },
    roomType:{
        type:String,
        required:true,
        trim:true,

    },
    country:{
        type:String,
        required:true,
        trim:true,
    },

    city:{
        type:String,
        required:true,
        trim:true,
    },
    bedrooms:{
        type:Number,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,

    }

})
module.exports=mongoose.model("AirBnb",airBnbSchema)