import styled from 'styled-components';

import BioBase from './BioBase';

const Bio = styled(BioBase)`
  text-align: center;

  div {
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    margin: 2rem auto;
    max-width: 50rem;
    text-align: left;

    p {
      font-size: calc(0.6rem + 1vmin);
      line-height: 2rem;
      color: var(--contrast);
      margin-bottom: 2rem;

      b {
        font-weight: normal;
        color: var(--highligh);
      }
    }

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .contact {
    display: block;
    margin: 1rem;

    a {
      padding: 1rem;
      border: 1px solid var(--highligh);
      color: var(--highligh);
      border-radius: 0.25rem;
      text-decoration: none;
    }

    a:hover {
      background-color: var(--highligh);
      color: var(--contrast);
    }
  }
`;

export default Bio;
