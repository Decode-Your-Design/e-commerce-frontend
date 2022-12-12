import styles from "../styles/add-vendor.module.css";
import React from 'react'
import {useState} from 'react'
// import apiService from './api/api.ts'
import axios from 'axios'
import { appContext } from "../context/appContext";
import { useRouter } from "next/router";
export default function AddVendor() {
const [userDetail,setUserDetail] = useState<any>({
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
  // console.log("fdg",userDetail.phone.length)
  let letAddVendor = true
  for(const key in userDetail){
if(userDetail[key]==''){
  letAddVendor=false
  alert(`${key} is Required.. ${key} आवश्यक हैं`)
}
  }
  if(userDetail?.phone.length<10 || userDetail?.phone.length>10){
    letAddVendor=false
    alert("Please Enter 10 Digit Mobile Number")
  }
  if(letAddVendor){
const response =await axios.post('https://lobster-app-ymo47.ondigitalocean.app/api/auth/signUp',userDetail)
if(response.data.success){
sessionStorage.setItem('toastifyContent',"Vendor added successfully");
sessionStorage.setItem('backgroundColor',"#28a745");
setOpenToastify(true)
router.push('/vendor-list')
}
else{
  sessionStorage.setItem('backgroundColor',"red")
  sessionStorage.setItem('toastifyContent',response.data.message)
  setOpenToastify(true)
}
  }
}
const changeRole = async()=>{
  // console.log("fdg",userDetail.phone.length)
  let letAddVendor = true
  for(const key in userDetail){
if(userDetail[key]==''){
  letAddVendor=false
  alert(`${key} is Required.. ${key} आवश्यक हैं`)
}
  }
  if(userDetail?.phone.length<10 || userDetail?.phone.length>10){
    letAddVendor=false
    alert("Please Enter 10 Digit Mobile Number")
  }
  if(letAddVendor){
const response =await axios.post('https://lobster-app-ymo47.ondigitalocean.app/api/admin/changeRole',userDetail,  { headers: {"Authorization" : `Bearer ${localStorage.getItem("accessToken")}`} })
if(response.data.success){
sessionStorage.setItem('toastifyContent',"Vendor added successfully");
sessionStorage.setItem('backgroundColor',"#28a745");
setOpenToastify(true)
router.push('/vendor-list')
}
else{
  sessionStorage.setItem('backgroundColor',"red")
  sessionStorage.setItem('toastifyContent',response.data.message)
  setOpenToastify(true)
}
  }
}
React.useEffect(()=>{
  if(localStorage.getItem('userType')!=="Admin"){
router.push('/')
  }
},[router])
const handleChange = (e:any)=>{
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
      <input maxLength={10} minLength={10} onChange={(e)=>handleChange(e)} name="phone" type="number" className={styles.input} placeholder="Enter Phone" />
      <input  onChange={(e)=>handleChange(e)} name="password" type="password" className={styles.input} placeholder="Enter Password" />
      <input  onChange={(e)=>handleChange(e)} type="text" name="address" className={styles.input} placeholder="Enter Shop Address" />
      <input  onChange={(e)=>handleChange(e)} type="text" name="shopName" className={styles.input} placeholder="Enter Shopname" />
      
      <button 
     onClick={addVendor} 
      className={styles.addVendorSignupButton} >
      Add vendor
    </button>
      <button 
     onClick={changeRole} 
      className={styles.addVendorSignupButton} >
      Change Role 
    </button>
      
    </div>
    </div>
  )
}
