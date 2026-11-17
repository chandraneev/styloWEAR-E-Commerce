const express=require ('express');
const Router=express.Router();
const userController=require("../Controller/UserController");
const {Registervalidator} = require ("../Validator/UserValidation");
const {isLogin}=require("../Middleware/Auth");
const {checkauth}=require("../Middleware/Auth");

Router.post("/registration", Registervalidator, userController.Register);
Router.post("/login",userController.Login);
Router.put("/edit-user-info", userController.Updateuser,isLogin);
Router.post("/logout",userController.Logout);
Router.get("/check-auth",isLogin,checkauth);

module.exports=Router;
