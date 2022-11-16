import React from 'react'
import { appContext } from '../../context/appContext'
import styles from '../../styles/toastify.module.css'

export default function toastify() {
  React.useEffect(() => {
setTimeout(()=>{
  setOpenToastify(false)
},2000)
  }, [])
  
  const {openToastify,setOpenToastify} = React.useContext(appContext)
  const backgroundColor  = sessionStorage.getItem('backgroundColor')
  const toastifyContent = sessionStorage.getItem('toastifyContent')
  return (

    <div 
  style={{backgroundColor:backgroundColor}}
    className={styles.toastify}
    >{toastifyContent}</div>
  )
}
