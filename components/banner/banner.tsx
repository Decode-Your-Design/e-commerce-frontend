import React from "react";
import styles from "../../styles/banner.module.css";
import {RiArrowRightLine} from 'react-icons/ri'
export default function banner() {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <h1>Gourav ranka is great web developer and max is his student</h1>
        <p>Gourav ranka is great web developer and max is his student</p>
        <button className={styles.browseNow} >
            Browse Now <RiArrowRightLine style={{marginLeft:"0.4rem"}} />
        </button>
      </div>
    </div>
  );
}
