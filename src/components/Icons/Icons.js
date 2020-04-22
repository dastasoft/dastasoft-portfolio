import styled from 'styled-components';
import { string } from 'prop-types';

import IconsBase from './IconsBase';

const Icons = styled(IconsBase)`
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  display: flex;
  flex-direction: column;
  align-items: center;
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
