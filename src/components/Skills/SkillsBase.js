/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string, array } from 'prop-types';

import Icon from '../Icons';

const SkillsBase = ({ className, skills }) => {
  return (
    <section className={className}>
      <h1>Skills</h1>
      <div className="skills">
        {skills.map(skill => (
          <Icon key={skill} {...skill} width="100px" />
        ))}
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
