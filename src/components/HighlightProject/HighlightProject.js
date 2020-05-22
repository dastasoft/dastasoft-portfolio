import styled from 'styled-components';

import HighlightProjectBase from './HighlightProjectBase';

const HighlightProject = styled(HighlightProjectBase)`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .mobile-preview {
    margin: 0 auto;

    img {
      width: 50vw;
      max-width: 30vh;
      height: auto;
    }
  }

  .project-info {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 34px;
    padding: 1rem;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1rem;
  }

  .description {
    font-size: calc(10px + 1vmin);
  }

  .made {
    font-size: calc(8px + 1vmin);
  }

  .tech {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 660px) {
    .content {
      flex-direction: row;
    }

    .mobile-preview {
      margin: 0 auto;

      img {
        width: auto;
        height: 100vh;
      }
    }
  }
`;

export default HighlightProject;
