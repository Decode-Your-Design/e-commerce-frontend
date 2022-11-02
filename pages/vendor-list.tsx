import React, { useState } from "react";
import styles from "../styles/vendor-list.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import Header from "../components/header/header";
import PopupForm from "../components/popup-form/popup-form";
export default function VendorList() {
  const [openForm, setOpenForm] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const inputData = [
    { placeholder: "Name", value: "" },
    { placeholder: "Actual Price", value: "" },
    { placeholder: "Offer Price", value: "" },
    { placeholder: "Offer Price", value: "" },
    { placeholder: "Short Description", value: "" },
    { placeholder: "Long Description", value: "" },
  ];
  return (
    <>
      <div className={styles.vendorListHeading}>
        <h1>Vendor List</h1>
      </div>
      <div className={styles.vendorListProducts}>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <>
            <div className={styles.vendorListProductCard}>
              <RiDeleteBin5Fill className={styles.deleteIcon} />
                <p><span style={{fontWeight:"bold"}} >Name </span> : Gourav Ranka</p>
                <p> <span style={{fontWeight:"bold"}}> Phone </span> : 8302207268</p>
                <p> <span style={{fontWeight:"bold"}}> Shop Name  </span> : gourav bikes </p>
                
                <h3>
                </h3>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
