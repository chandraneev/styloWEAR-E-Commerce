require("dotenv").config();
const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors');
const session=require("express-session");
const {MongoStore}=require("connect-mongo");
const userRoutes=require("./Router/UserRouter");
const productRoutes=require("./Router/ProductRouter");
const adminRoutes=require("./Router/AdminRouter");
const contactRoutes=require("./Router/ContactRouter");

const app= express();

app.set("trust proxy", 1);

const PORT= process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174", process.env.USER_FRONTEND_URL, process.env.ADMIN_FRONTEND_URL],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    session({
        secret:process.env.SESSION_SECRET,
        resave:false,
        saveUninitialized:false,
        store: MongoStore.create({mongoUrl: process.env.DB_PATH,}),
        cookie:{ httpOnly: true, secure: true, sameSite: "none", maxAge: 24 * 60 * 60 * 1000,},
    })
);

app.use(userRoutes);
app.use(productRoutes);
app.use(adminRoutes);
app.use(contactRoutes);

mongoose.connect(process.env.DB_PATH).then(()=>{ console.log("connected");
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});
}).catch((err)=>{console.log(err);
});
