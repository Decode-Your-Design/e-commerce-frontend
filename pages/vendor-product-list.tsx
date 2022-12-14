import React, { useContext, useState } from "react";
import styles from "../styles/vendor-product-list.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RiEdit2Fill } from "react-icons/ri";
import { RiEyeFill } from "react-icons/ri";
import Header from "../components/header/header";
import PopupForm from "../components/popup-form/popup-form";
import axios from "axios";
import { useRouter } from "next/router";
import { appContext } from "../context/appContext";
import Loader from "../components/loader";
import Image from "next/image";
export default function VendorProductList() {
  const router = useRouter();
  const { setOpenToastify } = useContext(appContext);
  const [openForm, setOpenForm] = useState(false);
  const [addProduct, setAddProduct] = useState(true);
  const [productsData, setProductsData] = useState([]);
  const [productData, setProductData] = useState<any>({
    name: "",
    price: "",
    shortDesc: "",
    longDesc: "",
    vehicleType: "",
  });
  const [loading, setLoading] = useState(true);
  // const accessToken = localStorage.getItem('accessToken')

  const getVendorProducts = async () => {
    const response = await axios.get(
      `https://lobster-app-ymo47.ondigitalocean.app/api/product/getVendorProducts`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (response.data.success) {
      setProductsData(response.data.result);
      setLoading(false);
    } else {
      sessionStorage.setItem("backgroundColor", "red");
      sessionStorage.setItem("toastifyContent", response.data.message);
      setOpenToastify(true);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("userType") == "Vendor") {
      // getVendorProducts();
      // setProductData({})
      getVendorProducts();
    } else {
      router.push("/");
    }
  }, [router]);

  const deleteProduct = async (productId: String) => {
    setLoading(true);
    const response = await axios.post(
      `https://lobster-app-ymo47.ondigitalocean.app/api/product/removeProduct/${productId}`,
      productData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    // setOpenForm(false);

    if (response.data.success) {
      sessionStorage.setItem("backgroundColor", "red");
      sessionStorage.setItem("toastifyContent", response.data.message);
      setOpenToastify(true);
      getVendorProducts();
    } else {
      sessionStorage.setItem("backgroundColor", "red");
      sessionStorage.setItem("toastifyContent", response.data.message);
      setOpenToastify(true);
    }
  };
  return (
    <>
      {openForm && (
        <PopupForm
          getVendorProducts={getVendorProducts}
          setProductData={setProductData}
          productData={productData}
          addProduct={addProduct}
          setOpenForm={setOpenForm}
          setLoading={setLoading}
        />
      )}
      <div className={styles.vendorHeading}>
        <h1>My Products</h1>
        <div style={{ textAlign: "end" }}>
          <button
            onClick={() => {
              setAddProduct(true);
              setOpenForm(true);
            }}
            className={styles.addButton}
          >
            Add product
          </button>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : productsData.length == 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginTop: "1rem" }}>No Product</h1>
        </div>
      ) : (
        <div className={styles.vendorProducts}>
          {productsData.map((product: any) => {
            // const base64String = window.btoa(
            //   String.fromCharCode(...new Uint8Array(product.img.data.data))
            // );
            return (
              <>
                <div className={styles.vendorProductCard}>
                  <RiDeleteBin5Fill
                    onClick={() => deleteProduct(product._id)}
                    className={styles.deleteIcon}
                  />
                  <RiEdit2Fill
                    onClick={() => {
                      setProductData(product);
                      setOpenForm(true);
                      setAddProduct(false);
                    }}
                    className={styles.editIcon}
                  />

                  <img
                    alt=""
                    src={`data:image/jpeg;base64,${product?.frontImage?.data}`}
                  />
                  <div
                    onClick={() => {
                      router.push(`/product-detail/${product?._id}`);
                    }}
                    className={styles.priceSection}
                  >
                    {/* <p>{product.name}</p> */}
                    <p>
                      {product?.name.length < 15
                        ? product?.name
                        : `${product?.name.slice(0, 15)}...`}
                    </p>
                    <h3>
                      <span className={styles.offerPrice}>
                        ???{product?.price}
                      </span>{" "}
                      <span className={styles.actualPrice}>
                        ???{product?.offerPrice}
                      </span>
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
