import React from 'react'
import ProductImage from './Product-image'
import ProductData from './Product-data'
import styles from '../../styles/ProductDetail.module.css'
import BreadCrumb from './Bread-crumb'
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

