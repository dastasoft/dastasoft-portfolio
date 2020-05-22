import React from 'react';
import { string } from 'prop-types';

const BioBase = ({ className, description }) => {
  return (
    <section className={className}>
      <h1>About Me</h1>
      <div>
        <p>
          Currently focused on <b>React</b>, <b>React-Native</b> and{' '}
          <b>NodeJS</b>. Always interested in new technologies and how they
          work. <b>Effort</b>, <b>discipline</b>, <b>motivation</b>,{' '}
          <b>creativity</b>, <b>encouraging a good atmosphere</b> and
          <b> communication</b> are my priorities.
          <br />
          <br />
          As a professional I try to keep myself in constant renewal and
          learning, without any fear of <b>new challenges</b> and
          possibilities/opportunities that appear.
          <br />
          <br />
          In my spare time, I love to <b>teach</b> what I learned, <b>sports</b>{' '}
          and <b>reading</b>.
        </p>
      </div>

      <span className="contact">
        <a href="mailto:dastag@gmail.com">Let&apos;s talk</a>
      </span>
    </section>
  );
};

BioBase.propTypes = {
  className: string.isRequired,
  description: string
};

BioBase.defaultProps = {
  description: ''
};

export default BioBase;
