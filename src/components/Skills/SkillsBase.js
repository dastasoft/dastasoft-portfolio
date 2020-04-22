/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { string } from 'prop-types';

import Icon from '../Icons';

const SkillsBase = ({ className }) => {
  const skills = [
    { name: 'html', caption: 'HTML5' },
    { name: 'css', caption: 'CSS3 / Flexbox / CSS Grid' },
    { name: 'javascript', caption: 'JavaScript / ES2020' },
    { name: 'react', caption: 'ReactJS / React Native / Hooks' }
  ];

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
  className: string.isRequired
};

export default SkillsBase;
