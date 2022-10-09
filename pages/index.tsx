import type { NextPage } from "next";
import Image from "next/image";
import Header from "../common-components/header/header";
import NavigationBar from "../common-components/navigationBar/navigationBar";
import styles from "../styles/Home.module.css";
import Unknown from "../common-components/unknown/unknown";
import Banner from "../common-components/banner/banner";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <NavigationBar />
      <Unknown/>
      <Banner/>
    </>
  );
};

export default Home;
