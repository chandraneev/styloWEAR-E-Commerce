const express=require ('express');
const Router=express.Router();
const adminController=require("../Controller/AdminController");
const {Registervalidator} = require ("../Validator/AdminValidation");
const {isLogin}=require("../Middleware/AdminAuth");
const {checkauth}=require("../Middleware/AdminAuth");

Router.post("/admin-registration", Registervalidator, adminController.Register);
Router.post("/admin-login",adminController.Login);
Router.put("/edit-admin-info", adminController.Updateadmin,isLogin);
Router.post("/admin-logout",adminController.Logout);
Router.get("/admin-check-auth",checkauth,isLogin);

module.exports=Router;

