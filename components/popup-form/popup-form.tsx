import React, { useState } from "react";
import styles from "../../styles/popup-form.module.css";
import { useRouter } from "next/router";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios";
import { appContext } from "../../context/appContext";
export default function PopupForm({ addProduct,setLoading, setOpenForm,productData,setProductData,getVendorProducts }:any) {
  const router = useRouter();
  const _id = localStorage.getItem("_id");
  const accessToken = localStorage.getItem("accessToken");
  const {setOpenToastify} =React.useContext(appContext)
const data={
  name:""
}
console.log("hello",productData)
  const [image,setImage] = useState<any>({})
  const [backImage,setBackImage] = useState<any>({})
  const [leftImage,setLeftImage] = useState<any>({})
  const [rightImage,setRightImage] = useState<any>({})
  const addVendorProduct = async () => {
    let allField = true
      console.log("this is product data",productData)
    for(const key in productData){
      if(productData[key]==""){
        alert("All field are required")
        allField=false
        return
      }
    }
    if(allField){
    setOpenForm(false)
    setLoading(true)
    console.log("fsdfsd",image)
    const formdata = new FormData();
    formdata.append('name',productData.name)
    formdata.append('price',productData.price)
    formdata.append('offerPrice',productData.offerPrice)
    formdata.append('shortDesc',productData.shortDesc)
    formdata.append('longDesc',productData.longDesc)
    formdata.append('vehicleType',productData.vehicleType)
    formdata.append('image',image)
    formdata.append('image',rightImage)
    formdata.append('image',backImage)
    formdata.append('image',leftImage)

   const response= await axios.post(
      "https://lobster-app-ymo47.ondigitalocean.app/api/product/addProduct",
      formdata,
      { headers: {"Authorization" : `Bearer ${accessToken}`} }
    );
    if(response.data.success){
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

  }
  
  };
  const handleImageChange = (e:any)=>{
console.log("e.target.value",e.target.files[0])
setImage(e.target.files[0])
// setProductData({ ...productData, ['image']: e.target.files[0] });

  }
  const handleLeftImageChange = (e:any)=>{
console.log("e.target.value",e.target.files[0])
setLeftImage(e.target.files[0])
// setProductData({ ...productData, ['image']: e.target.files[0] });

  }
  const handleRightImageChange = (e:any)=>{
console.log("e.target.value",e.target.files[0])
setRightImage(e.target.files[0])
// setProductData({ ...productData, ['image']: e.target.files[0] });

  }
  const handleBackImageChange = (e:any)=>{
console.log("e.target.value",e.target.files[0])
setBackImage(e.target.files[0])
// setProductData({ ...productData, ['image']: e.target.files[0] });

  }
  const handleChange = (e: any) => {
    console.log("e.target.value",e.target.value,e.target.n)
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };
  const updateProduct = async () => {
    setOpenForm(false)
    setLoading(true)
   const response = await axios.post(
      `https://lobster-app-ymo47.ondigitalocean.app/api/product/updateProductDetails/${productData._id}`,
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
              type="number"
              value={productData?.price}
              name="price"
            />
            <input
              onChange={(e) => handleChange(e)}
              className={styles.productAddEditInput}
              placeholder="Offer Price"
              type="number"
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
          <label>Product Front image</label>
          <input
        onChange={(e)=>handleImageChange(e)}
            style={{ marginLeft: "0.8rem" }}
            placeholder="product image"
            type="file"
            value={productData?.image}
          />
        </div>
   
        <div className={styles.productAddEditInput}>
          <label>Product Back image</label>
          <input
        onChange={(e)=>handleBackImageChange(e)}
            style={{ marginLeft: "0.8rem" }}
            placeholder="product image"
            type="file"
            value={productData?.image}
          />
        </div>
        <div className={styles.productAddEditInput}>
          <label>Product Left side image</label>
          <input
        onChange={(e)=>handleLeftImageChange(e)}
            style={{ marginLeft: "0.8rem" }}
            placeholder="product image"
            type="file"
            value={productData?.image}
          />
        </div>
        <div className={styles.productAddEditInput}>
          <label>Product Right side image</label>
          <input
        onChange={(e)=>handleRightImageChange(e)}
            style={{ marginLeft: "0.8rem" }}
            placeholder="product image"
            type="file"
            value={productData?.image}
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
