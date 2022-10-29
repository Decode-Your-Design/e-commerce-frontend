import React, { useState } from 'react' 
import { appContext } from '../../context/appContext'
import styles from '../../styles/ProductDetail.module.css' 


export default function ProductImage() { 
    const {backgroundColor,setBackgroundColor,openToastify,setOpenToastify,toastifyStyle,setToastifyStyle} = React.useContext(appContext)
    const images = [
        "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg",
        "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-3-.jpg",
        "https://cdn.autoportal.com/bp-v3/img/models/9c/6/honda-activa-5g-1522148835.png",
        // "https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-",

    ]
    const [currentImage,setCurrentImage] = useState(0)
    return (
        
        <div className={styles.imageSection}  >
            <div  >
        {        images.map((ele,key)=>(

            <div 
         onMouseOver={()=>setCurrentImage(key)}
            className={styles.productExtraImages} >
            <img
               style={{border:currentImage==key ? "1px solid black":""}}
            
            src={ele} /> 
            </div>

                ))
        }
            
            </div>
             <div className={styles.productImage} > 
             <img  src={images[currentImage]}  />
             
             <div className={styles.buttonsSection} >
{/* <button style={{backgroundColor:"red"}} className={styles.button} >
    Add To Cart
</button> */}
<button style={{cursor:"pointer"}} className={styles.button}>
    Add To Wishlist
</button>
        </div>
              </div> 
        

        </div>
        
        
        ) }