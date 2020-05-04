import styled from 'styled-components';

import IntroductionBase from './IntroductionBase';

const Introduction = styled(IntroductionBase)`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .desc {
    flex-grow: 1;
    padding: 1rem;
  }

  @media screen and (min-width: 60em) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'avatar desc'
      'social desc';

    .avatar {
      grid-area: avatar;
    }

    .social {
      grid-area: social;
    }

    .desc {
      grid-area: desc;
      align-self: center;
    }
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
