import React from 'react'
import styles from "../../styles/vehicle.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import { useRouter } from 'next/router';
import { RiDeleteBin5Fill } from 'react-icons/ri';
export default function Scooties({}) {
  const router = useRouter()
  const [productData,setProductData] = React.useState([])
    const getproductData = async()=>{
      const response = await  axios.get(`http://localhost:8000/api/product/getProductByType/${router.query.vehicleType}`)
      console.log("this is product dta",productData)
      setProductData(response.data.result)
    }
    React.useEffect(()=>{
        getproductData()

    },[])
    console.log()
  return (
    <>
  <div className={styles.vehicleHeading}>
        <h1>{router.query.vehicleType}</h1>
      </div>
      <div className={styles.vehicleProducts}>
        {productData.map((product) => (
          <>
            <div
                 onClick={()=>{
                  router.push(`/product-detail/${product._id}`)
                 }} 
            className={styles.vehicleProductCard}>
              <img src="https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg" />
              <div 
        
              className={styles.priceSection}>
                {/* <p>{product?.name}</p> */}
                <p>{product?.name.length<15 ? product?.name :`${product?.name.slice(0,15)}...`}</p>
                <h3>
                  <span className={styles.offerPrice}>₹{product?.offerPrice}</span>{" "}
                  <span className={styles.actualPrice}>₹{product?.actualPrice}</span>
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
</>
  )
}
