/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Layout from '../../components/Layout';
import Introduction from '../../components/Introduction';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import HighlightProject from '../../components/HighlightProject';
import ProjectCard from '../../components/ProjectCard';
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
        className="wow fadeIn"
        {...introduction}
        socialList={social}
      />
      <Skills className="wow fadeIn" skills={skills} />
      {/* <HighlightProject className="wow fadeIn" {...highlightProject} />
      {projects.map(project => (
        <ProjectCard className="wow fadeIn" key={project.title} {...project} />
      ))} */}
    </Layout>
  );
};

export default Home;
