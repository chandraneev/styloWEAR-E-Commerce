const Product = require("../Model/ProductModel");
const Favourites = require("../Model/WishlistModel");
const Carts = require("../Model/CartModel");
const Order = require("../Model/OrderModel");
const uploadimagetocloud = require("../Utils/Uploadimageincloud");
const cloudinary = require("../Config/Cloudinary");


exports.Addproduct=async(req,res)=>{
    const{productname,brandname,description,category,subcategory,ratings,price,colour,meterial,delivery}=req.body;
    const sizes=req.body.sizes;
    const {adminid}=req.session;
    if(req.files.length !==3){
        return res.status(400).json({message:"3 images are required"});
    }
    const imageurls=[];
    for (const file of req.files){
        const res=await uploadimagetocloud(file);
        imageurls.push({
            url:res.secure_url,
            public_id:res.public_id
        });
    }
    const product=await Product.create({productname,brandname,description,category,subcategory,ratings,price,colour,meterial,delivery,sizes,images:imageurls,addedby:adminid});
    res.status(200).json({message:"Added Successfully",product});
}

exports.Getproduct = async(req, res)=>{
    const {adminid}=req.session;
    const product = await Product.find({addedby:adminid});
    res.status(200).json(product);
}

exports.Homeproduct = async(req, res)=>{
    const products = await Product.find();
    res.status(200).json(products);
}

exports.Menproduct = async (req,res)=>{
    const{subcategory}=req.query;
    const filter={category : "Men Casual",};
    if(subcategory){
        filter.subcategory=subcategory;
    }
    const menproducts=await Product.find(filter);
    res.status(200).json(menproducts);
}

exports.Womenproduct = async (req,res)=>{
    const{subcategory}=req.query;
    const filter={category : "Women Casual",};
    if(subcategory){
        filter.subcategory=subcategory;
    }
    const womenproducts=await Product.find(filter);
    res.status(200).json(womenproducts);
}

exports.Kidsproduct = async (req,res)=>{
    const{subcategory}=req.query;
    const filter={category : "Kids",};
    if(subcategory){
        filter.subcategory=subcategory;
    }
    const kidsproducts=await Product.find(filter);
    res.status(200).json(kidsproducts);
}

exports.Ethnicsproduct = async (req,res)=>{
    const categories=req.query.category.split(",");
    const subcategory=req.query.subcategory;
    const filter={category : {$in:categories}};
    if(subcategory){
        filter.subcategory=subcategory;
    }
    const ethnicsproducts=await Product.find(filter);
    res.status(200).json(ethnicsproducts);
}

exports.OtherAccessoriesproduct = async (req,res)=>{
    const categories=req.query.category.split(",");
    const subcategory=req.query.subcategory;
    const filter={category : {$in:categories}};
    if(subcategory){
        filter.subcategory=subcategory;
    }
    const otheraccessoriesproducts=await Product.find(filter);
    res.status(200).json(otheraccessoriesproducts);
}

exports.Showproductdetails=async(req,res)=>{
    const productid=req.params.id;
    const product=await Product.findById(productid);

    const deliverydate=new Date(product.delivery);
    const referencedate=new Date(Number(product.reference));
    const today=new Date();

    deliverydate.setUTCHours(0,0,0,0);
    referencedate.setUTCHours(0,0,0,0);
    today.setUTCHours(0,0,0,0);

    const daypassed=Math.floor((today-referencedate)/(1000*60*60*24));
    deliverydate.setUTCDate(deliverydate.getUTCDate()+daypassed);
    const onlydate=deliverydate.toLocaleDateString("en-CA",{timeZone:"UTC"});
     res.status(200).json({product,deliverydate:onlydate});
}

exports.Editproductdetails=async(req,res)=>{
    const productid=req.params.productid;
    const adminid=req.session.adminid;
    const{productname,brandname,description,category,subcategory,ratings,price,colour,meterial,delivery,sizes}=req.body;
    const product=await Product.findOneAndUpdate({_id:productid,addedby:adminid},{productname,brandname,description,category,subcategory,ratings,price,colour,meterial,delivery,sizes},{returnDocument:"after"});
     res.status(200).json({message:"Updated Successfully",product});
}


exports.Addfavourites=async(req,res)=>{
    const {productid,size}=req.body;
    if(!req.session.userid){
        return res.status(401).json({message:"Please Login"});
    }
    if(!productid||!size){
        return res.status(400).json({message:"Product & Size Required"});
    }
    let favourite=await Favourites.findOne({
        user:req.session.userid,
    });
    if(!favourite){
        favourite=await Favourites.create({
            user:req.session.userid,
            items:[
                {
                    product:productid,
                    size:size,
                },
            ],
        });
        await favourite.populate("items.product");
        return res.status(201).json({message:"Added to Favourite",favourite:favourite.items});
    }
    const alreadyexists=favourite.items.some(
        (item)=>item.product.toString()===productid
    );
    if(alreadyexists){
        return res.status(400).json({message:"Product already in favourite"});
    }
    favourite.items.unshift({
        product: productid,
        size:size,
    })
    await favourite.save();
    await favourite.populate("items.product");
    res.status(200).json({message:"Added to Favourite",favourite:favourite.items});
};

exports.getfavourites=async(req,res)=>{
    const favourite=await Favourites.findOne({
        user: req.session.userid,
    }).populate("items.product");
    if(!favourite){
        return res.status(200).json({favourite:[]});
    }
    res.status(200).json({favourite:favourite.items});
};

exports.deletefavourites=async(req,res)=>{
    const{favouriteid}=req.params;
    if(!req.session.userid){
        return res.status(401).json({message:"Please Login"});
    }
    const favourite=await Favourites.findOne({
        user: req.session.userid,
    }).populate("items.product");
    if(!favourite){
        return res.status(404).json({message:"Favourite not Found"});
    }
    favourite.items=favourite.items.filter((item)=>item._id.toString()!==favouriteid);
    await favourite.save();
    await favourite.populate("items.product");
    res.status(200).json({message:"Removed from Favourite", favourite:favourite.items});
};

exports.Addcart=async(req,res)=>{
    const {productid,size}=req.body;
    if(!req.session.userid){
        return res.status(401).json({message:"Please Login"});
    }
    if(!productid||!size){
        return res.status(400).json({message:"Product & Size Required"});
    }
    let cart=await Carts.findOne({
        user:req.session.userid,
    });
    if(!cart){
        cart=await Carts.create({
            user:req.session.userid,
            items:[
                {
                    product:productid,
                    size:size,
                },
            ],
        });
        await cart.populate("items.product");
        return res.status(201).json({message:"Added to Cart",cart:cart.items});
    }
    const alreadyexists=cart.items.some(
        (item)=>item.product.toString()===productid
    );
    if(alreadyexists){
        return res.status(400).json({message:"Product already in Cart"});
    }
    cart.items.unshift({
        product: productid,
        size:size,
    })
    await cart.save();
    await cart.populate("items.product");
    res.status(200).json({message:"Added to Cart",cart:cart.items});
};

exports.getcart=async(req,res)=>{
    const cart=await Carts.findOne({
        user: req.session.userid,
    }).populate("items.product");
    if(!cart){
        return res.status(200).json({cart:[]});
    }
    res.status(200).json({cart:cart.items});
};

exports.deletecart=async(req,res)=>{
    const{productid}=req.params;
    if(!req.session.userid){
        return res.status(401).json({message:"Please Login"});
    }
    const cart=await Carts.findOne({
        user: req.session.userid,
    }).populate("items.product");
    if(!cart){
        return res.status(404).json({message:"Cart not Found"});
    }
    cart.items=cart.items.filter((item)=>item._id.toString()!==productid);
    await cart.save();
    await cart.populate("items.product");
    res.status(200).json({message:"Removed from cart", cart:cart.items});
};

exports.Addorders=async(req,res)=>{
    const { orders } = req.body;

        for (const item of orders) {
            const product = await Product.findById(item.productId);

             await Order.create({
                user:req.session.userid,
                product: product._id,
                admin: product.addedby,
                size: item.size,
                paymentmode: item.paymentmode,
                status: "Pending"
            });
        }

        await Carts.deleteMany({
            user: req.session.userid
        });

        res.status(201).json({message: "All orders placed successfully"});
}

exports.Getuserorders=async(req,res)=>{
    const orders = await Order.find({user: req.session.userid}).populate("user").populate("product").sort({ _id: -1 });

    const updatedorders = orders.map((item) => {
            const deliverydate = new Date(item.product.delivery);
            const referencedate = new Date(Number(item.product.reference));
            const today = new Date();

            deliverydate.setUTCHours(0, 0, 0, 0);
            referencedate.setUTCHours(0, 0, 0, 0);
            today.setUTCHours(0, 0, 0, 0);

            const daypassed = Math.floor(
                (today - referencedate) / (1000 * 60 * 60 * 24)
            );

            deliverydate.setUTCDate(
                deliverydate.getUTCDate() + daypassed
            );

            const onlydate = deliverydate.toLocaleDateString("en-CA", {
                timeZone: "UTC"
            });

            return {
                ...item.toObject(),
                deliverydate: onlydate
            };

        });
        res.status(200).json({orders: updatedorders});
};

exports.Getadminorders=async(req,res)=>{
    const orders = await Order.find({admin: req.session.adminid, status: { $ne: "Delivered" }}).populate("user").populate("product").sort({ _id: -1 });
    
    const updatedorders = orders.map((item) => {
            const deliverydate = new Date(item.product.delivery);
            const referencedate = new Date(Number(item.product.reference));
            const today = new Date();

            deliverydate.setUTCHours(0, 0, 0, 0);
            referencedate.setUTCHours(0, 0, 0, 0);
            today.setUTCHours(0, 0, 0, 0);

            const daypassed = Math.floor(
                (today - referencedate) / (1000 * 60 * 60 * 24)
            );

            deliverydate.setUTCDate(
                deliverydate.getUTCDate() + daypassed
            );

            const onlydate = deliverydate.toLocaleDateString("en-CA", {
                timeZone: "UTC"
            });

            return {
                ...item.toObject(),
                deliverydate: onlydate
            };

        });
        res.status(200).json({orders: updatedorders});
};

exports.Editorderstatus = async (req, res) => {
        const { status } = req.body;
        const { id } = req.params;

        const order = await Order.findByIdAndUpdate(
            id,
            { status: status },
            {returnDocument:"after"}
        );

        res.status(200).json({message: "Status updated successfully",order});
};

exports.Getadmindelivers=async(req,res)=>{
    const delivers = await Order.find({admin: req.session.adminid, status: "Delivered"}).populate("user").populate("product").sort({ _id: -1 });
        res.status(200).json({delivers});
};


exports.Searchproduct = async(req, res)=>{
    const{search=""}=req.query;
    const products = await Product.find({
        $or:[
            {name:{$regex:search, $options:"i"}},
            {productname:{$regex:search, $options:"i"}},
            {brandname:{$regex:`^${search}\\b`, $options:"i"}},
            {category:{$regex:`^${search}\\b`, $options:"i"}},
            {subcategory:{$regex:`^${search}\\b`, $options:"i"}}
        ]
    });
    res.status(200).json(products);
}

exports.Adminsearchproduct = async(req, res)=>{
    const{search=""}=req.query;
    const products = await Product.find({
        addedby:req.session.adminid,
        $or:[
            {name:{$regex:search, $options:"i"}},
            {productname:{$regex:search, $options:"i"}},
            {brandname:{$regex:`^${search}\\b`, $options:"i"}},
            {category:{$regex:`^${search}\\b`, $options:"i"}},
            {subcategory:{$regex:`^${search}\\b`, $options:"i"}}
        ]
    });
    res.status(200).json(products);
}

exports.Deleteproduct=async(req,res)=>{
    const productid=req.params.id;
    const {adminid}=req.session;
    const product=await Product.findOne({_id:productid,addedby:adminid});
    for(const image of product.images){
        await cloudinary.uploader.destroy(image.public_id);
    }
    await Product.findOneAndDelete({_id:productid,addedby:adminid});
    res.status(200).json({message:"Deleted Successfully"});
}