import React from 'react'
import styles from "../../styles/home.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import ProductCard from '../weeklyDealProduct/ProductCard';
import { useRouter } from 'next/router';
export default function Cars({toggleState}) {
  const [productData,setProductData] = React.useState([])
    const getproductData = async()=>{
      const response = await  axios.get('http://localhost:8000/api/product/getProductByType/car')
      console.log("this is product dta",productData)
      setProductData(response.data.result)
    }
    React.useEffect(()=>{
        getproductData()

    },[])
    console.log()
    const router = useRouter()
  return (
    <>
    <div className={styles.productList}>
    {productData.slice(0,8).map((item, index) => (
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
  )
}
