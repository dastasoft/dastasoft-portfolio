import styled from 'styled-components';

import HighlightProjectBase from './HighlightProjectBase';

const HighlightProject = styled(HighlightProjectBase)`
  background-color: var(--highlightProject);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .mobile-preview {
    width: 50vw;
    margin: 0 auto;

    img {
      width: inherit;
    }
  }

  .description {
    font-size: 1.2rem;
  }

  .tech {
    display: flex;
    justify-content: space-between;
  }
`;

export default HighlightProject;
