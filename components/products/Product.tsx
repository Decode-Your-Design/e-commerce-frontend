
import { useState } from 'react'
import styles from '../../styles/ProductCard.module.css'
import shoppingCart from '../../public/shopping-cart.png'
import Image from 'next/image'
import inwishlist from '../../public/inwishlist.png'
import notinwishlist from '../../public/notinwishlist.png'


const Product = ({ product }) => {
  const [toggleAddToCart, setToggleAddToCart] = useState(false)
  const [inWishlist,setInWishlist] = useState(false)
  const [wishlistHover,setWishlistHover] = useState(false)
  return (
    <>

      <div
        onMouseOver={() => {
          console.log("on mouse over")
          setToggleAddToCart(true)
        }}
        onMouseLeave={() => {
          setToggleAddToCart(false)
        }}
        className={styles.productCard} >

        {toggleAddToCart &&
          <div className={styles.addToCart} >
            <p>Add to cart</p>
            <Image style={{filter:'invert(1)'}} src={shoppingCart} width={20} height={20}   />
          </div>}

        <img
          onMouseOver={() => {
            console.log("on mouse over")
            setToggleAddToCart(true)
          }}
          onMouseLeave={() => {
            setToggleAddToCart(false)
          }}
          className={styles.productImage} src={product.url} />
        <p>
          {
            product.title
          }
        </p>
        <div className={styles.priceDiv} >
          <div
  
          onClick={()=>{
            setInWishlist(!inWishlist)
          }}
          className={styles.wishlistdiv} >
        <Image
                // onMouseOver={()=>setWishlistHover(true)}
                // onMouseLeave={()=>setWishlistHover(false)}
        src={inWishlist ? inwishlist : notinwishlist} width={20} height={20}   />
        </div>
        {
          wishlistHover &&
        
          <div
      
          className={styles.wishlistHeadingDiv} >
        <p  >add to wishlist</p>
        </div>
}
        
          <p>Price : ₹{product.offerPrice}</p>
          <p id="price" >₹{product.price}</p>
        </div>
      </div>
    </>
  )
}

export default Product