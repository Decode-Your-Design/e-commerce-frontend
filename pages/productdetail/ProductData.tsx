import React, { useState } from 'react'
import styles from '../../styles/ProductDetail.module.css'
import star from '../../public/star.png'
import Image from 'next/image'
import downArrow from '../../public/down-arrow.png'
import upArrow from '../../public/up-arrow.png'
export default function ProductData() {
    const[arrowDown,setArrowDown] = useState(true)
    function getColorCode() {
        var makeColorCode = '0123456789ABCDEF';
        var code = '#';
        for (var count = 0; count < 6; count++) {
           code =code+ makeColorCode[Math.floor(Math.random() * 16)];
        }
        return code;
     }
  return (
    <div style={{padding:"1rem"}} >
    <div className={styles.productData} >
        <h1>
            Tshirt for man
        </h1>
       <span className={styles.ratingDiv} >
        4.6
        <Image style={{filter:"invert(1)"}} width="15px"  height="15px" src={star} />
       </span>
       <span>
        44 rating
       </span>
       <span>
22 reviews
       </span>
        <p>
            <span className={styles.offerPrice}>
            ₹100
            </span>
            <span className={styles.actualPrice} >
                ₹200
            </span>
            <span className={styles.discount}  >
                50% off
            </span>
        </p>
        <span>
            This are best quality t shirts 
        </span>
    </div>
{/* Attributes div   */}
<div>
    <div className={styles.attributeSection}>
        <h1> Size:</h1>
        <div  className={styles.sizeAttributes} >
        {
            [0,1,2].map(()=>(
                <div   className={styles.attributeDiv} >
                    <p>
                        Full
                    </p>
                    </div>
            ))
        }
        </div>
        <h1>Color:</h1>
        <div  className={styles.sizeAttributes} >
        {
            [0,1,2].map(()=>(
                <div style={{backgroundColor:getColorCode()}}   className={styles.colorattributeDiv} >
                    </div>
            ))
        }
        </div>
    </div>
</div>
<div className={styles.dropdown} >
    <p>

Product Detail
    </p>
    {
        arrowDown ?
    <Image
    onClick={()=>setArrowDown(true)}
    width="30px" height="30px" src={downArrow} />
    :
    <Image
    onClick={()=>setArrowDown(false)}
    width="30px" height="30px" src={upArrow} />
}
</div>
    </div>
  )
}
