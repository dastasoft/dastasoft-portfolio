/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';

const SkillsBase = ({ className, currentStack, other, learning, tools }) => {
  return (
    <section className={className}>
      <h1>Skills</h1>
      <div className="content">
        <h4 className="current-stack-title">Current Stack</h4>
        <div className="current-stack">
          {currentStack.map(skill => (
            <Icon
              key={skill}
              {...skill}
              className="wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
        <div className="other">
          {other.map(skill => (
            <Icon
              key={skill}
              {...skill}
              className="wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
        <h4>Tools</h4>
        <div className="tools">
          {tools.map(skill => (
            <Icon
              key={skill}
              {...skill}
              className="wow animate__animated animate__zoomIn"
            />
          ))}
        </div>
        <h4>Learning</h4>
        <div className="learning">
          {learning.map(skill => (
            <Icon
              key={skill}
              {...skill}
              className="wow animate__animated animate__zoomIn"
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
