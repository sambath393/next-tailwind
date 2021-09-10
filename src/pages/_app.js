import React from 'react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import '../utilities/i18n';
import '../styles/globals.css';
import GATag from '../components/GATag';
import FbPixel from '../components/FbPixel';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <RecoilRoot>
      <Head>
        <GATag />
        <FbPixel />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
