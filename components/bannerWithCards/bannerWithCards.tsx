import React from 'react'
import styles from '../../styles/bannerWithCard.module.css'
import {RiHeart3Line} from 'react-icons/ri'
import {useState} from 'react'
export default function bannerWithCards() {
    const [showAddToWishListIcon,setShowAddToWishListIcon] = useState()
  return (
    <div
    className={styles.banner_with_cards}
    >
        <div   className={styles.cards}> 
{
    [0,1,2,3].map((card,key)=>(
        <div
        style={{boxShadow:showAddToWishListIcon==key ? '2px 2px 10px gray' :'2px 2px 10px white'}}
        onMouseOver={()=>{
            setShowAddToWishListIcon(key)
        }}
        onMouseLeave={()=>{
            setShowAddToWishListIcon()
        }}
        className={styles.card} >
            <img src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/samsung-ue-ks9000_1_720x660-224x197.jpg" />
            <div className={styles.productDetail} >

{
    showAddToWishListIcon==key &&
    <RiHeart3Line className={styles.wishlistIcon} />
}
    <span className={styles.offerPrice} >
        $627.99
    </span>
    <span className={styles.actualPrice}>
        $9000
    </span>
    <p>
    <span className={styles.shortDescription}>
This is best for you djdsfbjfdbhnjkml,;
    </span>
    </p>
    <button  className={styles.addToCart} >
        Add to cart
    </button>

                </div>
            </div>
    ) 
    )
    }
    </div>

</div>
    
  )
}
