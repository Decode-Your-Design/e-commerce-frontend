import type { NextPage } from "next";
import Banner from "../components/banner/banner";
import styles from "../styles/home.module.css";
import feature from "../styles/feature.module.css";
import logo from "../public/img.jpg";
import Image from "next/image";
import { DEALS } from "../data";
import { useEffect, useState } from "react";
import DealsSlider from "../components/weeklyDealSlider/dealsSlider";
import DealsTabs from "../components/weeklyDealTabs/DealsTabs";

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Banner />
      <div className={styles.section_deals}>
        <div className={styles.left_box}>
          <div className={styles.header}>
            <h2 className={styles.section_title}>
              <strong>Deals</strong> of the week
            </h2>
          </div>
          <DealsSlider
            deals={DEALS}
            next={() => setCount(count + 1)}
            prev={() => setCount(count - 1)}
            currentSlide={count}
          />
        </div>
        <div className={styles.right_box}>
          <DealsTabs />
        </div>
      </div>
      <div className={feature.section_feature}>
        <div className={feature.left_box}>
          <div className={feature.header}>
            <span>Featured</span>
            <h2 className={feature.section_title}>
              Top categories <br />
              this week
            </h2>
          </div>
          <div>
            <button className={feature.btn}>prev</button>
            <button className={feature.btn}>next</button>
          </div>
          <p className={feature.footer_para}>Full catalog</p>
        </div>
        <div className={feature.right_box}>
          <DealsTabs />
        </div>
      </div>
    </>
  );
};

export default Home;
