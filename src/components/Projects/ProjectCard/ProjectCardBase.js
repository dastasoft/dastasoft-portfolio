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
      <div className="card">
        {previewImg && (
          <div className="preview">
            <img
              className="wow animate__animated animate__fadeIn"
              src={previewImg}
              alt={`${title} preview`}
            />
          </div>
        )}
        <div className="card-content">
          <h2 className="title">{title}</h2>
          <span className="description">{description}</span>
          <div className="tech">
            {techList.map(tech => (
              <Icon key={tech} name={tech} caption={tech} />
            ))}
          </div>
          {projectLink || sourceLink ? (
            <ProjectButtons
              projectLink={projectLink}
              sourceLink={sourceLink}
              size="1x"
            />
          ) : (
            <span className="not-available">
              This project is no longer available
            </span>
          )}
        </div>
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
