import styled from 'styled-components';

import ProjectsBase from './ProjectsBase';

const Projects = styled(ProjectsBase)`
  .project-deck {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18rem, 30rem));
    grid-auto-rows: 225px;
    grid-gap: 1rem;
    justify-content: center;
  }

  @media screen and (min-width: 660px) {
    .project-deck {
      grid-auto-rows: 300px;
      padding: 1rem 0 3rem 0;
    }
  }

  @media screen and (min-width: 1200px) {
    .project-deck {
      padding: 3rem 0 5rem 0;
    }
  }
`;

export default Projects;
