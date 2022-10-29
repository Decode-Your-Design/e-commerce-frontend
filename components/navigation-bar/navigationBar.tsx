import React, { useState } from "react";
import styles from "../../styles/navigationbar.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";
import MegaMenu from "../megaMenu/megaMenu";
import { navigationItems } from "../../data";
import { useRouter } from "next/router";

export default function navigationBar() {
  const [currentHovered, setCurrentHovered] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [timeOutId, setTimeoutId] = useState();
  const router = useRouter();
  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.logoDiv}>
          <img
          onClick={()=>router.push('/')}
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Car-Logo-Design-Source-PNG-Transparent.png"
            className={styles.logo}
          />
        </div>
        <div className={styles.navigationItems}>
          {navigationItems.map((navigationItem, key) => (
            <p
              key={key}
              onClick={() => {
                router.push(navigationItem.url);
                // setOpenDrawer(!openDrawer);
              }}
              style={{ color: currentHovered == key ? "#e14546" : "#444" }}
              onMouseOver={() => {
                // clearTimeout(timeOutId);
                // setCurrentHovered(key);
                // setOpenDrawer(true);
              }}
              onMouseLeave={() => {
                var timeOutid = setTimeout(() => {
                  // setCurrentHovered(null);
                  // setOpenDrawer(false);
                }, 1000);
                // setTimeoutId(timeOutid);
              }}
            >
              {openDrawer && currentHovered == key && (
                <MegaMenu
                  setCurrentHovered={setCurrentHovered}
                  timeOutId={timeOutId}
                />
              )}
              {navigationItem.title}
            </p>
          ))}
                  <button
            onClick={() => {
              router.push("/wishlist");
            }}
            className={styles.headerButton}
          >
            My wishlist
          </button>
          <button
            onClick={() => {
              router.push("/login");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            Login
          </button>
         
          <button
            onClick={() => {
              router.push("/vendor-product-list");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            My Products
          </button>
          <button
            onClick={() => {
              router.push("/my-profile");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            My Profile
          </button>
          {/* <button
            onClick={() => {
              router.push("/vendor-list");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            Vendor list
          </button> */}
         
        
          <button
            onClick={() => {
              router.push("/add-vendor");
              // setOpenDrawer(!openDrawer);
            }}
            className={styles.headerButton}
          >
            Add vendor
          </button>
         
        
  
          
        </div>
      </div>
    </>
  );
}
