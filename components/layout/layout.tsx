import Image from "next/image";
import Footer from "../footer/footer";
import Header from "../header/header";
import {Suspense} from 'react'
import dynamic from "next/dynamic";
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
