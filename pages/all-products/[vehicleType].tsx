import React from 'react'
import styles from "../../styles/vehicle.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import { useRouter } from 'next/router';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import Loader from '../../components/loader';
import Image from 'next/image';
import Head from 'next/head';
export default function Scooties({}) {
  const router = useRouter()
  const [productData,setProductData] = React.useState([])
  const[loading,setLoading] = React.useState(true)
    const getproductData = async()=>{
      const response = await  axios.get(`https://lobster-app-ymo47.ondigitalocean.app/api/product/getProductByType/${router.query.vehicleType}`)
      console.log("this is product dta",productData)
      setProductData(response.data.result)
      setLoading(false)
    }
    React.useEffect(()=>{
      if(router.query.vehicleType!==undefined){
        getproductData()
      }

    },[router])
    console.log()
  return (
    <>
            <Head>
    <title>Second hand / used {router?.query?.vehicleType} in Udaipur </title>
    <meta name="description" content={`Second hand / used ${router?.query?.vehicleType} in Udaipur`}/>
  </Head>
    {
      loading ? 
      <Loader/>
    :
    <>
  <div className={styles.vehicleHeading}>
        <h1>{router.query.vehicleType}</h1>
      </div>
      <div className={styles.vehicleProducts}>
        {productData.map((product:any) => (
          <>
            <div
                 onClick={()=>{
                  router.push(`/product-detail/${product._id}`)
                 }} 
            className={styles.vehicleProductCard}>
              <img alt="" src={`data:image/jpeg;base64,${product?.frontImage.data}`} />
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
}
</>
  )
}
