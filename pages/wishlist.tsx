import React, { useState } from "react";
import styles from "../styles/wishlist.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Header from "../components/header/header";
import { useRouter } from "next/router";
import axios from "axios";
import { appContext } from "../context/appContext";
import Loader from "../components/loader";
export default function wishlist() {
  const router = useRouter()
  const [productData,setProductData] = React.useState([])
  const [loading,setLoading] = useState(true)
  const {setOpenToastify} = React.useContext(appContext)
  const getMyWishlistData  = async()=>{
    const response = await  axios.get('http://localhost:8000/api/wishlist/getWishlistProduct',{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }

    })
    console.log("thhis is response",response)
    setProductData(response.data.result)
    setLoading(false)
  }
  const deleteItem = async(productId)=>{
    setLoading(true)
    const response = await  axios.post(`http://localhost:8000/api/wishlist/removeProductFromWishlist/${productId}`,null,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
  
    console.log('this is response',response)
    if(response.data.success){
      setLoading(false)
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem('toastifyContent',response.data.message)
      setOpenToastify(true)
      getMyWishlistData()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem('toastifyContent',response.data.message)
      setOpenToastify(true)
    }
  }
  React.useEffect(()=>{
    
    if(localStorage.getItem("accessToken")==null || localStorage.getItem("accessToken")=='null' ){

      router.push('/')
      
    }
    else{
      getMyWishlistData()

    }
  },[])
  
  return (
    <>
    {
      loading ? 
      <Loader/>
    :
    <>
    {
       productData.length==0 ?
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{marginTop:"1rem"}} >
        No Product in Wishlist
      </h1>
      </div>
    :
    <>
      <div className={styles.wishlistHeading}>
        <h1>My Wishlist</h1>
      </div>
      <div className={styles.wishlistProducts}>
        {productData.map((ele) => (
          <>
            <div 
    
            className={styles.wishlistProductCard}>
              <RiDeleteBin5Fill 
              onClick={(event)=>{
                const id = ele.product._id
                console.log("this is product",ele.product,ele.product._id)
                deleteItem(id)
                // event.stopPropgation()
                
              }}
              className={styles.deleteIcon} />
              <img
                      onClick={()=>{
                        router.push(`/product-detail/${ele.product._id}`)
                      }}
              src="https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg" />
              <div 
             onClick={()=>{
              router.push(`/product-detail/${ele.product._id}`)
             }} 
              className={styles.priceSection}>
                <p>{ele.product?.name.length<15 ? ele.product?.name :`${ele.product?.name.slice(0,15)}...`}</p>
                {/* <p>{ele.product?.name}</p> */}
                <h3>
                  <span className={styles.offerPrice}>₹{ele.product?.actualPrice}</span>{" "}
                  <span className={styles.actualPrice}>₹{ele.product?.offerPrice}</span>
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
      </>
}
    </>
}
    </>
  );
}
