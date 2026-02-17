 const express = require("express")
const jwt =  require("jsonwebtoken");
 const userModel = require("../model/user.model")

  const router = express.Router();

  router.post("/create",async(req,res)=>{
    // console.log(req.body)
    //  console.log(req.cookies)
     const token = req.cookies.token;
     if(!token){
         return res.status(401).json({
            message:"unauthorized"
         })
     }
     try{
     const  decoded =  jwt.verify(token,process.env.JWT_SECRET)
const user = await userModel.findOne({
    _id: decoded.id
})
console.log(user)

     }catch(err){
        return res.status(401).json({ 

        })


     }

  })

  module.exports = router;
