import React from "react";
import {useState} from 'react'
import styles from "../../styles/unknown.module.css";
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RiMenuFill} from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'
import {RiHeartLine} from 'react-icons/ri'
import {RiShoppingCartLine} from 'react-icons/ri'
import {RiSearchLine} from 'react-icons/ri'
import DepartmentDropdown from "../departmentDropdown/departmentDropdown";


export default function Unknown() {
  const [openDepartmentDropdown,setOpenDepartmentDropdown] = useState(false)
  return (
    <div className={styles.container}>
      <div className={styles.departmentDropdown}>
        {openDepartmentDropdown &&
        <DepartmentDropdown/>
}
<RiMenuFill className="icon " />
        <p>
        All Departments
        </p>
       { openDepartmentDropdown ?
        <RiArrowDropUpLine
        className="mediumIcon icon"
        onClick={()=>setOpenDepartmentDropdown(!openDepartmentDropdown)}
        cursor="pointer" /> :
        <RiArrowDropDownLine
        className="mediumIcon icon"
        onClick={()=>setOpenDepartmentDropdown(!openDepartmentDropdown)}
         />}
        
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
        <div className={styles.searchIcon}>
          <RiSearchLine color="white" className="smallIcon" />
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.badge}>
        <RiHeartLine className="icon mediumIcon"  />
        <div  >
          0
        </div>
        </div>
        <div className={styles.badge}>
        <RiShoppingCartLine className="icon mediumIcon"  />
        <div  >
          0
        </div>
        </div>
        <div className={styles.cartAmount} >
          <span>Your cart</span>
          <p>$0.00</p>
        </div>
      </div>
    </div>
  );
}
