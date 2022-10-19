import React from 'react'
import ProductImage from './ProductImage'
import ProductData from './ProductData'
import styles from '../../styles/ProductDetail.module.css'
import BreadCrumb from './BreadCrumb'
export default function index() {
  return (
<div style={{padding:"2rem",}} >
<BreadCrumb/>
{/* product detail main div   */}
<div className={styles.container} >
<ProductImage  />
<ProductData/>
</div>


</div>
  )
}

