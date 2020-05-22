import styled from 'styled-components';

import ProjectCardBase from './ProjectCardBase';

const ProjectCard = styled(ProjectCardBase)`
  .preview {
    display: none;
  }

  .card {
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.25);

    .title {
      font-size: 1.4rem;
    }

    .description {
      padding: 0.5rem 0;
      font-size: 0.8rem;
    }
  }

  .tech {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0;
  }
`;

export default ProjectCard;
