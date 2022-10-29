import React from 'react'
import styles from '../../styles/bannerWithCard.module.css'
import {RiHeart3Line} from 'react-icons/ri'
import { useRouter } from 'next/router'
import {useState} from 'react'
export default function bannerWithCards() {
    const router = useRouter()
    const [showAddToWishListIcon,setShowAddToWishListIcon] = useState()
  return (
    <div
    className={styles.banner_with_cards}
    >
        <div   className={styles.cards}> 
{
    [0,1,2,3].map((card,key)=>(
        <div
        onClick={()=>router.push('/productdetail')}
        style={{boxShadow:showAddToWishListIcon==key ? '2px 2px 10px gray' :'2px 2px 10px white'}}
        onMouseOver={()=>{
            setShowAddToWishListIcon(key)
        }}
        onMouseLeave={()=>{
            setShowAddToWishListIcon()
        }}
        className={styles.card} >
            <img src="https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg" />
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
