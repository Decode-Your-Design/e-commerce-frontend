import React from "react";
import styles from "../../styles/banner.module.css";
import {RiArrowRightLine} from 'react-icons/ri'
export default function banner() {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <h1>Find your new ride here </h1>
        {/* <p>We are here to give you the best deal</p> */}
        {/* <button className={styles.browseNow} >
            Browse Now <RiArrowRightLine style={{marginLeft:"0.4rem"}} />
        </button> */}
      </div>
    </div>
  );
}
