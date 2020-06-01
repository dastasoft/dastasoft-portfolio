import React from 'react';

import TechTag from '../TechTag';

const JobItemBase = ({
  className,
  position,
  companyName,
  companyIcon,
  contractType,
  contractDate,
  totalTime,
  shortDescription,
  items,
  techList
}) => {
  return (
    <li className={className}>
      <span className="contract-date">{contractDate}</span>
      <div>
        <div className="job-header">
          <img
            className="company-icon"
            src={companyIcon}
            alt={`${companyName} logo`}
          />
          <div>
            <h2 className="position">{position}</h2>
            <h3 className="company-desc">
              {companyName} - {contractType} - {totalTime}
            </h3>
          </div>
        </div>
        <p className="short-description">{shortDescription}</p>
        <ul className="description-list">
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        <div>
          {techList.map(tech => (
            <TechTag key={tech} text={tech} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default JobItemBase;
