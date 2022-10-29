import styles from "../styles/login.module.css";
import React from 'react'
import {useState} from 'react'
export default function login() {
  const[login,setLogin]= useState(true)
  return (
    <div
    className={styles.loginSection}
    >
      <div className={styles.imageDiv} >

      </div>
    
    <div className={styles.loginFields} >
      <h1>
        Login 
      </h1>
      <input className={styles.input} placeholder="Enter phone number" />
      <input type="password" className={styles.input} placeholder="Enter Password" />
      {
        login ? 
        <>
      <button className={styles.loginSignupButton} >
        Login
      </button>
      <p onClick={()=>{
        setLogin(false)
      }} className={styles.switchUser} >
        New user ? Sign up
      </p>
      </>
      :
      <>
      <button className={styles.loginSignupButton} >
      Sign up
    </button>
       <p 
       onClick={()=>{
        setLogin(true)
      }}
       className={styles.switchUser}>
       Already a user ? Login
     </p>
     </>
      }
    </div>
    </div>
  )
}
