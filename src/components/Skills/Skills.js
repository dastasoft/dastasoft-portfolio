import styled from 'styled-components';

import SkillsBase from './SkillsBase';

const Skills = styled(SkillsBase)`
  background-color: var(--skills);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .flex {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    > *:last-of-type {
      margin-right: 0;
    }
  }

  .current-stack {
    justify-content: space-around;
  }

  .coming-soon {
    justify-content: space-around;
  }

  .skill {
    margin-bottom: 1rem;
    margin-right: 1.5rem;
  }

  @media screen and (min-width: 660px) {
    .flex {
      justify-content: space-around;
    }
  }
`;

export default Skills;
