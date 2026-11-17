import { createContext, useState, useEffect } from "react";

export let Ecommercestore = createContext([]);

const API_URL = import.meta.env.VITE_API_URL;

export function Ecommerceprovider({children}){
    const [isloggedin,setisloggedin] = useState(false);
    const [userdata,setuserdata] = useState(null);
    const [homeproduct, sethomeproduct] = useState([]);
    const [searchproduct, setsearchproduct] = useState([]);

    const Searchproducts=async (search)=>{
      const response=await fetch (`${API_URL}/search?search=${encodeURIComponent(search)}`,
      {credentials: "include",});
      const data= await response.json();
      setsearchproduct(data);
    }


    const [subcategory,setsubcategory]=useState("");
    const [menproduct, setmenproduct] = useState([]);
    const [womenproduct, setwomenproduct] = useState([]);
    const [kidsproduct, setkidsproduct] = useState([]);
    const [ethnicsproduct, setethnicsproduct] = useState([]);
    const [otherproduct, setotherproduct] = useState([]);


    useEffect(()=>{
      const Menproducts = async ()=>{
        let url=`${API_URL}/men`;
        if(subcategory){
          url=url+`?subcategory=${subcategory}`;
        }
        const response=await fetch(url);
        const data=await response.json();
        setmenproduct(data);
      };
      Menproducts();
    },[subcategory]);
     

    useEffect(()=>{
      const Womenproducts = async ()=>{
        let url=`${API_URL}/women`;
        if(subcategory){
          url=url+`?subcategory=${subcategory}`;
        }
        const response=await fetch(url);
        const data=await response.json();
        setwomenproduct(data);
      };
      Womenproducts();
    },[subcategory]);
    

    useEffect(()=>{
      const Kidsproducts = async ()=>{
        let url=`${API_URL}/kids`;
        if(subcategory){
          url=url+`?subcategory=${subcategory}`;
        }
        const response=await fetch(url);
        const data=await response.json();
        setkidsproduct(data);
      };
      Kidsproducts();
    },[subcategory]);
    

     useEffect(()=>{
      const category=["Men Ethnic","Women Ethnic"];
      const Ethnicsproducts = async ()=>{
        let url=`${API_URL}/ethnics?category=${category.join(",")}`;
        if(subcategory){
          url=url+`&subcategory=${subcategory}`;
        }
        const response=await fetch(url);
        const data=await response.json();
        setethnicsproduct(data);
      };
      Ethnicsproducts();
    },[subcategory]);
    

    useEffect(()=>{
      const category=["Men Other Accessories","Women Other Accessories"];
      const OtherAccessoriesproducts = async ()=>{
        let url=`${API_URL}/other-accessories?category=${category.join(",")}`;
        if(subcategory){
          url=url+`&subcategory=${subcategory}`;
        }
        const response=await fetch(url);
        const data=await response.json();
        setotherproduct(data);
      };
      OtherAccessoriesproducts();
    },[subcategory]);

    
    const[productdetais,setproductdetais]=useState(null);
    const[deliverydate,setdeliverydate]=useState(null);
    
      const showdetails=async(id)=>{
        const response=await fetch(`${API_URL}/productdetails/${id}`,
          {credentials: "include",});
        const data=await response.json();
        setproductdetais(data.product);
        setdeliverydate(data.deliverydate)
    };


    const[favourites, setfavourites]=useState([]);

    const addfavourite=async(productid,size)=>{
      if(!size){
        alert("Please Select Size");
        return;
      }
      const response=await fetch(`${API_URL}/favourites`,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            credentials: "include",
            body: JSON.stringify({productid,size}),
        });
        const data = await response.json();
        if(!response.ok){
          alert(data.message);
          return;
      }
      setfavourites(data.favourite);
      alert(data.message);
    };
    

    useEffect(()=>{
    const getfavourites=async()=>{
      const response=await fetch(`${API_URL}/favourites`,{
        method:"GET",
        credentials:"include",
      });
      const data =await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      console.log()
      setfavourites(data.favourite);
    }
    getfavourites();
    },[]);


    const deletefavourite=async(favouriteid)=>{
      const response=await fetch(`${API_URL}/favourites/${favouriteid}`,{
            method:"DELETE",
            credentials: "include",
        });
        const data = await response.json();
        if(!response.ok){
          alert(data.message);
          return;
      }
      setfavourites(data.favourite)
      alert(data.message);
    };


    const[carts, setcarts]=useState([]);

    const addcart=async(productid,size)=>{
      if(!size){
        alert("Please Select Size");
        return;
      }
      const response=await fetch(`${API_URL}/cart`,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            credentials: "include",
            body: JSON.stringify({productid,size}),
        });
        const data = await response.json();
        if(!response.ok){
          alert(data.message);
          return;
      }
      setcarts(data.cart);
      alert(data.message);
    };
    

    useEffect(()=>{
    const getcart=async()=>{
      const response=await fetch(`${API_URL}/cart`,{
        method:"GET",
        credentials:"include",
      });
      const data =await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      setcarts(data.cart);
    }
    getcart();
    },[]);


    const deletecart=async(productid)=>{
      const response=await fetch(`${API_URL}/cart/${productid}`,{
            method:"DELETE",
            credentials: "include",
        });
        const data = await response.json();
        if(!response.ok){
          alert(data.message);
          return;
      }
      setcarts(data.cart);
      alert(data.message);
    };

    const[orders, setorders]=useState([]);

    const addorder=async(orders)=>{
      const response=await fetch(`${API_URL}/orders`,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            credentials: "include",
            body: JSON.stringify({orders}),
        });
        const data = await response.json();
        if(response.ok){
        return{
        success:true,
        message:data.message,
     }
      }
    }

    useEffect(()=>{
    const getorder=async()=>{
      const response=await fetch(`${API_URL}/orders`,{
        method:"GET",
        credentials:"include",
      });
      const data =await response.json();
      if(!response.ok){
        alert(data.message);
        return;
      }
      setorders(data.orders);
    }
    getorder();
    },[]);

    useEffect(()=>{
     const Homedata = async()=>{
        const response=await
      fetch(`${API_URL}/e-commerce`, {credentials: "include"});
        const data = await response.json();
        sethomeproduct(data);
      };
    Homedata();
  },[]); 

  const Contactus=async(formdata)=>{
      const response=await fetch(`${API_URL}/contactus`,{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            credentials: "include",
            body: JSON.stringify(formdata),
        });
        const data = await response.json();
        if(response.ok){
        return{
        success:true,
        message:data.message,
     }
      }
    }
    
    useEffect(()=>{
     const Checkauth = async()=>{
        const response=await
      fetch(`${API_URL}/check-auth`, {credentials: "include"});
      if(response.ok){
        const data = await response.json();
        setisloggedin(data.isloggedin);
        setuserdata(data.user);
      }
        else{
          setisloggedin(false);
        }
      }
    Checkauth();
  },[]); 

    async function Registeruser(formdata) {
        const res = await fetch(`${API_URL}/registration`,
          {
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(formdata),
        });
        const data = await res.json();
        if(!res.ok){
        return{
         success:false,
         message:data.errors.map(err=>err.msg).join("\n"),
      };
    }
     return{
        success:true,
        message:data.message,
     }
    }


     async function Updateuser(formdata) {
        const res = await fetch(`${API_URL}/edit-user-info`,
          {
            method:"PUT",
            credentials: "include",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(formdata),
        });
        const data = await res.json();
        if(!res.ok){
        return{
         success:false,
         message:data.errors.map(err=>err.msg).join("\n"),
      };
    }
    setuserdata(data.user);
     return{
        success:true,
        message:data.message,
     }
    }

    async function Loginuser(formdata){
         const res = await fetch(`${API_URL}/login`,{
            method:"POST",
            credentials: "include",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(formdata),
        });
        const data = await res.json();
        if(res.ok){
          setisloggedin(true);
          setuserdata(data.user);
          return {
            success:true,
            message:data.message,
          }
        }else{
          return{
            success:false,
            message:data.message,
     };
        }
    }

  async function handlelogout() {
         const res = await fetch(`${API_URL}/logout`,{
            method:"POST",
            credentials: "include",
        });
        const data = await res.json();
        if(res.ok){
            setisloggedin(false);
            return{
                success:true,
                message:data.message,
            };
        }
            return{
                success:true,
                message:data.message,
            }
    }


    return <Ecommercestore.Provider value={{isloggedin,userdata,homeproduct,productdetais,favourites,carts,orders,Registeruser,Updateuser,Loginuser,handlelogout,setsubcategory,showdetails,deliverydate,addfavourite,deletefavourite,addcart,deletecart,Searchproducts,setmenproduct,setwomenproduct,setkidsproduct,setethnicsproduct,setotherproduct,addorder,setcarts, menproduct,womenproduct,kidsproduct,ethnicsproduct,otherproduct,searchproduct,Contactus}}>{children}</Ecommercestore.Provider>
}