import styled from 'styled-components';

import TechTagBase from './TechTagBase';

const TechTag = styled(TechTagBase)`
  padding: 4px 10px;
  margin: 0px 5px 5px 0px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 1px solid var(--highligh);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: calc(0.5rem + 1vmin);

  &:hover {
    background-color: var(--important);
    color: white;
  }
`;

export default TechTag;
