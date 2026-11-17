import { createContext, useState, useEffect } from "react";

export let Ecommercestore = createContext([]);

const API_URL = import.meta.env.VITE_API_URL;

export function Ecommerceprovider({children}){

    const [isloggedin,setisloggedin] = useState(false);
    const [admindata,setadmindata] = useState(null);
    const [homeproduct, sethomeproduct] = useState([]);
    //const [search, setsearch] = useState([])
    const [searchproduct, setsearchproduct] = useState([]);
    const[productdetais,setproductdetais]=useState(null);
    const[deliverydate,setdeliverydate]=useState(null);
    const[loading,setloading]=useState(false);
    const[productid,setproductid]=useState();
    const[orders, setorders]=useState([]);
    const[delivers, setdelivers]=useState([]);


      const Searchproducts=async (search)=>{
        const response=await fetch (`${API_URL}/admin-search?search=${encodeURIComponent(search)}`,
        {credentials: "include",});
        const data= await response.json();
        setsearchproduct(data);
    }
    
    
    
      const showdetails=async(id)=>{
        const response=await fetch(`${API_URL}/productdetails/${id}`,
          {credentials: "include",});
        const data=await response.json();
        setproductdetais(data.product);
        setdeliverydate(data.deliverydate);
    };


    const editproduct=async(formdata)=>{
      const res = await fetch(`${API_URL}/edit-product-details/${productid}`,
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
         message:data.message,
      };
    }
    setproductdetais(data.product);
     return{
        success:true,
        message:data.message,
     }
    };


    
     const Addproduct = async(data,sizes)=>{
      const formdata= new FormData();

      formdata.append("productname",data.productname);
      formdata.append("brandname",data.brandname);
      formdata.append("description",data.description);
      formdata.append("category",data.category);
      formdata.append("subcategory",data.subcategory);
      formdata.append("ratings",data.ratings);
      formdata.append("price",data.price);
      formdata.append("colour",data.colour);
      formdata.append("meterial",data.meterial);
      formdata.append("delivery",data.delivery);

      sizes.forEach((size)=>{
        formdata.append("sizes",size);
      });
      
      for (const image of data.images){
        formdata.append("images",image);
      }

        const res = await fetch(`${API_URL}/addproducts`,
          {
            method:"POST",
            credentials: "include",
            body: formdata,
        });
        setloading(true);
        const result = await res.json();
        if(!res.ok){
        return{
         success:false,
         message:result.message,
      };
    }
    sethomeproduct(prevproduct =>[result.product,...prevproduct]);
    setloading(false);
     return{
        success:true,
        message:result.message,
     }
      };

      const Deleteproduct = async(id)=>{
        const res = await fetch(`${API_URL}/productdetails/${id}`,
          {
            method:"DELETE",
            credentials: "include",
        });
        const data = await res.json();
        if(res.ok){
        alert(data.message);
        sethomeproduct(prev=>prev.filter(product=>product._id!==id));
    }
    };

      useEffect(()=>{
           const Getproduct = async()=>{
              const response=await
            fetch(`${API_URL}/admin-home`, {credentials: "include"});
              const data = await response.json();
              sethomeproduct(data);
            };
          Getproduct();
        },[]); 

        useEffect(()=>{
            const getorder=async()=>{
              const response=await fetch(`${API_URL}/admin-orders`,{
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

        const UpdateStatus = async (id, status) => {
        const response = await fetch(`${API_URL}/orderstatus/${id}`,{
                method: "PUT",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ status })
            }
        );
        const data = await response.json();
        if(response.ok){
                alert(data.message);
                return;
              }
      };

      useEffect(()=>{
            const getdeliver=async()=>{
              const response=await fetch(`${API_URL}/admin-delivers`,{
                method:"GET",
                credentials:"include",
              });
              const data =await response.json();
              if(!response.ok){
                alert(data.message);
                return;
              }
              setdelivers(data.delivers);
            }
            getdeliver();
            },[]);

        const Contactus=async(formdata)=>{
        const response=await fetch(`${API_URL}/admin-contactus`,{
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
     const Admincheckauth = async()=>{
        const response=await
      fetch(`${API_URL}/admin-check-auth`, {credentials: "include"});
      if(response.ok){
        const data = await response.json();
        setisloggedin(data.isloggedin);
        setadmindata(data.admin);
      }
        else{
          setisloggedin(false);
        }
      }
    Admincheckauth();
  },[]); 

    async function Registeradmin(formdata) {
        const res = await fetch(`${API_URL}/admin-registration`,
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

    async function Loginadmin(formdata){
         const res = await fetch(`${API_URL}/admin-login`,{
            method:"POST",
            credentials: "include",
            headers:{ "Content-Type":"application/json"},
            body: JSON.stringify(formdata),
        });
        const data = await res.json();
        if(res.ok){
          setisloggedin(true);
          setadmindata(data.admin);
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

    async function Updateadmin(formdata) {
        const res = await fetch(`${API_URL}/edit-admin-info`,
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
    setadmindata(data.admin);
     return{
        success:true,
        message:data.message,
     }
    }

  async function handlelogout() {
         const res = await fetch(`${API_URL}/admin-logout`,{
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
    }



    return <Ecommercestore.Provider value={{Registeradmin,Loginadmin,handlelogout,Addproduct,Updateadmin,showdetails,deliverydate,Searchproducts,Deleteproduct,editproduct,loading,setloading,productid,setproductid,searchproduct,productdetais,isloggedin,admindata,homeproduct,orders,delivers,UpdateStatus,Contactus}}>{children}</Ecommercestore.Provider>
}
