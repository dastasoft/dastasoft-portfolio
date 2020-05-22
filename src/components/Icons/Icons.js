import styled from 'styled-components';
import { string } from 'prop-types';

import IconsBase from './IconsBase';

const Icons = styled(IconsBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .icon-capsule {
    background-color: ${({ background }) =>
      background ? 'rgba(0, 0, 0, 0.25)' : ''};
    border: ${({ outlined }) =>
      outlined ? '1px solid var(--highligh)' : 'none'};
    padding: 0.2rem;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    min-width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .caption {
    margin-top: 0.5em;
    font-size: calc(5px + 1vmin);
    text-align: center;
  }
`;

IconsBase.propTypes = {
  width: string,
  height: string
};

IconsBase.defaultProps = {
  width: '100%',
  height: '100%'
};

export default Icons;
