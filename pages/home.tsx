import type { NextPage } from "next";
import Banner from "../components/banner/banner";
import styles from "../styles/home.module.css";
import feature from "../styles/feature.module.css";
import logo from "../public/img.jpg";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { DEALS } from "../data";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DealsSlider from "../components/weeklyDealSlider/dealsSlider";
import DealsTabs from "../components/weeklyDealTabs/DealsTabs";
import Head from "next/head";



const Home: NextPage = () => {
  const [count, setCount] = useState(0);
  const [featureSlide, setfeatureSlide] = useState(0);

  return (
    <>
       <Head>
        <title>Vigorous Motor: Through this platform you can get access to used two as well as four wheeler vehicles in your city , directly from the delaers</title>
        <meta name="description" content="Through this platform you can get access to used two as well as four wheeler vehicles in your city , directly from the delaers" />
      </Head>
    {/* <Header/> */}
      <Banner />
      <div

      className={styles.section_deals}>
        <div className={styles.left_box}>
          <div className={styles.header}>
            <h2 className={styles.section_title}>
              <strong>Deals </strong><span style={{marginLeft:"0.2rem"}} > of the week </span>
            </h2>
            {/* <div>
              <RiArrowDropLeftLine color="gray" className="largeIcon icon" />
              <RiArrowDropRightLine color="gray" className="largeIcon icon" />
            </div> */}
          </div>
          <DealsSlider
            // deals={DEALS}
            // next={() => setCount(count + 1)}
            // prev={() => setCount(count - 1)}
            currentSlide={count}
          />
        </div>
        <div className={styles.right_box}>
          <DealsTabs />
        </div>
      </div>
      {/* <OurServices /> */}
      {/* <BannerWithCards/> */}
      {/* <div className={feature.section_feature}>
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
        <div className={feature.right_box}></div>
      </div> */}
      {/* <Footer/> */}
      </>

  );
};

export default Home;
