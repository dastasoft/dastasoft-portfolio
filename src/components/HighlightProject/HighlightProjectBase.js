import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';
import HighlightPreview from '../../assets/images/highlight_preview.png';
import ProjectButtons from '../ProjectButtons/ProjectButtons';

const HighlightProjectBase = ({
  className,
  title,
  description,
  techList,
  projectLink,
  sourceLink
}) => {
  return (
    <section className={className}>
      <h1>{title}</h1>
      <figure className="mobile-preview">
        <img src={HighlightPreview} alt={`${title} mobile preview`} />
      </figure>
      <p className="description">{description}</p>
      <p>Made with</p>
      <div className="tech">
        {techList.map(tech => (
          <Icon
            key={tech}
            name={tech}
            width="15vw"
            className="wow animate__animated animate__rollIn"
          />
        ))}
      </div>
      <ProjectButtons projectLink={projectLink} sourceLink={sourceLink} />
    </section>
  );
};

HighlightProjectBase.propTypes = {
  className: string.isRequired,
  title: string,
  description: string,
  techList: array
};

HighlightProjectBase.defaultProps = {
  title: '',
  description: '',
  techList: []
};

export default HighlightProjectBase;
