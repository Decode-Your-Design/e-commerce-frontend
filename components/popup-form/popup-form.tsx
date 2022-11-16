import React, { useState } from "react";
import styles from "../../styles/popup-form.module.css";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios";
import { appContext } from "../../context/appContext";
export default function PopupForm({ addProduct, setOpenForm,productData,setProductData,getVendorProducts }) {
  const router = useRouter();
  const _id = localStorage.getItem("_id");
  const accessToken = localStorage.getItem("accessToken");
  const {setOpenToastify} =React.useContext(appContext)

  const addVendorProduct = async () => {
   const response= await axios.post(
      "http://localhost:8000/api/product/addProduct",
      productData,
      { headers: {"Authorization" : `Bearer ${accessToken}`} }
    );
    if(response.data.success){
setOpenForm(false)
sessionStorage.setItem("backgroundColor","#28a745")
sessionStorage.setItem("toastifyContent",response.data.message)
setOpenToastify(true)
setProductData({})
getVendorProducts()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  };
  const updateProduct = async () => {
    
   const response = await axios.post(
      `http://localhost:8000/api/product/updateProductDetails/${productData._id}`,
      productData,
      { headers: {"Authorization" : `Bearer ${accessToken}`} }
    );
    console.log("this is response",response)
    if(response.data.success){
      setOpenForm(false)
sessionStorage.setItem("backgroundColor","#28a745")
sessionStorage.setItem("toastifyContent",response.data.message)
setOpenToastify(true)
setProductData({})
getVendorProducts()
    }
    else{
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem("toastifyContent",response.data.message)
      setOpenToastify(true)
    }
  };


  console.log("this is product data",productData  );
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

          <div>
            {/* <label>{input.label}</label> */}
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Name"
              type="text"
              value={productData?.name}
              name="name"
            />
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Price"
              type="text"
              value={productData?.price}
              name="price"
            />
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Offer Price"
              type="text"
              value={productData?.offerPrice}
              name="offerPrice"
            />
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Short Description"
              type="text"
              value={productData?.shortDesc}
              name="shortDesc"
            />
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Long Description"
              type="text"
              value={productData?.longDesc}
              name="longDesc"
            />

          </div>
        <div>
          <select
            name="vehicleType"
            value={productData?.vehicleType}
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
            updateProduct()
          }}
          className={styles.addUpdateButton}
        >
          Update
        </button>
      )}
    </div>
  );
}
