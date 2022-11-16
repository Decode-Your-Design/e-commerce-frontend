import Image from "next/image";
import Footer from "../footer/footer";
import dynamic from "next/dynamic";
const Header = dynamic(()=>import('../header/header'),{ssr:false})
// import Header from "";
import {Suspense} from 'react'
import React from 'react'
import { appContext } from "../../context/appContext";
import Toastify from "../toastify/toastify";
const layout = ({ children }:any) => {
  const {openToastify} = React.useContext(appContext)
  return (
    <>
    {
      openToastify &&
    <Toastify/>
    }
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
