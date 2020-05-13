import styled from 'styled-components';

import ProjectButtonsBase from './ProjectButtonsBase';

const ProjectButtons = styled(ProjectButtonsBase)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    color: var(--contrast);
    padding: 0.5rem;
    background: linear-gradient(to bottom right, var(--important), var(--sub));
    border-radius: 0.5rem;

    span {
      margin-right: 0.5rem;
    }
  }
`;

export default ProjectButtons;
