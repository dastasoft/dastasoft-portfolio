import styled from 'styled-components';

import HighlightProjectBase from './HighlightProjectBase';

const HighlightProject = styled(HighlightProjectBase)`
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

  .actions {
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: var(--contrast);
      padding: 0.5rem;
      background: linear-gradient(
        to bottom right,
        var(--important),
        var(--sub)
      );
      border-radius: 0.5rem;

      span {
        margin-right: 0.5rem;
      }
    }
  }
`;

export default HighlightProject;
