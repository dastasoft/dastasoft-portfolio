/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import moment from 'moment';

import JobItem from './JobItem';
import SigmaLogo from '../../assets/images/sigma.png';
import GFTLogo from '../../assets/images/gft.png';
import AncertLogo from '../../assets/images/ancert.png';
import EdpuzzleLogo from '../../assets/images/edpuzzle.png';
import { getYear, getMonth } from '../../utils/parseDate';
import TotalExperience from './TotalExperience';

const companyLogos = {
  sigma: SigmaLogo,
  gft: GFTLogo,
  ancert: AncertLogo,
  edpuzzle: EdpuzzleLogo,
};

const ProfessionalExpBase = ({ className, professionalExp }) => {
  const experience = { years: 0, months: 0 };

  const getTotalTime = (contractDate) => {
    if (!contractDate.end && !contractDate.start) return null;

    const totalDuration = moment.duration(
      moment(!contractDate.end ? moment().format('L') : contractDate.end).diff(
        moment(contractDate.start)
      )
    );

    const years = Math.floor(totalDuration.asMonths() / 12);
    const months = Math.floor(totalDuration.asMonths() - years * 12);

    experience.years += years;

    if (experience.months + months >= 12) {
      experience.years++;
      experience.months = experience.months + months - 12;
    } else {
      experience.months += months;
    }

    return `${getYear(years)} ${getMonth(years, months)} ${
      !contractDate.end ? '(current)' : ''
    }`;
  };

  return (
    <section className={className}>
      <h1>Professional Experience</h1>
      <TotalExperience experience={experience} />
      {/* Tech filter */}
      <ul className="job-list">
        {professionalExp.map((job) => (
          <JobItem
            key={job.companyName}
            companyIcon={companyLogos[job.id]}
            totalTime={getTotalTime(job.contractDate)}
            {...job}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProfessionalExpBase;
