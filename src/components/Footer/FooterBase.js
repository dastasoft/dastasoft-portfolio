import React from 'react';
import { string } from 'prop-types';

const FooterBase = ({ className }) => {
  return (
    <footer className={className}>
      <span>by dastasoft @2020</span>
    </footer>
  );
};

FooterBase.propTypes = {
  className: string.isRequired
};

export default FooterBase;
