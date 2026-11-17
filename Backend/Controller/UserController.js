const bycrypt = require("bcrypt");
const User = require("../Model/UserModel");
const {validationResult} = require("express-validator");

exports.Register = async(req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname,phoneno,email,password,address,landmark,pincode,citystate,gender}=req.body;
    const hashpassword=await bycrypt.hash(password,10);
    const user = await User.create({firstname,lastname,phoneno,email,password:hashpassword,address,landmark,pincode,citystate,gender});
    res.status(200).json({message:"Registration successful",user});
}

exports.Login = async(req, res)=>{
    const {email,password}=req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    const ismatch=await bycrypt.compare(password, user.password);

    if(!ismatch){
        return res.status(401).json({message:"user not valid"});
    }
    req.session.userid= user._id;
    res.status(200).json({message:"Login successful", user});
}

exports.Updateuser = async(req, res)=>{
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname,phoneno,email,address,landmark,pincode,citystate,gender}=req.body;
    const user = await User.findByIdAndUpdate(req.session.userid,{firstname,lastname,phoneno,email,address,landmark,pincode,citystate,gender},{returnDocument:"after"});
    res.status(200).json({message:"Update successful",user});
}


exports.Logout = async(req, res)=>{
   req.session.destroy((err)=>{
    if(err){
        return res.status(500).json({
            message:"Logout failed",
        });
    }
    res.clearCookie("connect.sid");

    res.status(200).json({
        message:"Logout successful"
    });
   });
};

