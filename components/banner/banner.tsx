import React from "react";
import styles from "../../styles/banner.module.css";
import {RiArrowRightLine} from 'react-icons/ri'
import bannerImage from '../../public/banner.jpeg'
import Image from "next/image";
export default function banner() {
  return (
    // <div className={styles.bannerContainer}  >
      <Image layout="responsive" height={200}     src={bannerImage} />
    // </div>
  );
}
