import styles from "../styles/add-vendor.module.css";
import React from 'react'
import {useState} from 'react'
export default function AddVendor() {

  return (
    <div
    className={styles.addVendorSection}
    >

    
    <div className={styles.addVendorFields} >
      <h1>
        Add New Vendor
      </h1>
      <input className={styles.input} placeholder="Enter Name" />
      <input type="text" className={styles.input} placeholder="Enter Phone" />
      <input type="password" className={styles.input} placeholder="Enter Password" />
      
      <button className={styles.addVendorSignupButton} >
      Add vendor
    </button>

     
      
    </div>
    </div>
  )
}
