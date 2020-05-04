/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';

const SkillsBase = ({ className, currentStack, other, comingSoon, tools }) => {
  return (
    <section className={className}>
      <h1>Skills</h1>
      <div className="skills">
        <div className="current-stack">
          <h3>Current Stack</h3>
          <div className="flex">
            {currentStack.map(skill => (
              <Icon key={skill} {...skill} width="25vw" />
            ))}
          </div>
        </div>
        <div className="other">
          <h3>Other</h3>
          <div className="flex">
            {other.map(skill => (
              <Icon key={skill} {...skill} width="15vw" />
            ))}
          </div>
        </div>
        <div className="tools">
          <h3>Tools</h3>
          <div className="flex">
            {tools.map(skill => (
              <Icon key={skill} {...skill} width="15vw" />
            ))}
          </div>
        </div>
        <div className="coming-soon">
          <h3>Coming Soon</h3>
          <div className="flex">
            {comingSoon.map(skill => (
              <Icon key={skill} {...skill} width="15vw" />
            ))}
          </div>
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
