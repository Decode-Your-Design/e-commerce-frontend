import React from "react";
import {RiSecurePaymentFill} from 'react-icons/ri'
import styles from "../../styles/ourService.module.css";
export default function ourServices() {
  return (
    <div className={styles.our_service_container}>
      {[0, 1, 3, 4, 5].map((element) => (
        <div>
          <div>
<RiSecurePaymentFill color="rgb(0, 99, 209)" className="mediumIcon"  />
          </div>

          <div  >
          <span style={{color:"rgb(31, 31, 31)",fontWeight:"bold"}} >  365 days </span>
            <br />
            <span  style={{color:"gray",fontWeight:""}} >  return</span>
          </div>
        </div>
      ))}
    </div>
  );
}
