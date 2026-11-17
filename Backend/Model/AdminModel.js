const { default: mongoose } = require("mongoose");

const adminSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    companyname:{
        type:String,
        required:true,
    },
    pincode:{
        type:String,
        required:true,
    },
    citystate:{
       type:String,
       required:true, 
    },
});

module.exports=mongoose.model("Admin",adminSchema);
