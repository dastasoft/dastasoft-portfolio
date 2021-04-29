/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Layout from '../../components/Layout';
import Introduction from '../../components/Introduction';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import HighlightProject from '../../components/HighlightProject';
import Projects from '../../components/Projects';
import ProfessionalExp from '../../components/ProfessionalExp';
import content from '../../contents.json';

const Home = () => {
  const {
    introduction,
    skills,
    highlightProject,
    projects,
    social,
    professionalExp,
  } = content;

  return (
    <Layout>
      <Introduction
        {...introduction}
        socialList={social}
        className="wow animate__animated animate__fadeIn"
      />
      <Bio className="wow animate__animated animate__fadeIn" />
      <Skills {...skills} className="wow animate__animated animate__fadeIn" />
      <HighlightProject
        className="wow animate__animated animate__fadeIn"
        {...highlightProject}
      />
      <Projects projects={projects} />
      <ProfessionalExp professionalExp={professionalExp} />
    </Layout>
  );
};

export default Home;
