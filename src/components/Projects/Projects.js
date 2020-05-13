import styled from 'styled-components';

import ProjectsBase from './ProjectsBase';

const Projects = styled(ProjectsBase)`
  background-color: var(--projects);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 1rem 0;
`;

export default Projects;
