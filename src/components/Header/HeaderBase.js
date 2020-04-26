import React from 'react';
import { string } from 'prop-types';

const HeaderBase = ({ className }) => {
  return (
    <header className={className}>
      <figure>Logo</figure>
    </header>
  );
};

HeaderBase.propTypes = {
  className: string.isRequired
};

export default HeaderBase;
