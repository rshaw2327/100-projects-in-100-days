const AirBnb=require("../models/airBnb.model.js")

exports.createairBnb=async(req,res,next)=>{
    const airBnb=await AirBnb.create(req.body)
    if(!airBnb){
        return res.status(500).json({
            success:false,
            message:"cannot create a airbnb data"
        })
    }
    return res.status(201).json({
        success:true,
        message:"AirBnb data created successfully",
        airBnb
    })
}
