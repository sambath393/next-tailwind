import React from 'react';
import { RecoilRoot } from 'recoil';
import '../utilities/i18n';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
