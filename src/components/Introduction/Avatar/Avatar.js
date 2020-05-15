import styled from 'styled-components';

import AvatarBase from './AvatarBase';

const Avatar = styled(AvatarBase)`
  img {
    border-radius: 50%;
    vertical-align: middle;
    width: 12rem;
    max-width: 200px;
  }
`;

export default Avatar;
