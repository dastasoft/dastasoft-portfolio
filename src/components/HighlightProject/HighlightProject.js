import styled from 'styled-components';

import HighlightProjectBase from './HighlightProjectBase';

const HighlightProject = styled(HighlightProjectBase)`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .mobile-preview {
    img {
      max-width: 30vh;
      height: auto;
    }
  }

  .project-info {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 2rem;
    padding: 1rem;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0.5rem;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

    h3 {
      padding: 0.2rem 0 0.5rem 0;
    }

    .description {
      font-size: calc(10px + 1vmin);
      margin: 0.5rem 0;
    }

    .made {
      font-size: calc(8px + 1vmin);
      padding: 0.2rem 0;
    }

    .tech {
      display: flex;
      justify-content: space-around;
      padding: 0.5rem 0;
      width: 20rem;
    }

    .long-description {
      display: none;
      margin: 0.5rem 2rem;

      li {
        padding: 0.2rem;
      }
    }
  }

  @media screen and (min-width: 760px) {
    .content {
      flex-direction: row;
      align-items: stretch;
    }

    .mobile-preview {
      img {
        max-width: 15rem;
        height: auto;
      }
    }

    .project-info {
      align-items: flex-start;
      padding: 3rem;
      margin: 0;

      .tech {
        display: none;
      }

      .long-description {
        display: block;
      }
    }
  }
`;

export default HighlightProject;
