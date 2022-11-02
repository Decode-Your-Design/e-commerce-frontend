import React from "react";
import styles from '../../styles/vehicle.module.css'
import { RiDeleteBin5Fill } from "react-icons/ri";
// import Header from "../components/header/header";
import { useRouter } from "next/router";
export default function VehicleType() {
  const router = useRouter()
  return (
    <>
      <div className={styles.vehicleHeading}>
        <h1>{router.query.vehicleType}</h1>
      </div>
      <div className={styles.vehicleProducts}>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <>
            <div className={styles.vehicleProductCard}>
              <RiDeleteBin5Fill className={styles.deleteIcon} />
              <img src="https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg" />
              <div 
             onClick={()=>{
              router.push('/product-detail')
             }} 
              className={styles.priceSection}>
                <p>Activa 5G</p>
                <h3>
                  <span className={styles.offerPrice}>$200</span>{" "}
                  <span className={styles.actualPrice}>$100</span>
                </h3>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
