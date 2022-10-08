import React from "react";
import styles from "../../styles/header.module.css";
import { headerItems } from "../../data";
export default function header() {
  return (
    <div className={styles.headerContainer}>
      {headerItems.map((ele) => (
        <>
          <p>{ele}</p>
          <span>|</span>
        </>
      ))}
    </div>
  );
}
