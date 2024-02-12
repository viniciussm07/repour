import { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from "/lib/gtag";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
      <meta
          name="google-site-verification"
          content="7RPTkb9XB6qmjoHvD8cvFMGLjMf2Ew4_pS8LaTnlaRk"
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </Head>
      <body className='scrollbar'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
