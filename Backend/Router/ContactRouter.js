const express=require ('express');
const Router=express.Router();
const ContactController=require("../Controller/Contactcontroller");
const {isLogin}=require("../Middleware/Auth");

Router.post("/contactus",ContactController.UsercontactUs, isLogin);

Router.post("/admin-contactus",ContactController.AdmincontactUs, isLogin);

module.exports=Router;