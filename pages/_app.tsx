import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/layout";
// import {appContextProvider} from '../context/appContext'
import { AppContextProvider } from "../context/appContext";
import Script from "next/script";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script strategy="afterInteractive"   src="https://www.googletagmanager.com/gtag/js?id=G-K07ZN9LLHH"/> 
    {/* <script ></script> */}
    {/* </Script> */}
<Script id="google-analytics" strategy="afterInteractive"  >
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-K07ZN9LLHH');
  `
}
</Script>
    <AppContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AppContextProvider>
    </>
  );
}

export default MyApp;
