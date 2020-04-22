import React, { useEffect } from 'react';
import WOW from 'wowjs';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
