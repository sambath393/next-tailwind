import React from 'react';
import { RecoilRoot } from 'recoil';
import Head from 'next/head';
import '../utilities/i18n';
import '../styles/globals.css';
import GATag from '../components/GATag';
import FbPixel from '../components/FbPixel';

const config = {
  enableRecoil: false,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;

  let App = (
    <>
      <Head>
        <GATag />
        <FbPixel />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );

  if (config.enableRecoil) {
    App = (
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );
  }

  return <App />;
}

export default MyApp;
