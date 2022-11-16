import styles from "../styles/add-vendor.module.css";
import React from 'react'
import {useState} from 'react'
import apiService from './api/api'
import http from "./api/http";
import axios from 'axios'
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
export default function AddVendor() {
const [userDetail,setUserDetail] = useState({
  fullName:"",
  phone:"",
  userType:"Vendor",
  password:"",
  shopName:"",
  address:""

})
const router = useRouter()
const {openToastify,setOpenToastify} = React.useContext(appContext)
const addVendor = async()=>{
  
const response =await axios.post('http://localhost:8000/api/auth/signUp',userDetail)
if(response.data.success){
sessionStorage.setItem('toastifyContent',"Vendor added successfully");
sessionStorage.setItem('backgroundColor',"#28a745");
setOpenToastify(true)
}
else{
  sessionStorage.setItem('backgroundColor',"red")
  sessionStorage.setItem('toastifyContent',response.data.message)
  setOpenToastify(true)
}
}
React.useEffect(()=>{
  if(localStorage.getItem('userType')!=="Admin"){
router.push('/')
  }
},[])
const handleChange = (e)=>{
  setUserDetail({...userDetail,[e.target.name]:e.target.value})
}
  return (
    <div
    className={styles.addVendorSection}
    >

    
    <div className={styles.addVendorFields} >
      <h1>
        Add New Vendor
      </h1>
      <input onChange={(e)=>handleChange(e)} name="fullName" className={styles.input} placeholder="Enter Name" />
      <input onChange={(e)=>handleChange(e)} name="phone" type="text" className={styles.input} placeholder="Enter Phone" />
      <input  onChange={(e)=>handleChange(e)} name="password" type="password" className={styles.input} placeholder="Enter Password" />
      <input  onChange={(e)=>handleChange(e)} type="text" name="address" className={styles.input} placeholder="Enter your address" />
      <input  onChange={(e)=>handleChange(e)} type="text" name="shopName" className={styles.input} placeholder="Enter your shopname" />
      
      <button 
     onClick={addVendor} 
      className={styles.addVendorSignupButton} >
      Add vendor
    </button>

     
      
    </div>
    </div>
  )
}
