import React, { useState } from "react";
import styles from "../../styles/navigationbar.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import MegaMenu from "../megaMenu/megaMenu";
import { navigationItems } from "../../data";

export default function navigationBar() {
  const [currentHovered, setCurrentHovered] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [timeOutId, setTimeoutId] = useState();
  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.logoDiv}>
          <Image src={logo} className={styles.logo} />
        </div>
        <div className={styles.navigationItems}>
          {navigationItems.map((ele, key) => (
            <p
              onClick={() => {
                setOpenDrawer(!openDrawer);
              }}
              style={{ color: currentHovered == key ? "#e14546" : "#444" }}
              onMouseOver={() => {
                clearTimeout(timeOutId);
                setCurrentHovered(key);
                setOpenDrawer(true);
              }}
              onMouseLeave={() => {
                var timeOutid = setTimeout(() => {
                  setCurrentHovered(null);
                  setOpenDrawer(false);
                }, 1000);
                setTimeoutId(timeOutid);
              }}
            >
              {openDrawer && currentHovered == key && (
                <MegaMenu
                  setCurrentHovered={setCurrentHovered}
                  timeOutId={timeOutId}
                />
              )}
              {ele}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
