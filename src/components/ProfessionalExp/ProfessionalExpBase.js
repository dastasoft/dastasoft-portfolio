/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import JobItem from './JobItem';
import SigmaLogo from '../../assets/images/sigma.png';
import NecsiaLogo from '../../assets/images/necsia.png';
import GFTLogo from '../../assets/images/gft.png';
import AncertLogo from '../../assets/images/ancert.png';

const companyLogos = {
  sigma: SigmaLogo,
  necsia: NecsiaLogo,
  gft: GFTLogo,
  ancert: AncertLogo
};

const ProfessionalExpBase = ({ className, professionalExp }) => {
  return (
    <section className={className}>
      <h1>Professional Experience</h1>
      {/* Tech filter */}
      <ul className="job-list">
        {professionalExp.map(job => (
          <JobItem
            key={job.companyName}
            companyIcon={companyLogos[job.id]}
            {...job}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProfessionalExpBase;
