/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ProjectCard from './ProjectCard';
import CongressCrushPreview from '../../assets/images/congress-crush.png';
import GrowMeetingPreview from '../../assets/images/grow-meeting.png';
import RankUpPreview from '../../assets/images/rankup.png';
import PortfolioPreview from '../../assets/images/portfolio.png';

const imagePreviews = {
  congressCrush: CongressCrushPreview,
  growMeeting: GrowMeetingPreview,
  rankup: RankUpPreview,
  portfolio: PortfolioPreview
};

const ProjectsBase = ({ className, projects }) => {
  return (
    <section className={className}>
      <h1>More Projects</h1>
      <div className="project-deck">
        {projects.map(project => (
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
