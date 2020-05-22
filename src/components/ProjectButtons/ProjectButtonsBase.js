import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectButtonsBase = ({
  className,
  projectLink,
  sourceLink,
  size = '2x'
}) => {
  return (
    <div className={className}>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <span>Launch Live</span>
        <FontAwesomeIcon
          icon={['fas', 'external-link-square-alt']}
          size={size}
        />
      </a>
      <a href={sourceLink} target="_blank" rel="noopener noreferrer">
        <span>View Code</span>
        <FontAwesomeIcon icon={['fab', 'github']} size={size} />
      </a>
    </div>
  );
};

export default ProjectButtonsBase;
