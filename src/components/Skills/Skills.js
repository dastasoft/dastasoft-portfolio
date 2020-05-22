import styled from 'styled-components';

import SkillsBase from './SkillsBase';

const Skills = styled(SkillsBase)`
  .content {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .current-stack {
    margin: 0.5rem 0 0.8rem 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(5rem, 9rem));
    grid-gap: 1em;
  }

  .other,
  .tools,
  .learning {
    margin: 0.5rem 0 1rem 0;
    display: grid;
    grid-template-columns: repeat(5, minmax(3rem, 5rem));
    grid-gap: 1em;
  }

  img {
    width: inherit;
    height: inherit;
  }
`;

export default Skills;
