import styled from 'styled-components';

import ProjectsBase from './ProjectsBase';

const Projects = styled(ProjectsBase)`
  background-color: var(--projects);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 30rem));
  grid-auto-rows: auto;
  grid-gap: 1rem;
  justify-content: center;
`;

export default Projects;
