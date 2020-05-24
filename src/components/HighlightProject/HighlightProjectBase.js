import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';
import HighlightPreview from '../../assets/images/highlight_preview.png';
import HighlightFullPreview from '../../assets/images/highlight_full_preview.png';
import ProjectButtons from '../ProjectButtons/ProjectButtons';

const HighlightProjectBase = ({
  className,
  title,
  description,
  techList,
  longDescription,
  projectLink,
  sourceLink
}) => {
  return (
    <section className={className}>
      <h1>Last Project</h1>
      <div className="content">
        <figure className="mobile-preview">
          <img
            className="mobile wow animate__animated animate__fadeIn"
            src={HighlightPreview}
            alt={`${title} mobile preview`}
          />
          <img
            className="full wow animate__animated animate__fadeIn"
            src={HighlightFullPreview}
            alt={`${title} mobile and desktop preview`}
          />
        </figure>
        <div className="project-info">
          <h3>{title}</h3>
          <p className="description">{description}</p>
          <p className="made">Made with</p>
          <div className="tech">
            {techList &&
              techList.map(tech => (
                <Icon
                  key={tech}
                  name={tech}
                  className="wow animate__animated animate__rollIn"
                />
              ))}
          </div>
          <ul className="long-description">
            {longDescription &&
              longDescription.map(item => <li key={item}>{item}</li>)}
          </ul>
          <ProjectButtons projectLink={projectLink} sourceLink={sourceLink} />
        </div>
      </div>
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
