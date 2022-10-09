import React from "react";
import styles from "../../styles/header.module.css";
import NavigationBar from "../../components/navigation-bar/navigationBar";
import Unknown from "../../components/unknown/unknown";
import Banner from "../../components/banner/banner";
import { headerItems } from "../../data";
export default function header() {
  return (
    <>
      <div className={styles.headerContainer}>
        {headerItems.map((ele) => (
          <>
            <p>{ele}</p>
            <span>|</span>
          </>
        ))}
      </div>
      <NavigationBar />
      <Unknown />
    </>
  );
}
