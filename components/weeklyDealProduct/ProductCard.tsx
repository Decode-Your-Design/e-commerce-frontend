import styles from "../../styles/home.module.css";
const ProductCard = ({ item,toggleState}: any) => {
  return (
    <div className={toggleState === item.tab? styles.content : styles.noContent}>
      <div className={styles.card}>
        <img className={styles.productLogo} src={item.logo} alt="" />
        <div
          className={styles.price}
          style={{ fontSize: "1.2rem", justifySelf: "center" }}
        >
          <p style={{ textAlign: "center" }}>${item.price}</p>
        </div>
        <div
          className={styles.title}
          style={{ fontSize: ".9rem", justifySelf: "center" }}
        >
          <p style={{ textAlign: "center" }}>{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;