import React from 'react';
import { string, array, node } from 'prop-types';

import Icon from '../Icons';

const HighlightProjectBase = ({
  className,
  title,
  mobileImg,
  description,
  techList
}) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <figure>
        <img src={mobileImg} alt={`${title} mobile preview`} />
      </figure>
      <span>{description}</span>
      <span>Made with</span>
      <div>
        {techList.map(tech => (
          <Icon key={tech} name={tech} width="100px" />
        ))}
      </div>
      <div>
        <button type="button">Check it out</button>
        <button type="button">View source code</button>
      </div>
    </section>
  );
};

HighlightProjectBase.propTypes = {
  className: string.isRequired,
  title: string,
  mobileImg: node,
  description: string,
  techList: array
};

HighlightProjectBase.defaultProps = {
  title: '',
  mobileImg: null,
  description: '',
  techList: []
};

export default HighlightProjectBase;
