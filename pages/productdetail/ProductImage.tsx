import React, { useState } from 'react' 
import styles from '../../styles/ProductDetail.module.css' 


export default function ProductImage() { 
    const images = [
        "https://m.media-amazon.com/images/I/51kmj7UCNDL._UX569_.jpg",
        "https://cdn.pixabay.com/photo/2022/06/21/22/48/flower-7276636__340.jpg",
        "https://cdn.pixabay.com/photo/2022/08/22/19/07/mountains-7404367__340.jpg",
        "https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-7433843__340.jpg",

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
<button style={{backgroundColor:"red"}} className={styles.button} >
    Add To Cart
</button>
<button className={styles.button}>
    Add To Wishlist
</button>
        </div>
              </div> 
        

        </div>
        
        
        ) }