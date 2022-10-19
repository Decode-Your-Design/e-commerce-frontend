import { useState } from "react";
import { PRODUCT } from "../../data";
import styles from "../../styles/home.module.css";
import ProductCard from "../weeklyDealProduct/ProductCard";
const DealsTabs = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  return (
    <>
      <div className={styles.tabs}>
        <button
          onClick={() => toggleTab(1)}
          className={toggleState === 1 ? styles.activeTabs : styles.tabsBtn}
        >
          Scooty
        </button>
        <span className={styles.footer_span}>|</span>
        <button
          onClick={() => toggleTab(2)}
          className={toggleState === 2 ? styles.activeTabs : styles.tabsBtn}
        >
          Cars
        </button>
        <span className={styles.footer_span}>|</span>
        <button
          onClick={() => toggleTab(3)}
          className={toggleState === 3 ? styles.activeTabs : styles.tabsBtn}
        >
          Bikes
        </button>
      </div>
      <div className={styles.productList}>
        {PRODUCT.map((item,index) => (
          <ProductCard item={item} toggleState={toggleState} className={toggleState === index ? styles.content : styles.noContent}/>
        ))}
      </div>
    </>
  );
};

export default DealsTabs;
