import styles from "../../styles/home.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
const ProductCard = ({ item,toggleState}: any) => {
  const router = useRouter()
  return (
    <div className={styles.content }>
      <div 
      style={{cursor:"pointer"}}
      onClick={()=>router.push(`/product-detail/${item._id}`)}
      className={styles.card}>
        <img className={styles.productLogo}   src={`data:image/jpeg;base64,${item.frontImage.data}`} alt="" />
        <div
          className={styles.actualPrice}
          style={{ fontSize: "1.2rem", justifySelf: "center" }}
        >
          <p style={{ textAlign: "center" }}>₹{item.offerPrice}</p>
        </div>
        <div
          className={styles.title}
          style={{ fontSize: ".9rem", justifySelf: "center" }}
        >
          {/* <p style={{ textAlign: "center" }}>{item.name}</p> */}
          <p>{item.name.length<15 ? item.name :`${item.name.slice(0,15)}...`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
