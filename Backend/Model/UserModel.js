const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
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
    landmark:{
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
    gender:{
        type:String,
        required:true,
    },
});

module.exports=mongoose.model("User",userSchema);
