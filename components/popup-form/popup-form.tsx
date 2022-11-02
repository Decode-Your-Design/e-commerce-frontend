import React, { useState } from "react";
import styles from "../../styles/popup-form.module.css";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";
export default function PopupForm({ addProduct, setOpenForm }) {
  const router = useRouter();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    shortDesc: "",
    longDesc: "",
    vehicleType: "",
  });
  const addVendorProduct = () => {
    console.log("this is product datya", productData);
  };
  const inputData = [
    { placeholder: "Name", value: "", name: "name" },
    { placeholder: "Actual Price", value: "", name: "price" },
    { placeholder: "Offer Price", value: "", name: "offerPrice" },
    { placeholder: "Short Description", value: "", name: "shortDesc" },
    { placeholder: "Long Description", value: "", name: "longDesc" },
  ];
  const handleChange = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.productAddEditSection}>
      <RiCloseFill
        onClick={() => setOpenForm(false)}
        className={styles.closeIcon}
      />
      <h1>{addProduct ? "Add Product" : "Update Product"}</h1>
      <form>
        {inputData.map((input: any) => (
          <div>
            {/* <label>{input.label}</label> */}
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder={input.placeholder}
              type="text"
              name={input.name}
            />
          </div>
        ))}
        <div>
          <select
            name="vehicleType"
            onChange={(e) => handleChange(e)}
            className={styles.productAddEditInput}
          >
            <option value="">--Vehicle type--</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="scooty">Scooty</option>
          </select>
        </div>
        <div className={styles.productAddEditInput}>
          <label>Product image</label>
          <input
            style={{ marginLeft: "0.8rem" }}
            placeholder="product image"
            type="file"
          />
        </div>
      </form>
      {addProduct ? (
        <button
          onClick={() => {
            addVendorProduct();
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
