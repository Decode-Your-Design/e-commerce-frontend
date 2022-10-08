import React from "react";
import styles from "../../styles/unknown.module.css";
export default function Unknown() {
  return (
    <div className={styles.container}>
      <div className={styles.departmentDropdown}>
        <p>
        All Departments
        </p>
        </div>
      <div className={styles.searchBox}>
        <input className={styles.input} placeholder="Search for products" />
        <div className={styles.cateogoryDropdown}>
          <select >
            <option value="BMW"> Categories</option>
            <option value="BMW"> Categories</option>
            <option value="BMW"> Categories</option>
            <option value="BMW"> Categories</option>
          </select>
        </div>
        <div className={styles.searchIcon}></div>
      </div>
      <div className={styles.userInfo}></div>
    </div>
  );
}
