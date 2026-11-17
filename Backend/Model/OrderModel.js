const { default: mongoose } = require("mongoose");

const orderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true,
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    paymentmode:{
        type:String,
        required:true,
    },
       
});

module.exports=mongoose.model("Order",orderSchema);
