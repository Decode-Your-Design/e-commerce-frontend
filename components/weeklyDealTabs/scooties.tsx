import React from 'react'
import styles from "../../styles/home.module.css";
import { ScootiesData } from "../../data";
import axios from 'axios';
import ProductCard from '../weeklyDealProduct/ProductCard';
import { useRouter } from 'next/router';
import Loader from '../loader';
export default function Scooties({toggleState}:any) {
  const [productData,setProductData] = React.useState<any>([])
  const[loading,setLoading] = React.useState(true)

    React.useEffect(()=>{
      const getproductData = async()=>{
        const response = await  axios.get('http://localhost:8000/api/product/getProductByType/scooty')
        console.log("this is product dta",productData)
        setProductData(response.data.result)
        setLoading(false)
      }
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
    {productData.slice(0,8).map((item:any,key:any) => (
      <div key={key} >
      <ProductCard
        item={item}

        toggleState={toggleState}
        className={
 styles.content 
        }
      />
      </div>
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
