import styled from 'styled-components';

import TechTagBase from './TechTagBase';

const TechTag = styled(TechTagBase)`
  padding: 4px 10px;
  margin: 0px 5px 5px 0px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: 1px solid teal;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  :hover {
    background-color: black;
    color: white;
  }
`;

export default TechTag;
