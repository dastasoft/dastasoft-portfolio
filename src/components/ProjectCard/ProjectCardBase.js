import React from 'react';
import { string, array, node } from 'prop-types';

import Icon from '../Icons';

const ProjectCardBase = ({
  className,
  previewImg,
  title,
  description,
  techList
}) => {
  return (
    <section className={className}>
      <figure>
        <img src={previewImg} alt={`${title} preview`} />
      </figure>
      <div>
        <h1>{title}</h1>
        <span>{description}</span>
        <div>
          {techList.map(tech => (
            <Icon key={tech} name={tech} width="100px" />
          ))}
        </div>
      </div>
      <div>
        <button type="button">Check it out</button>
        <button type="button">View source code</button>
      </div>
    </section>
  );
};

ProjectCardBase.propTypes = {
  className: string.isRequired,
  title: string,
  previewImg: node,
  description: string,
  techList: array
};

ProjectCardBase.defaultProps = {
  title: '',
  previewImg: null,
  description: '',
  techList: []
};

export default ProjectCardBase;
