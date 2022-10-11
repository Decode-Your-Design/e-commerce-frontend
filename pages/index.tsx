import type { NextPage } from "next";
import Banner from "../components/banner/banner";
import styles from "../styles/home.module.css";
import logo from "../public/img.jpg";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { DEALS } from "../data";
import { useEffect, useState } from "react";
import DealsSlider from "../components/weeklyDealSlider/dealsSlider";
import DealsTabs from "../components/weeklyDealTabs/DealsTabs";
import OurServices from "../components/ourService/ourServices";
import BannerWithCards from "../components/bannerWithCards/bannerWithCards";

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
            <div>
              <RiArrowDropLeftLine color="gray" className="largeIcon icon" />
              <RiArrowDropRightLine color="gray" className="largeIcon icon" />
            </div>
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
      <OurServices />
      <BannerWithCards/>
    </>
  );
};

export default Home;
