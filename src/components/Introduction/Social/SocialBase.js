import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialBase = ({ className, socialList }) => {
  return (
    <div className={className}>
      {socialList.map(social => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="wow animate__bounceIn"
            icon={['fab', social.name]}
            size="2x"
          />
        </a>
      ))}
    </div>
  );
};

SocialBase.propTypes = {
  className: string.isRequired,
  socialList: arrayOf(
    shape({
      name: string,
      link: string
    })
  )
};

SocialBase.defaultProps = {
  socialList: []
};

export default SocialBase;
