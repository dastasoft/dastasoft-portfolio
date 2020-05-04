import React, { useEffect } from 'react';
import WOW from 'wowjs';

import Footer from '../Footer';

const LayoutBase = ({ className, children }) => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <div className={className}>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutBase;
