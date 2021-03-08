import React from 'react';
import { string } from 'prop-types';

const BioBase = ({ className }) => {
  return (
    <section className={className}>
      <h1>About Me</h1>
      <div>
        <p>
          Hi, I&apos;m Daniel and I live in Barcelona, I&apos;ve been making
          websites, applications, games and learning the ins and outs of
          technology since I can remember. I love learning, teaching what I have
          learned and approaching projects from an agile vision and from the
          user&apos;s point of view maintaining the quality of the code
          following the best practices.
        </p>
        <br />

        <p>
          Currently, both professionally and personally, I keep myself busy with
          React.js, Node.js, React Native and cloud technology to offer high
          performance, scalable and innovative solutions.
        </p>
        <br />

        <p>
          I have been working as a programmer and analyst for 9 years in
          different positions in the public and private sector, I have worked
          providing technology solutions for universities, banking and the
          notary sector, performing the roles of Java programmer, analyst and
          currently full stack where I cover the spectrum of technology needed
          to develop a complete project by myself. I have led small teams of 2-3
          people in short and long term projects.
        </p>
        <br />

        <p>
          Intellectually curious and eager to take on new challenges, interested
          in working in B2B and B2C by leveraging my own development experience,
          not afraid to take on challenges by paying special attention to
          details.
        </p>
        <br />

        <p>
          I am comfortable working both in a team and also working independently
          to ensure goals are achieved. I adapt quickly to changes and promote a
          discourse of constructive criticism that helps team members to
          continue improving.
        </p>
        <br />

        <p>
          I am keen on creating high-quality user experience by working closely
          with project managers, designers and other engineers.
        </p>
      </div>
    </section>
  );
};

BioBase.propTypes = {
  className: string.isRequired
};

export default BioBase;
