import React from 'react'
import styles from '../styles/about-us.module.css'
export default function AboutUs() {
  return (
    <div className={styles.about_section} >
      <div className={styles.who_we_are} >
    <h1>
      Who we are ?
    </h1>
    </div>
    <div className={styles.about_us_info} >
    <p>
    Through this platform you can get access to used two as well as four wheeler vehicles in your city , directly from the dealers 
    </p>
    <hr/>
    <p>
    इस प्लेटफॉर्म के माध्यम से आप सीधे डीलरों से अपने शहर में इस्तेमाल किए गए दो और चार पहिया वाहनों तक पहुंच प्राप्त कर सकते हैं।
    </p>
    </div>
        </div>
  )
}
