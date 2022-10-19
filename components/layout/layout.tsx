import Image from "next/image";
import Footer from "../footer/footer";
import Header from "../header/header";

const layout = ({ children }:any) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default layout;
