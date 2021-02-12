import React from 'react';
import { string } from 'prop-types';

const FooterBase = ({ className }) => {
  return (
    <footer className={className}>
      <span>by dastasoft @{new Date().getFullYear()}</span>
    </footer>
  );
};

FooterBase.propTypes = {
  className: string.isRequired
};

export default FooterBase;
