import React from 'react'
import { appContext } from '../../context/appContext'
import styles from '../../styles/toastify.module.css'

export default function Toastify() {
  const {openToastify,setOpenToastify} = React.useContext(appContext)
  React.useEffect(() => {
setTimeout(()=>{
  setOpenToastify(false)
},2000)
  }, [setOpenToastify])
  
  const backgroundColor  = sessionStorage.getItem('backgroundColor')
  const toastifyContent = sessionStorage.getItem('toastifyContent')
  return (
<>
    <div 
  
    className='toastify'
    >{toastifyContent}</div>
    <style jsx>{`
    .toastify {
      background-color: ${backgroundColor};
      min-width: 20vw;
      width: auto;
      padding: 1rem;
      position: absolute;
      top: 1rem;
      left: 50%;
      transform: translateX(-50%);
      color: white;
      box-shadow: 2px 2px 10px gray;
      z-index: 100;1
    }
   
  `}</style>
  </>
  )
}
