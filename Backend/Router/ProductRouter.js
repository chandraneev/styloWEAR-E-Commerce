const express=require ('express');
const Router=express.Router();
const upload =require("../Config/Multer");
const {isLogin}=require("../Middleware/Auth");
const ProductController=require("../Controller/ProductController");

Router.get("/e-commerce",ProductController.Homeproduct);
Router.get("/men",ProductController.Menproduct);
Router.get("/women",ProductController.Womenproduct);
Router.get("/kids",ProductController.Kidsproduct);
Router.get("/ethnics",ProductController.Ethnicsproduct);
Router.get("/other-accessories",ProductController.OtherAccessoriesproduct);
Router.get("/productdetails/:id",ProductController.Showproductdetails);
Router.post("/favourites",ProductController.Addfavourites, isLogin);
Router.get("/favourites",ProductController.getfavourites, isLogin);
Router.delete("/favourites/:favouriteid",ProductController.deletefavourites, isLogin);
Router.post("/cart",ProductController.Addcart, isLogin);
Router.get("/cart",ProductController.getcart, isLogin);
Router.delete("/cart/:productid",ProductController.deletecart, isLogin);
Router.get("/search",ProductController.Searchproduct);
Router.post("/orders",ProductController.Addorders, isLogin);
Router.get("/orders",ProductController.Getuserorders, isLogin);

Router.post("/addproducts",upload.array("images",3),ProductController.Addproduct, isLogin);
Router.put("/edit-product-details/:productid",ProductController.Editproductdetails, isLogin);
Router.get("/admin-home",ProductController.Getproduct);
Router.get("/admin-search",ProductController.Adminsearchproduct);
Router.delete("/productdetails/:id",ProductController.Deleteproduct, isLogin);
Router.get("/admin-orders",ProductController.Getadminorders, isLogin);
Router.put("/orderstatus/:id",ProductController.Editorderstatus, isLogin);
Router.get("/admin-delivers",ProductController.Getadmindelivers, isLogin);

module.exports = Router;