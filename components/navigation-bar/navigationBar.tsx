import React, { useState } from "react";
import styles from "../../styles/navigationbar.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import MegaMenu from "../megaMenu/megaMenu";
import { navigationItems } from "../../data";
import { useRouter } from "next/router";
import {RiMenuFill,RiCloseFill} from 'react-icons/ri'

export default function NavigationBar() {
  const [currentHovered, setCurrentHovered] = useState(null);
  const[openNavDrawer,setOpenNavDrawer] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false);
  const [timeOutId, setTimeoutId] = useState();
  const router = useRouter();
  // let accessToken ;
  // let userType;
const accessToken = window?.localStorage?.getItem("accessToken")
const userType= window?.localStorage?.getItem("userType")

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.logoDiv}>
          <img
          alt=""
   
          onClick={()=>router.push('/')}
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Car-Logo-Design-Source-PNG-Transparent.png"
            className={styles.logo}
          />
        </div>
        <div className={styles.navigationItems}>
          <p 
          onClick={()=>router.push('/home')} 
           > 
            Home
          </p>
          <p 
          onClick={()=>router.push('/about-us')} 
           > 
            About us
          </p>
          {
            window.localStorage.getItem("accessToken") &&
            <button
            onClick={() => {
              router.push("/wishlist");
            }}
            className={styles.headerButton}
          >
            My wishlist
          </button>
          }
      
       
       
         {userType=="Vendor"
         
         &&
         <button
         onClick={() => {
           router.push("/vendor-product-list");
           // setOpenDrawer(!openDrawer);
         }}
         className={styles.headerButton}
       >
         My Products
       </button>
         }
     {
      accessToken &&
      <button
      onClick={() => {
        router.push("/my-profile");
        // setOpenDrawer(!openDrawer);
      }}
      className={styles.headerButton}
    >
      My Profile
    </button>
     }

         
        {
          userType =="Admin" &&
          
          <>
           <button
            onClick={() => {
              router.push("/add-vendor");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            Add vendor
          </button>
         
          <button
            onClick={() => {
              router.push("/vendor-list");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
             Vendor List
          </button>
         
          </>
        }
        {
          userType=="Customer" &&
                <button
                onClick={() => {
                  router.push("/contact-admin");
                  // setOpenDrawer(!openDrawer);
                }}
                className={styles.headerButton}
              >
                 Become a vendor
              </button>
        }
             {
            accessToken ? 
            <button
            onClick={() => {
              window.localStorage.clear();
              
              router.push("/");
              window.location.reload()
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >

            Logout
          </button>
          :
          <button
          onClick={() => {
            router.push("/login");
            // setOpenDrawer(!openDrawer);
          }}
          className={styles.headerButton}
        >
          Login
        </button>
          }
        
        {
          userType =="Admin" &&
           <button
            onClick={() => {
              router.push("/my-notification");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            Notification
          </button>
        }
          
        </div>
        <div  className={styles.mobileNavigationItem} >
<RiMenuFill 
 
 onClick={()=>{
  setOpenNavDrawer(true)

 }}
 />
     
        {
          openNavDrawer &&
        <div className={styles.navDrawer} >
            <p 
          onClick={()=>{router.push('/home') 
            setOpenNavDrawer(false)}} 
           > 
            Home
          </p>
          <p 
          onClick={()=>{router.push('/about-us')
          setOpenNavDrawer(false)
        }} 
           > 
            About us
          </p>
             {
            window.localStorage.getItem("accessToken") &&
            <p
            onClick={() => {
              setOpenNavDrawer(false)
              router.push("/wishlist");
              
            }}
            
          >
            My wishlist
          </p>
          }
      
       
       
         {userType=="Vendor"
         
         &&
         <p
         onClick={() => {
          setOpenNavDrawer(false)
           router.push("/vendor-product-list");
           // setOpenDrawer(!openDrawer);
         }}
         
       >
         My Products
       </p>
         }
     {
      accessToken &&
      <p
      onClick={() => {
        setOpenNavDrawer(false)
        router.push("/my-profile");
        // setOpenDrawer(!openDrawer);
      }}
      
    >
      My Profile
    </p>
     }

         
        {
          userType =="Admin" &&
          
          <>
           <p
            onClick={() => {
              setOpenNavDrawer(false)
              router.push("/add-vendor");
              // setOpenDrawer(!openDrawer);
            }}
            
          >
            Add vendor
          </p>
         
          <p
            onClick={() => {
              setOpenNavDrawer(false)
              router.push("/vendor-list");
              // setOpenDrawer(!openDrawer);
            }}
            
          >
             Vendor List
          </p>
         
          </>
        }
        {
          userType=="Customer" &&
                <p
                onClick={() => {
                  setOpenNavDrawer(false)
                  router.push("/contact-admin");
                  // setOpenDrawer(!openDrawer);
                }}
                
              >
                 Become a vendor
              </p>
        }
             {
            accessToken ? 
            <p
            onClick={() => {
              setOpenNavDrawer(false)
              window.localStorage.clear();
              
              router.push("/");
              window.location.reload()
              // setOpenDrawer(!openDrawer);
            }}
            
          >

            Logout
          </p>
          :
          <p
          onClick={() => {
            setOpenNavDrawer(false)
            router.push("/login");
            // setOpenDrawer(!openDrawer);
          }}
          
        >
          Login
        </p>
          }
        
        {
          userType =="Admin" &&
           <p
            onClick={() => {
              setOpenNavDrawer(false)
              router.push("/my-notification");
              // setOpenDrawer(!openDrawer);
            }}
            
          >
            Notification
          </p>
}
<RiCloseFill
onClick={()=> setOpenNavDrawer(false)}
className={styles.closeIcon} />
        </div>
        }
  
  </div>
      </div>
    </>
  );
}
