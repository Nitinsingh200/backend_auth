const mongoose = require("mongoose");


async function connectDB(){
    try{ 
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DATABASE Connected")

    } catch(err){
        console.log(" not connected ")

    }
}
 module.exports= connectDB;
 