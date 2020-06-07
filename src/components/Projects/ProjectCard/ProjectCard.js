import styled from 'styled-components';

import ProjectCardBase from './ProjectCardBase';

const ProjectCard = styled(ProjectCardBase)`
  .card {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

    .preview {
      display: none;
      width: inherit;
      height: inherit;
      img {
        width: auto;
        height: inherit;
      }
    }

    .card-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .title {
        font-size: calc(1rem + 1vmin);
      }

      .description {
        padding: 0.5rem 0;
        font-size: calc(0.5rem + 1vmin);
      }

      .tech {
        display: flex;
        justify-content: space-around;
        padding: 0.5rem 0;
        margin-bottom: 1rem;
        height: 4rem;
      }

      .not-available {
        color: var(--highligh);
        padding: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }

  @media screen and (min-width: 660px) {
    .card {
      .preview {
        display: block;
        width: 35%;
        margin-left: -1rem;
      }
    }
  }
`;

export default ProjectCard;
