import React from 'react';
import { string } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterBase = ({ className }) => {
  return (
    <footer className={className}>
      <span>by dastasoft @2020</span>
      <div>
        <FontAwesomeIcon icon={['fab', 'github']} />
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </div>
    </footer>
  );
};

FooterBase.propTypes = {
  className: string.isRequired
};

export default FooterBase;
