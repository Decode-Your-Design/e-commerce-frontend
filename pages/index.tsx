import type { NextPage } from "next";
import Banner from "../components/banner/banner";
import styles from "../styles/home.module.css";
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
    </>
  );
};

export default Home;
