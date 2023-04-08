import React from 'react';
import { string } from 'prop-types';

const BioBase = ({ className }) => {
  return (
    <section className={className}>
      <h1>About Me</h1>
      <div>
        <p>
          Hi, I'm Daniel and I live in Tokyo, as a full-stack developer with 10
          years of experience in technologies such as JavaScript, React and
          Java, I bring a diverse skill set to any project. My ability to work
          on both front-end and back-end development, paired with my experience
          in medium and big companies as well as startups, allows me to create
          dynamic and user-friendly web applications.
        </p>
        <p>
          In addition to my professional work, I am passionate about sharing my
          knowledge and experience through writing technical articles. This not
          only helps me to learn new things, but also allows me to teach others.
        </p>
        <p>
          I am a team player, able to mentor junior developers and collaborate
          effectively with my colleagues to deliver projects on time and to the
          highest standard. I am also a creative problem solver, highly
          organized, and able to manage multiple projects at once. My attention
          to detail, ability to prioritize my workload and adaptability to
          changing project requirements, make me an excellent fit for a
          fast-paced development environment.
        </p>
        <p>
          Overall, I am confident that my skills, experience, and passion for
          development make me an asset to any development team.
        </p>
      </div>
    </section>
  );
};

BioBase.propTypes = {
  className: string.isRequired,
};

export default BioBase;
