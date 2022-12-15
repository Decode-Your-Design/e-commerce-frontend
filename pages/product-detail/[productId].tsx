import React, { useState } from "react";
// import ProductImage from './Product-image'
// import ProductData from './Product-data'
import styles from "../../styles/ProductDetail.module.css";
// import BreadCrumb from './Bread-crumb'
import axios from "axios";
import { useRouter } from "next/router";
import { appContext } from "../../context/appContext";
import Loader from "../../components/loader";
import Image from "next/image";
import Head from "next/head";
export default function Index() {
  const router = useRouter();
  const productId = router.query.productId;
  const images = [
    "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-5-.jpg",
    "https://static.autox.com/uploads/2018/10/Honda-Activa-5G-Image-Gallery-3-.jpg",
    "https://cdn.autoportal.com/bp-v3/img/models/9c/6/honda-activa-5g-1522148835.png",
    // "https://cdn.pixabay.com/photo/2022/09/05/10/36/grey-seal-",
  ];
  const { openToastify, setOpenToastify } = React.useContext(appContext);
  const [productData, setProductData] = React.useState<any>();
  const [vendorInfo,setVendorInfo] = useState<any>({})
  const [isWishlist,setIsWishlist] = useState<any>()
  const getProductDetail = async () => {
    console.log("fdbg0", router);
    const response = await axios.get(
      `https://lobster-app-ymo47.ondigitalocean.app/api/product/getProductById/${router.query.productId}/${localStorage.getItem('userId')}`,
    );
    console.log("this is response", response, response.data.result);
    setCurrentImage(response.data.result.frontImage?.data)
    setProductData(response.data.result);
setIsWishlist(response.data.inWishlist)
setVendorInfo(response.data.result.vendor)
setLoading(false)
    // addToWishList();
  };

  const addToWishList = async () => {
    if(localStorage.getItem('accessToken')=='null' || localStorage.getItem('accessToken')==null){
      router.push("/login")
    }
    else{
      setLoading(true)
    const response = await axios.post(
      `https://lobster-app-ymo47.ondigitalocean.app/api/wishlist/addProductToWishlist/${productId}`,
      null,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    setLoading(false)
    if(response.data.success){
    sessionStorage.setItem("backgroundColor", "#28a745");
    sessionStorage.setItem("toastifyContent", response.data.message);
    setOpenToastify(true);
    getProductDetail();
    }
    }
  };
  const deleteItem = async()=>{
    setLoading(true)
    const response = await  axios.post(`https://lobster-app-ymo47.ondigitalocean.app/api/wishlist/removeProductFromWishlist/${productId}`,null,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    console.log('this is response',response)
    setLoading(false)
    if(response.data.success){
      sessionStorage.setItem('backgroundColor',"red")
      sessionStorage.setItem('toastifyContent',response.data.message)
      setOpenToastify(true)
      getProductDetail();
    }
  }
  React.useEffect(() => {
    console.log("thrdigdf",router.query)
    if(router.query.productId!==undefined){
    getProductDetail();
    }
  }, [router]);

  const [currentImage, setCurrentImage] = React.useState(null);
  const [arrowDown, setArrowDown] = React.useState(true);
  const calculateoff = (price:any,offerPrice:any)=>{
return offerPrice/price * 100
  }
  const[loading,setLoading] = useState(true)
  return (
    <>
        <Head>
    <title>Second hand / used {productData?.name} in Udaipur</title>
    <meta name="viewport" content={`Second hand / used ${productData?.name} in Udaipur`} />
  </Head>
  
    {loading ?
    <Loader/>
    :
    <div >

      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.extraImageSection} >
       
              <div
                // onMouseOver={() => setCurrentImage(key)}
                className={styles.productExtraImages}
              >
                <img alt=""
                       onClick={()=>{
                        setCurrentImage(productData?.frontImage?.data)
                      }}
                  style={{
                    // border: currentImage == key ? "1px solid black" : "",
                  }}
                  src={`data:image/jpeg;base64,${productData?.frontImage?.data}`}
                />
              </div>
       
              <div
                // onMouseOver={() => setCurrentImage(key)}
                className={styles.productExtraImages}
              >
                <img alt=""
                       onClick={()=>{
                        setCurrentImage(productData?.backImage?.data)
                      }}
                  style={{
                    // border: currentImage == key ? "1px solid black" : "",
                  }}
                  src={`data:image/jpeg;base64,${productData?.backImage?.data}`}
                />
              </div>
              <div
                // onMouseOver={() => setCurrentImage(key)}
                className={styles.productExtraImages}
              >
                <img  alt=""
                      onClick={()=>{
                        setCurrentImage(productData?.leftImage?.data)
                      }}
                  style={{
                    // border: currentImage == key ? "1px solid black" : "",
                  }}
                  src={`data:image/jpeg;base64,${productData?.leftImage?.data}`}
                />
              </div>
              <div
                // onMouseOver={() => setCurrentImage(key)}
                onClick={()=>{
                  setCurrentImage(productData?.rightImage?.data)
                }}
                className={styles.productExtraImages}
              >
                <img  alt=""
                  style={{
                    // border: currentImage == key ? "1px solid black" : "",
                  }}
                  src={`data:image/jpeg;base64,${productData?.rightImage?.data}`}
                />
              </div>

          </div>
          <div className={styles.productImage}>
          <img src={`data:image/jpeg;base64,${currentImage}`} />

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
                ₹{productData?.price}
              </span>
              <span className={styles.discount}> {calculateoff(productData?.price,productData?.offerPrice)} % </span>
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
}
    </>
  );
}
