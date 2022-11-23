import { useRouter } from "next/router";
import { useState } from "react";
import { PRODUCT } from "../../data";
import styles from "../../styles/home.module.css";
import ProductCard from "../weeklyDealProduct/ProductCard";
import Bikes from "./bikes";
import Cars from "./cars";
import Scooties from "./scooties";
const DealsTabs = () => {
  const [toggleState, setToggleState] = useState(0);

  const [currentTab, setCurrentTab] = useState("Scooty");
  const vehicleTabs = [
    { heading: "Scooty", url: "scooty" },

    {
      heading: "Cars",
      url: "cars",
    },
    {
      heading: "Bikes",
      url: "bikes",
    },
  ];
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  const router = useRouter();
  return (
    <>
      <div className={styles.tabs}>
        {vehicleTabs.map((vehicleType, key) => (
          <>
            <button
              onClick={() => {
            
                toggleTab(key);
                
                // setCurrentTab(vehicleType.heading);
              }}
              className={
                toggleState === key  ? styles.activeTabs : styles.tabsBtn
              }
            >
              {vehicleType.heading}
            </button>
            <span className={styles.footer_span}>|</span>
          </>
        ))}
      </div>
      {toggleState==0 && <Scooties toggleState={toggleState} />}
      {toggleState==1 && <Cars toggleState={toggleState} />}
      {toggleState==2 && <Bikes toggleState={toggleState} />}

    </>
  );
};

export default DealsTabs;
