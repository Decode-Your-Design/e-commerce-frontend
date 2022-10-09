import React from "react";
import {useState} from 'react'
import styles from "../../styles/unknown.module.css";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'

export default function Unknown() {
  const [openDepartmentDropdown,setOpenDepartmentDropdown] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.departmentDropdown}>
        <p>
        All Departments
        </p>
       { openDepartmentDropdown ?
        <RiArrowDropUpLine cursor="pointer" /> :
        <RiArrowDropDownLine cursor="pointer" />}
        
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
