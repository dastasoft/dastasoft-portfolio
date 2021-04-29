/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ProjectCard from './ProjectCard';
import BlogPreview from '../../assets/images/blog.png';
import CongressCrushPreview from '../../assets/images/congress-crush.png';
import GrowMeetingPreview from '../../assets/images/grow-meeting.png';
import RankUpPreview from '../../assets/images/rankup.png';
import CopywritingPreview from '../../assets/images/copywriting.png';
import HandyTools from '../../assets/images/handy-tools.png';
import PortfolioPreview from '../../assets/images/portfolio.png';
import Nimbel from '../../assets/images/nimbel.png';
import TeslaExposer from '../../assets/images/teslaExposer.png';

const imagePreviews = {
  blog: BlogPreview,
  congressCrush: CongressCrushPreview,
  growMeeting: GrowMeetingPreview,
  rankup: RankUpPreview,
  copywriting: CopywritingPreview,
  handyTools: HandyTools,
  portfolio: PortfolioPreview,
  nimbel: Nimbel,
  teslaExposer: TeslaExposer,
};

const ProjectsBase = ({ className, projects }) => {
  return (
    <section className={className}>
      <h1>More Projects</h1>
      <div className="project-deck">
        {projects.map((project) => (
          <ProjectCard
            className="wow animate__animated animate__fadeIn"
            key={project.id}
            previewImg={imagePreviews[project.id]}
            {...project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsBase;
