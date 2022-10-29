import styles from "../styles/contact.module.css";
import React from 'react'
import {useState} from 'react'
export default function ContactUs() {

  return (
    <div
    className={styles.contactSection}
    >
      <div className={styles.imageDiv} >

      </div>
    
    <div className={styles.contactFields} >

      <input className={styles.input} placeholder="Enter phone number" />
      <input className={styles.input} placeholder="Enter your query" />
  
        
      <button className={styles.contactSignupButton} >
        Send query
      </button>
 

      
    </div>
    </div>
  )
}
