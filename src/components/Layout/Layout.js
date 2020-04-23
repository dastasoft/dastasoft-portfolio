import React, { useEffect } from 'react';
import WOW from 'wowjs';

import Header from '../Header';
import Footer from '../Footer';
import Map from '../Map';

const Layout = ({ children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Map />
      <Footer />
    </div>
  );
};

export default Layout;
