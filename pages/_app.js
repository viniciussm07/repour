import '@/styles/globals.css'

import { useRouter } from 'next/router';
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import * as gtag from "/lib/gtag";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: gtag.GA_TRACKING_ID });
  }, []);

  return <Component {...pageProps} />
}
