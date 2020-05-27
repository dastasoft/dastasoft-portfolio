import React from 'react';

const TechTagBase = ({ className, text }) => {
  return (
    <button className={className} type="button">
      {text}
    </button>
  );
};

export default TechTagBase;
