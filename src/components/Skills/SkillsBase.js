/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';

const SkillsBase = ({ className, currentStack, other, comingSoon, tools }) => {
  return (
    <section className={className}>
      <h1>Skills</h1>
      <div>
        <h4>Current Stack</h4>
        <div className="flex current-stack">
          {currentStack.map(skill => (
            <Icon
              key={skill}
              {...skill}
              width="4rem"
              className="wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex">
          {other.map(skill => (
            <Icon
              key={skill}
              {...skill}
              width="2.5rem"
              className="skill wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
      </div>
      <div>
        <h4>Tools</h4>
        <div className="flex">
          {tools.map(skill => (
            <Icon
              key={skill}
              {...skill}
              width="2.5rem"
              className="skill wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
      </div>
      <div>
        <h4>Coming Soon</h4>
        <div className="flex coming-soon">
          {comingSoon.map(skill => (
            <Icon
              key={skill}
              {...skill}
              width="2.5rem"
              className="skill wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

SkillsBase.propTypes = {
  className: string.isRequired,
  skills: array
};

SkillsBase.defaultProps = {
  skills: []
};

export default SkillsBase;
