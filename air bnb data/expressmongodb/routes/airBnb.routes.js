const express=require("express");
const router=express.Router();
const {
    createairBnb,
 }=require("../controllers/airbnb.controller");

 router.route("/airBnb").post(createairBnb)

module.exports = router;