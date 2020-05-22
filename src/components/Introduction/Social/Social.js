import styled from 'styled-components';

import SocialBase from './SocialBase';

const Social = styled(SocialBase)`
  width: 100%;
  display: flex;
  justify-content: space-around;

  a {
    color: var(--highligh);
  }
`;

export default Social;
