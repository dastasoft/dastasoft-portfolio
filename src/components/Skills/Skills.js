import styled from 'styled-components';

import SkillsBase from './SkillsBase';

const Skills = styled(SkillsBase)`
  padding: 21px;

  .skills {
    padding: 8px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-gap: 1em;
  }
`;

export default Skills;
