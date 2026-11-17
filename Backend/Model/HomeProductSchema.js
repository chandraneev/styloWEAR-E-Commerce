const { default: mongoose } = require("mongoose");

const homeproductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    subcategory:{
        type:String,
        required:true,
    },
    ratings:{
        type:String,
        required:true,
    },
    images:{
        type:[String],
    },
});

module.exports=mongoose.model("HomeProduct",homeproductSchema);