import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import Typist from 'react-typist';

import Avatar from './Avatar';
import Social from './Social';

const IntroductionBase = ({
  className,
  nick,
  name,
  text,
  place,
  socialList
}) => {
  return (
    <section className={className}>
      <Avatar className="avatar" />
      <div className="desc">
        <span>
          <Typist
            startDelay={200}
            avgTypingDelay={100}
            cursor={{ show: false }}
          >
            <b>{nick}</b>
            <Typist.Backspace count={7} delay={500} />
            <b>{name}</b>
          </Typist>
        </span>
        <p>{text}</p>
        <p>
          Living in
          <Typist
            startDelay={3500}
            avgTypingDelay={100}
            cursor={{ show: false }}
          >
            <b> {place}</b>
          </Typist>
        </p>
      </div>
      <Social className="social" socialList={socialList} />
    </section>
  );
};

IntroductionBase.propTypes = {
  className: string.isRequired,
  nick: string,
  name: string,
  text: string,
  place: string,
  socialList: arrayOf(
    shape({
      name: string,
      linkg: string
    })
  )
};

IntroductionBase.defaultProps = {
  nick: '',
  name: '',
  text: '',
  place: '',
  socialList: [{ name: '', link: '' }]
};

export default IntroductionBase;
