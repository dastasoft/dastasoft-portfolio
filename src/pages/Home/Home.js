/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Layout from '../../components/Layout';
import Introduction from '../../components/Introduction';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import HighlightProject from '../../components/HighlightProject';
import Projects from '../../components/Projects';
import content from '../../contents.json';
import './Home.scss';

const Home = () => {
  const {
    introduction,
    bio,
    skills,
    highlightProject,
    projects,
    social
  } = content;

  return (
    <Layout>
      <Introduction
        {...introduction}
        socialList={social}
        className="wow animate__animated animate__fadeIn"
      />
      <Bio {...bio} className="wow animate__animated animate__fadeIn" />
      <Skills {...skills} className="wow animate__animated animate__fadeIn" />
      <HighlightProject
        className="wow animate__animated animate__fadeIn"
        {...highlightProject}
      />
      {/* <Projects projects={projects} /> */}
    </Layout>
  );
};

export default Home;
