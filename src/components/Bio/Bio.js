import styled from 'styled-components';

import BioBase from './BioBase';

const Bio = styled(BioBase)`
  div {
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    margin: 1rem auto;
    max-width: 40rem;

    p {
      font-size: calc(0.6rem + 1vmin);
      line-height: 1.6rem;
      color: var(--contrast);

      b {
        font-weight: normal;
        color: var(--highligh);
      }
    }
  }
`;

export default Bio;
