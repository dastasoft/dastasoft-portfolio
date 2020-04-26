import React, { useEffect } from 'react';
import WOW from 'wowjs';

import Header from '../Header';
import Footer from '../Footer';

const LayoutBase = ({ className, children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutBase;
