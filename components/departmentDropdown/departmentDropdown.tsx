import React from 'react'
import styles from '../../styles/departmentDropdown.module.css'
import { allDepartments } from '../../data'
export default function departmentDropdown() {
  return (
    <div
    className={styles.department_dropdown}
    >
        {
            allDepartments.map((department)=>(
                <>
            <p>
                {department}
            </p>
            <hr/>
            </>
            ))
        }
    </div>
  )
}
