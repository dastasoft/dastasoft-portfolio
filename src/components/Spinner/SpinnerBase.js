import React from 'react';
import { string, oneOf } from 'prop-types';

const SpinnerBase = ({ className, type }) => {
  return (
    <div className={className}>
      <div className={type}>Loading...</div>
    </div>
  );
};

SpinnerBase.propTypes = {
  className: string.isRequired,
  type: oneOf([
    'circle-acceleration',
    'circle',
    'circle-pop-dots',
    'circle-dots',
    'circle-dots-acceleration',
    'dots',
    'circle-trail'
  ])
};

SpinnerBase.defaultProps = {
  type: 'circle-acceleration'
};

export default SpinnerBase;
