import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/vendor-list.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import Header from "../components/header/header";
import PopupForm from "../components/popup-form/popup-form";
import axios from 'axios'
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
import Loader from "../components/loader";
export default function VendorList() {
  const [openForm, setOpenForm] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const {setOpenToastify} = useContext(appContext)
  const inputData = [
    { placeholder: "Name", value: "" },
    { placeholder: "Actual Price", value: "" },
    { placeholder: "Offer Price", value: "" },
    { placeholder: "Offer Price", value: "" },
    { placeholder: "Short Description", value: "" },
    { placeholder: "Long Description", value: "" },
  ];
  const router = useRouter()
  const [vendorList,setVendorList] = useState([])
  const [loading,setLoading] = useState(true)
  const getVendorList = async()=>{
    const response =await axios.get('http://localhost:8000/api/admin/getAllVendor',    { headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} })
    setLoading(false)
    if(response.data.success){
      setVendorList(response.data.result)
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem('toastifyContent',response.data.message)
      setOpenToastify(true)
      
    }
 
  }
  useEffect(()=>{
    if(localStorage.getItem("userType")!=='Admin'){
      router.push('/')
    }
    else{
      getVendorList()
    }
      
  },[router,setOpenToastify])
  const deleteVendor = async(id:any)=>{
    setLoading(true)
    const response =await axios.get(`http://localhost:8000/api/admin/removeVendor/${id}`, { headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} })
         if(response.data.success){
    sessionStorage.setItem('toastifyContent',response.data.message);
    sessionStorage.setItem('backgroundColor',"red");
    setOpenToastify(true)
    getVendorList()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  }
console.log("this is loading",loading)

  return (
    
      loading ? 
      <Loader/>
    
    :
    <>
    {
       vendorList.length==0 ?

      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{marginTop:"1rem"}} >
        No Vendors
      </h1>
      </div>
    
      :
      <>
      <div className={styles.vendorListHeading}>
      <h1>Vendor List</h1>
    </div>
      <div className={styles.vendorListProducts}>
        {vendorList.map((vendor:any,key) => (
          <>{
            vendor?.isActive &&
          
            <div className={styles.vendorListProductCard}>
            <RiDeleteBin5Fill 
            onClick={()=>deleteVendor(vendor._id)}
            className={styles.deleteIcon} />
                <p><span style={{fontWeight:"bold"}} >Name </span> : {vendor.fullName}</p>
                <p> <span style={{fontWeight:"bold"}}> Phone </span> : {vendor.phone}</p>
                <p> <span style={{fontWeight:"bold"}}> Shop Name  </span> : {vendor.shopName} </p>
                <p> <span style={{fontWeight:"bold"}}> Address  </span> : {vendor.address} </p>
                
            </div>
}
          </>
        ))}
</div>
</>
}
</>

  );
}
