import styled from 'styled-components';

import HighlightProjectBase from './HighlightProjectBase';

const HighlightProject = styled(HighlightProjectBase)`
  background-color: var(--highlightProject);
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .mobile-preview {
    margin: 0 auto;

    img {
      width: 50vw;
      max-width: 30vh;
      height: auto;
    }
  }

  .description {
    font-size: 1.2rem;
    text-align: center;
  }

  .tech {
    display: flex;
    justify-content: space-around;
  }
`;

export default HighlightProject;
