import styled from 'styled-components';

import ProjectCardBase from './ProjectCardBase';

const ProjectCard = styled(ProjectCardBase)`
  .preview {
    display: none;
  }

  .card {
    width: 100%;
    height: 100%;
    border: 2px solid var(--important);
    border-radius: 2px;
    padding: 0 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .tech {
    display: flex;
    justify-content: space-around;
  }
`;

export default ProjectCard;
