import type { NextPage } from "next";
import Banner from "../components/banner/banner";
import styles from "../styles/home.module.css";
import feature from "../styles/feature.module.css";
import logo from "../public/img.jpg";
import Image from "next/image";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { DEALS } from "../data";
import { useEffect, useState } from "react";
import DealsSlider from "../components/weeklyDealSlider/dealsSlider";
import DealsTabs from "../components/weeklyDealTabs/DealsTabs";
import Home from "./home";
import Head from "next/head";
import Script from 'next/script'

const Index: NextPage = () => {
  return(
    <Home/>

  )
 };

export default Index;
