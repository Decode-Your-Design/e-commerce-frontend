import React from 'react'
import styles from "../../styles/home.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import ProductCard from '../weeklyDealProduct/ProductCard';
import { useRouter } from 'next/router';
import Loader from '../loader';
export default function Scooties({toggleState}) {
  const [productData,setProductData] = React.useState([])
    const getproductData = async()=>{
      const response = await  axios.get('http://localhost:8000/api/product/getProductByType/scooty')
      console.log("this is product dta",productData)
      setProductData(response.data.result)
      setLoading(false)
    }
    const[loading,setLoading] = React.useState(true)
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
          router.push(`/all-products/scooty`);
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
