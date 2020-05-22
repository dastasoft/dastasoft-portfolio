import styled from 'styled-components';

import ProjectButtonsBase from './ProjectButtonsBase';

const ProjectButtons = styled(ProjectButtonsBase)`
  display: flex;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--highligh);
    padding: 0.5rem;
    border: 1px solid var(--highligh);
    border-radius: 2px;
    margin-right: 0.5rem;

    span {
      margin-right: 0.5rem;
    }
  }
`;

export default ProjectButtons;
