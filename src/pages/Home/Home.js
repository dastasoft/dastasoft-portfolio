/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Layout from '../../components/Layout';
import Bio from '../../components/Bio';
import Skills from '../../components/Skills';
import HighlightProject from '../../components/HighlightProject';
import ProjectCard from '../../components/ProjectCard';
import content from '../../contents.json';

const Home = () => {
  const { bio, skills, highlightProject, projects } = content;

  return (
    <Layout>
      <Bio className="wow fadeIn" {...bio} />
      <Skills className="wow fadeIn" skills={skills} />
      <HighlightProject className="wow fadeIn" {...highlightProject} />
      {projects.map(project => (
        <ProjectCard className="wow fadeIn" key={project.title} {...project} />
      ))}
    </Layout>
  );
};

export default Home;
