import styled from 'styled-components';
import { string } from 'prop-types';

import IconsBase from './IconsBase';

const Icons = styled(IconsBase)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: ${({ width }) => width};
  }

  .caption {
    margin-top: 0.5em;
    font-size: 0.6rem;
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
