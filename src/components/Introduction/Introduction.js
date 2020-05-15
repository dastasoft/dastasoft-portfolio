import styled from 'styled-components';

import IntroductionBase from './IntroductionBase';

const Introduction = styled(IntroductionBase)`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .desc {
    flex-grow: 1;
    padding: 1rem;
  }

  p,
  span {
    padding: 1em 0;
    text-align: center;
  }

  b {
    color: var(--important);
  }
`;

export default Introduction;
