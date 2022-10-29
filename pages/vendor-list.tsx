import React, { useState } from "react";
import styles from "../styles/vendor-product-list.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import Header from "../components/header/header";
import PopupForm from "../components/popup-form/popup-form";
export default function VendorList() {
  const [openForm,setOpenForm] = useState(false)
  const [addProduct,setAddProduct] = useState(false)
  const inputData = [
    {placeholder:"Name",value:""},
    {placeholder:"Actual Price",value:""},
    {placeholder:"Offer Price",value:""},
    {placeholder:"Offer Price",value:""},
    {placeholder:"Short Description",value:""},
    {placeholder:"Long Description",value:""},
  ]
  return (
    <>
    {
      openForm &&
    <PopupForm addProduct={addProduct} inputData={inputData} setOpenForm={setOpenForm} />
    }
      <div className={styles.vendorHeading}>
        <h1>Vendor List</h1>
      </div>
      <div className={styles.vendorProducts}>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <>
            <div className={styles.vendorProductCard}>
              <RiDeleteBin5Fill className={styles.deleteIcon} />
              <RiEdit2Fill
              onClick={()=>{setOpenForm(true)
                setAddProduct(false)
              }}
              className={styles.editIcon} />
              <RiEyeFill    onClick={()=>{setOpenForm(true)
              setAddProduct(true)
              }} className={styles.viewIcon} />
              
              <img src="https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg" />
              <div className={styles.priceSection}>
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
