const cloudinary = require("../Config/Cloudinary");

const uploadimagetocloud=(file)=>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream(
            {
                folder:"products",
                resource_type:"image",
            },
            (error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            }
        ).end(file.buffer);
    });
};

module.exports=uploadimagetocloud;
