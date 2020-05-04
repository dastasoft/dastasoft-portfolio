import React from 'react';

import AvatarImg from '../../../assets/images/avatar.jpg';

const AvatarBase = ({ className }) => {
  return (
    <figure className={className}>
      <img src={AvatarImg} alt="avatar" />
    </figure>
  );
};

export default AvatarBase;
