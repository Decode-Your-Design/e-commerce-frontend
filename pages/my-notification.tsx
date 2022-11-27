import React, { useContext } from 'react'
import axios from 'axios';
import styles from '../styles/my-notification.module.css'
import { useRouter } from 'next/router';
import { appContext } from '../context/appContext';
import Loader from '../components/loader';

export default function MyNotification() {
    const [contactData,setContactData] = React.useState([])
    const {openToastify,setOpenToastify} = useContext(appContext)
    const[loading,setLoading] = React.useState(true)
    const router = useRouter()
    const getNotification = async()=>{
        const response = await axios.post(
            `http://localhost:8000/api/contact/getContactQuery`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
          console.log("fgd",response)
          if(response.data.success){
            setLoading(false)
            setContactData(response.data.result)
          }
          else{
            sessionStorage.setItem('backgroundColor',"red")
            sessionStorage.setItem("toastifyContent",response.data.message)
            setOpenToastify(true)
          }
    }
    React.useEffect(()=>{
      if(localStorage.getItem("userType")=="Admin"){
// getNotification()
async()=>{
  const response = await axios.post(
      `http://localhost:8000/api/contact/getContactQuery`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    console.log("fgd",response)
    if(response.data.success){
      setLoading(false)
      setContactData(response.data.result)
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
}
      }
      else{router.push('/')
      }
    },[router,setOpenToastify])

  return (

    
      loading ? 
      <Loader/>
:
    <>
    {
      contactData.length==0 ?
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{marginTop:"1rem"}} >
        No Vendors
      </h1>
      </div>
      :
    <div  >
{
    contactData.map((contact:any,key)=>(
<div key={key} className={styles.notificationCard}>
<p style={{marginTop:"0.5rem"}}> <span style={{fontWeight:"bold"}} > Name </span> : {contact?.fullName}</p>
<p style={{marginTop:"0.5rem"}}> <span style={{fontWeight:"bold"}} > Phone </span> : {contact?.phone}</p>
<p style={{marginTop:"0.5rem"}}> <span style={{fontWeight:"bold"}} > Message </span> : {contact?.address}</p>
<p style={{marginTop:"0.5rem"}}> <span style={{fontWeight:"bold"}} > Message </span> : {contact?.message}</p>
</div>
    ))
}
    </div>
}
    </>
  )
}
