import styles from "../styles/my-profile.module.css";
import React from 'react'
import {useState} from 'react'
export default function MyProfile() {
  const[login,setLogin]= useState(true)
  return (
    <div
    className={styles.loginSection}
    >

    
    <div className={styles.loginFields} >
      <h1>
        My profile
      </h1>
      <input className={styles.input} placeholder="Enter your name" />
      <input type="text" className={styles.input} placeholder="Enter your phone" />
      <input type="password" className={styles.input} placeholder="Enter your password" />
      
      <button className={styles.loginSignupButton} >
      Update profile
    </button>

     
      
    </div>
    </div>
  )
}
