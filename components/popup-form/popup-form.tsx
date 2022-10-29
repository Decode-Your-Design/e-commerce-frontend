import React from "react";
import styles from "../../styles/popup-form.module.css";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";
export default function PopupForm({ inputData, addProduct,setOpenForm }) {
  const router = useRouter();
  return (
    <div className={styles.productAddEditSection}>
        <RiCloseFill
        onClick={()=>setOpenForm(false)}
        className={styles.closeIcon} />
      <h1>{addProduct ? "Add Product" : "Update Product"}</h1>
      <form>
        {inputData.map((input: any) => (
          <div>
            {/* <label>{input.label}</label> */}
            <input
              className={styles.productAddEditInput}
              placeholder={input.placeholder}
              type="text"
            />
          </div>
        ))}
                 <div     className={styles.productAddEditInput}>
            <label>Product image</label>
            <input
          style={{marginLeft:"0.8rem"}}
           placeholder="product image"
              type="file"
            />
          </div>
      </form>
      {addProduct ? (
        <button
          onClick={() => {
            router.push("/wishlist");
          }}
          className={styles.addUpdateButton}
        >
          Add
        </button>
      ) : (
        <button
          onClick={() => {
            router.push("/wishlist");
          }}
          className={styles.addUpdateButton}
        >
          Update
        </button>
      )}
    </div>
  );
}
