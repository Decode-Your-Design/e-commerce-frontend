import styles from "../styles/add-vendor.module.css";
import React from 'react'
import {useState} from 'react'
import apiService from './api/api'
import http from "./api/http";
import axios from 'axios'
export default function AddVendor() {
const [userDetail,setUserDetail] = useState({
  fullName:"",
  phone:"",
  userType:"Vendor",
  password:"",
  shopName:"",
  vendorAddress:""

})
const addVendor = async()=>{
const formdata = new FormData()
formdata.append("fullName",userDetail.fullName)
axios.defaults.headers.post["Content-Type"] = "multipart/form-date"
await axios.post('http://localhost:8000/api/user/addUser',formdata)
    //   http.post('/user/addUser',userDetail).then((response:any)=>{

    //   })
    // }
}
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
      <input  onChange={(e)=>handleChange(e)} type="text" name="vendorAddress" className={styles.input} placeholder="Enter your address" />
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
