import React from 'react'
import styles from "../../styles/home.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import ProductCard from '../weeklyDealProduct/ProductCard';
import { useRouter } from 'next/router';
import Loader from '../loader';
export default function Cars({toggleState}:any) {
  const [productData,setProductData] = React.useState([])

    const[loading,setLoading] = React.useState(true)
    const getproductData = async()=>{
      const response = await  axios.get('https://lobster-app-ymo47.ondigitalocean.app/product/getProductByType/car')
      console.log("this is product dta",productData)
      setProductData(response.data.result)
      setLoading(false)
    }
    React.useEffect(()=>{
      getproductData()
    },[])
    console.log()
    const router = useRouter()
    return (
      <>
      {
        loading ? 
  <>
  <Loader/>
  </>
  
  :
      <>{
  productData.length==0 ? 
  <h1>
    No Products
  </h1>
  :
        <>
     <div className={styles.productList}>
      {productData.slice(0,8).map((item:any, key:any) => (
        <div key={key} >
        <ProductCard
          item={item}
          toggleState={toggleState}
          // className={
          //   toggleState === index ? styles.content : styles.noContent
          // }
          className={
   styles.content 
          }
        />
        </div>
      ))}
    </div>
    <button
           onClick={() => {
            router.push(`/all-products/car`);
          }}
          className={styles.viewAllButton}
        >
          View All
        </button>
        </>
      }
   
        </>
  }
    </>
    )
}
