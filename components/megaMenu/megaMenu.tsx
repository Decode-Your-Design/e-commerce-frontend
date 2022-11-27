import React, { useEffect } from "react";
import styles from "../../styles/megaMenu.module.css";
import { megaMenuItems } from "../../data";
export default function megaMenu({ timeOutId, setCurrentHovered }:any) {
  return (
    <div
      onMouseOver={() => clearTimeout(timeOutId)}
      onMouseLeave={() => {
        setCurrentHovered(null);
      }}
      className={styles.megaMenu}
    >
      {megaMenuItems.map((ele,key) => (
        <div key={key} className={styles.menuItems}>
          {ele.map((element, key) => (
            <p key={key} style={{ fontWeight: key == 0 ? "bold" : "" }}>{element}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
