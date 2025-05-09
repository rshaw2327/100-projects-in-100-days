const Products = require("../models/product.model")

exports.createProduct=async(req,res,next)=>{
    const product=await Products.create(req.body)
    if(!product){
        return res.status(500).json({
            success:false,
            message:"Cannot create a product"
        })
    }
    return res.status(201).json({
        success:true,
        message:"product created successfully",
        product
    })
}

exports.getAllProducts=async(req,res,next)=>{
    const products=await Products.find()
    if(!products){
        return res.status(500).json({
            success:false,
            message:"Cannot find products"
        })
    }
    return res.status(201).json({
        success:true,
        message:"products fetched successfully",
        products
    })

}