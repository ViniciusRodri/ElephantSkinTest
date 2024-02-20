import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';
import { CSSReset } from '@chakra-ui/react';
import AppProvider from '../hooks';

import { GlobalStyles } from '../styles/globals';
import 'typeface-open-sans'; // Importe a font Open Sans aqui

import '@fontsource/open-sans'; // Defaults to weight 400
import '@fontsource/open-sans/400.css'; // Specify weight
import '@fontsource/open-sans/400-italic.css'; // Specify weight and style

function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <AppProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#000" />
          <meta name="msapplication-TileColor" content="#000" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />

          <meta property="og:title" />
          <meta property="og:description" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" />
          <meta property="og:image" />
          <meta property="og:image:secure_url" />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="description" />
          <meta name="author" content="" />
          <meta name="robots" content="index, follow" />

          <link rel="shortcut icon" type="image/png" />
        </Head>

        <CSSReset />
        <GlobalStyles />

        <Component {...pageProps} />
      </AppProvider>
    </main>
  );
}
export default App;
