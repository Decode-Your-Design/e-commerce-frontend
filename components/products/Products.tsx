import { useEffect, useState } from "react"
import Product from "./Product"
import styles from '../../styles/Products.module.css'
// import axios from 'axios'
import arrowback from '../../public/arrow.png'
import arrowForward from '../../public/right-arrow.png'
import Image from "next/image"
import data from "./constant"



const Products = ({ title }: { title: string }) => {
    // All states declaration 
    const [productData, setProductData] = useState(data)
    const [firstIndex, setFirstIndex] = useState(0)
    const [lastIndex, setLastIndex] = useState(6)

    // // All hooks 
    // useEffect(() => {
    //     getProductData()
    // }, [])



    // All functions 
    const getProductData = async () => {
        console.log("inside get product data function")
        try {
            // const product_data = await axios.get("http://localhost:8000/getAllProducts");
            // console.log("this is product data", product_data.data);
            // setProductData(product_data.data);
            // console.log("this is length of product data array,=", product_data.data.length)
        }
        catch (err) {
            console.log("error getting data from ", err)
        }
    }
    const showNextProduct = () => {
        setFirstIndex(firstIndex + 1);
        setLastIndex(lastIndex + 1)

    }
    const showPreviousProduct = () => {
        setFirstIndex(firstIndex - 1);
        setLastIndex(lastIndex - 1)
    }
    return (
        // productData.length > 0 &&
        <div className={styles.productsSection}>
            {/* <div  >
                <h1 className={styles.title} >
                    {title}
                </h1>
            </div> */}
            <div   className={styles.products} >
                {firstIndex != 0 &&
                    <div
                        onClick={() => {
                            showPreviousProduct()
                        }}
                        className={`${styles.arrow} ${styles.arrowBack}`}  >
                        <img alt="" className={styles.arrowImage} src={`${arrowback}`}  />
                    </div>}

                {lastIndex != productData.length &&
                    <div
                        onClick={() => {
                            showNextProduct()
                        }}
                        className={`${styles.arrow} ${styles.arrowForward}`} >

                        <Image alt="" className={styles.arrowImage} src={arrowForward} width={10} height={10} />
                    </div>
                }
                
                {
                    productData.slice(firstIndex, lastIndex).map((ele,key:any) => (
                        <div key={key} >
                        <Product product={ele} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Products