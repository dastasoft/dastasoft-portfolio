import styled from 'styled-components';

import IntroductionBase from './IntroductionBase';

const Introduction = styled(IntroductionBase)`
  min-height: 100vh;
  font-size: calc(1rem + 1vmin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .custom-typist {
    display: block;
    height: 3rem;
  }

  .desc {
    flex-grow: 1;
    padding: 1rem;
  }

  p,
  span,
  div {
    padding: 1em 0;
    text-align: center;
  }

  b {
    color: var(--highligh);
  }
`;

export default Introduction;
