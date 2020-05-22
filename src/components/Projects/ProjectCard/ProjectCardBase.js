import React from 'react';
import { string, array, node } from 'prop-types';

import Icon from '../../Icons';
import ProjectButtons from '../../ProjectButtons/ProjectButtons';

const ProjectCardBase = ({
  className,
  previewImg,
  title,
  description,
  techList,
  projectLink,
  sourceLink
}) => {
  return (
    <div className={className}>
      <div className="preview" />
      <div className="card">
        <h1 className="title">{title}</h1>
        <span className="description">{description}</span>
        <div className="tech">
          {techList.map(tech => (
            <Icon
              key={tech}
              name={tech}
              width="2.5rem"
              className="wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
        <ProjectButtons
          projectLink={projectLink}
          sourceLink={sourceLink}
          size="1x"
        />
      </div>
    </div>
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
