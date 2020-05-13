/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import ProjectCard from './ProjectCard';
import CongressCrushPreview from '../../assets/images/congress-crush.png';
import GrowMeetingPreview from '../../assets/images/grow-meeting.png';

const ProjectsBase = ({ className, projects }) => {
  const imagePreviews = {
    congressCrush: CongressCrushPreview,
    growMeeting: GrowMeetingPreview
  };

  return (
    <section className={className}>
      {projects.map(project => (
        <ProjectCard
          className="wow fanimate__adeIn"
          key={project.id}
          previewImg={imagePreviews[project.id]}
          {...project}
        />
      ))}
    </section>
  );
};

export default ProjectsBase;
