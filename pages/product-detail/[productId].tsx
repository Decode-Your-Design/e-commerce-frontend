import React, { useState } from "react";
// import ProductImage from './Product-image'
// import ProductData from './Product-data'
import styles from "../../styles/ProductDetail.module.css";
// import BreadCrumb from './Bread-crumb'
import axios from "axios";
import { useRouter } from "next/router";
import { appContext } from "../../context/appContext";
export default function index() {
  const router = useRouter();
  const productId = router.query.productId;
  const images = [
    "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg",
    "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-3-.jpg",
    "https://cdn.autoportal.com/bp-v3/img/models/9c/6/honda-activa-5g-1522148835.png",
    // "https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-",
  ];
  const { openToastify, setOpenToastify } = React.useContext(appContext);
  const [productData, setProductData] = React.useState();
  const [vendorInfo,setVendorInfo] = useState({})
  const [isWishlist,setIsWishlist] = useState()
  const getProductDetail = async () => {
    console.log("fdbg0", router);
    const response = await axios.get(
      `http://localhost:8000/api/product/getProductById/${router.query.productId}/${localStorage.getItem('userId')}`,
    );
    console.log("this is response", response, response.data.result);
    setProductData(response.data.result);
setIsWishlist(response.data.inWishlist)
setVendorInfo(response.data.result.vendor)
    // addToWishList();
  };

  const addToWishList = async () => {
    if(localStorage.getItem('accessToken')=='null' || localStorage.getItem('accessToken')==null){
      router.push("/login")
    }
    else{
    const response = await axios.post(
      `http://localhost:8000/api/wishlist/addProductToWishlist/${productId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if(response.data.success){
    sessionStorage.setItem("backgroundColor", "#28a745");
    sessionStorage.setItem("toastifyContent", response.data.message);
    setOpenToastify(true);
    getProductDetail();
    }
    }
  };
  const deleteItem = async()=>{
    const response = await  axios.post(`http://localhost:8000/api/wishlist/removeProductFromWishlist/${productId}`,null,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    console.log('this is response',response)
    if(response.data.success){
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem('toastifyContent',response.data.message)
      setOpenToastify(true)
      getProductDetail();
    }
  }
  React.useEffect(() => {
    getProductDetail();
  }, []);

  const [currentImage, setCurrentImage] = React.useState(0);
  const [arrowDown, setArrowDown] = React.useState(true);
  return (
    <div >
      {/* <div>
        <p>
          <span>Home</span>
          <span>/</span>
          <span>Activa 5g</span>
        </p>
      </div> */}
      {/* product detail main div   */}
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.extraImageSection} >
            {images.map((ele, key) => (
              <div
                onMouseOver={() => setCurrentImage(key)}
                className={styles.productExtraImages}
              >
                <img
                  style={{
                    border: currentImage == key ? "1px solid black" : "",
                  }}
                  src={ele}
                />
              </div>
            ))}
          </div>
          <div className={styles.productImage}>
            <img src={images[currentImage]} />

            {/* <div className={styles.buttonsSection}> */} 
            {
              isWishlist ?
            
              <button 
              onClick={deleteItem}
              style={{backgroundColor:"red",cursor:"pointer"}} className={styles.button} >
    Remove from Wishlist
</button>
:
              <button 
              onClick={addToWishList}
              style={{backgroundColor:"red",cursor:"pointer"}} className={styles.button} >
    Add To Wishlist
</button>
}

            {/* </div> */}
          </div>
        </div>

        <div >
          <div className={styles.productData}>
            <h1 >{productData?.name}</h1>
            <p>
              <span className={styles.offerPrice}>
                ₹{productData?.offerPrice}
              </span>
              <span className={styles.actualPrice}>
                ₹{productData?.actualPrice}
              </span>
              <span className={styles.discount}>50% off</span>
            </p>
            <span>{productData?.shortDesc}</span>
          </div>
          <div>
            <div className={styles.attributeSection}>
              <h1>Color: Yellow</h1>
              <p style={{marginTop:"0.5rem"}}> <span style={{fontWeight:"bold"}} > Contact vendor </span> :{vendorInfo?.phone}</p>
            <p style={{marginTop:"0.5rem"}}><span style={{fontWeight:"bold"}} > Shop Name </span>:{vendorInfo?.shopName}</p>
            <p style={{marginTop:"0.5rem"}} ><span style={{fontWeight:"bold",marginTop:"0.5rem"}} > Shop Address </span>:{vendorInfo?.address}</p>
            </div>

          </div>
          {arrowDown && (
            <div
              style={{
                backgroundColor: "white",
                boxShadow: "2px 2px 10px gray",
                padding: "2rem",
                borderRadius: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {productData?.longDesc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
