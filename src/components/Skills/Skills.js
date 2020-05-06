import styled from 'styled-components';

import SkillsBase from './SkillsBase';

const Skills = styled(SkillsBase)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .flex {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .current-stack {
    justify-content: space-between;
  }

  .skill {
    margin-bottom: 1rem;
    margin-right: 1.5rem;

    > *:last-of-type {
      margin-right: 0;
    }
  }
`;

export default Skills;
