import React from 'react';
import { string } from 'prop-types';

const BioBase = ({ className, description }) => {
  return (
    <section className={className}>
      <h1>Bio</h1>
      <p>{description}</p>
    </section>
  );
};

BioBase.propTypes = {
  className: string.isRequired,
  description: string
};

BioBase.defaultProps = {
  description: ''
};

export default BioBase;
