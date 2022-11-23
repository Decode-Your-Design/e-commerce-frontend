import styles from "../styles/contact.module.css";
import React from 'react'
import {useState} from 'react'
import axios from "axios";
import { useRouter } from "next/router";
import { appContext } from "../context/appContext";
export default function ContactAdmin() {
const [contactData,setContactData]  = useState({
  message:"I want to become a vendor"
})
  const handleChange = (e)=>{
    setContactData({...contactData,[e.target.name]:e.target.value})
  }
  const {openToastify,setOpenToastify} = React.useContext(appContext)
  const router = useRouter()
  const contactAdmin = async()=>{
    const response = await axios.post(
      `http://localhost:8000/api/contact/contactAdmin`,contactData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if(response.data.success){
      sessionStorage.setItem('backgroundColor',"#28a745")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
    
  }
  React.useEffect(()=>{
    if(localStorage.getItem("userType")!=='Customer' ){
      router.push('/')
    }
  },[])
  return (
    <div
    className={styles.contactSection}
    >
      <div className={styles.imageDiv} >

      </div>
    
    <div className={styles.contactFields} >
<h1>
  Contact Admin
</h1>
    <input
      onChange={(e)=>{
        handleChange(e)
      }}
      name="fullName"
      type="text"
      className={styles.input} placeholder="Enter your name" />
      <input
      onChange={(e)=>{
        handleChange(e)
      }}
      name="phone"
      type="number"
      className={styles.input} placeholder="Enter phone number" />
      <input
      onChange={(e)=>{
        handleChange(e)
      }}
      name="address"
      type="text"
      className={styles.input} placeholder="Enter your address" />
      <input
      value={contactData.message}
      name="message"
            onChange={(e)=>{
              handleChange(e)
            }}
      className={styles.input} placeholder="Enter your message" />
  
        
      <button 
      onClick={()=>{
        contactAdmin()
      }}
      className={styles.contactSignupButton} >
        Request to Become a Vendor
      </button>
 

      
    </div>
    </div>
  )
}
