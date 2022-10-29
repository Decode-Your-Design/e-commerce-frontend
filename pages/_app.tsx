import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
// import {appContextProvider} from '../context/appContext'
import { AppContextProvider } from "../context/appContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <AppContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContextProvider>

  );
}

export default MyApp;
