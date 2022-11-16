import axios from "axios";
import { useRouter } from "next/router";
import React from 'react'
import styles from "../../styles/home.module.css";
const DealsSlider = ({   currentSlide }:any) => {

  const getDealsOfTheWeek = async()=>{
    const response = await axios.get(
      "http://localhost:8000/api/product/dealsOfTheWeek",
    );
    console.log("this is repsosne",response);
    if(response.data.success){
      setDeals(response.data.result)
    }
    
  }
  const [currentDeal,setCurrentDeal] = React.useState(0)
  React.useEffect(()=>{
    getDealsOfTheWeek()
 
  },[])
  const [deals,setDeals] = React.useState([])
  const next = ()=>{

    setCurrentDeal(currentDeal+1)
  
  }
  const prev = ()=>{
    setCurrentDeal(currentDeal-1)
  }
  const router = useRouter()
  return (
    <>
    {
      deals.map((deal,key)=>(
        <>
        {currentDeal==key &&
        <>
        <div className={styles.slider}>
        <div className={styles.slider__info}>
          <p className={styles.price}>
            $ {deal?.offerPrice}
          </p>
          <p className={styles.title}>
            {/* {deal?.name} */}
            <p>{deal?.name.length<20 ? deal?.name :`${deal?.name.slice(0,15)}...`}</p>
          </p>
        </div>
        <div className={styles.logo}>
          <img
          style={{cursor:'pointer'}}
          onClick={()=>router.push(`./product-detail/${deal?._id}`)}
          // src={deals[currentSlide] && deals[currentSlide].logo} />
          src="https://imgd.aeplcdn.com/1056x594/n/cw/ec/50118/hero-maestro-edge-front-three-quarter7.jpeg?q=75"/>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          disabled={currentDeal === 0}
          className={styles.btn}
          onClick={prev}
        >
          Previous deal
        </button>
        <span className={styles.footer_span}>|</span>
        <button
          disabled={currentDeal === deals.length - 1}
          className={styles.btn}
          onClick={next}
        >
          Next deal
        </button>
      </div>
      </>
}
      </>
      ))
    }
      </>
   

  );
};

export default DealsSlider;
