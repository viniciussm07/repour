import '@/styles/globals.css'

import { useEffect } from "react";
import TagManager from "react-gtm-module";
import * as gtag from "/lib/gtag";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: gtag.GA_TRACKING_ID });
  }, []);

  return <Component {...pageProps} />
}
