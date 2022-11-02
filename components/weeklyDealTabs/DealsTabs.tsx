import { useRouter } from "next/router";
import { useState } from "react";
import { PRODUCT } from "../../data";
import styles from "../../styles/home.module.css";
import ProductCard from "../weeklyDealProduct/ProductCard";
const DealsTabs = () => {
  const [toggleState, setToggleState] = useState(1);

const [currentTab,setCurrentTab] = useState("Scooty")
  const vehicleTabs =[
    {heading:"Scooty",url:"scooty"},

    {
      heading:"Cars",url:"cars"
    }
    ,    {
      heading:"Bikes",url:"bikes"
    },
  ]
  const toggleTab  = (index:any)=>{
    setToggleState(index)
  }
  const router = useRouter()
  return (
    <>
      <div className={styles.tabs}>
 {
  vehicleTabs.map((vehicleType,key)=>(
<>
<button
          onClick={() => {
            toggleTab(key+1)
            setCurrentTab(vehicleType.heading)
          }
          }
          className={toggleState === key+1 ? styles.activeTabs : styles.tabsBtn}
        >
          {vehicleType.heading}
        </button>
        <span className={styles.footer_span}>|</span>
        
        </>
  )
  )
 }
 
   
      </div>
      <div  className={styles.productList}>
        {PRODUCT.map((item,index) => (
          <ProductCard item={item} toggleState={toggleState} className={toggleState === index ? styles.content : styles.noContent}/>
        ))}
      </div>
        <button
   onClick={()=>{
    router.push(`/all-products/${currentTab}`)
   }}
        className={styles.viewAllButton} >
          View All
        </button>
    </>
  );
};

export default DealsTabs;
