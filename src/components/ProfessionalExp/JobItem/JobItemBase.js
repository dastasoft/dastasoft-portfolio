import React from 'react';
import moment from 'moment';

import TechTag from '../TechTag';

const JobItemBase = ({
  className,
  position,
  companyName,
  companyURL,
  companyIcon,
  contractType,
  contractDate,
  totalTime,
  shortDescription,
  items,
  techList,
}) => {
  return (
    <li className={className}>
      <span className="contract-date">
        {moment(contractDate.start).format('YYYY')}
      </span>
      <div>
        <div className="job-header">
          <a href={companyURL} target="_blank" rel="noopener noreferrer">
            <img
              className="company-icon"
              src={companyIcon}
              alt={`${companyName} logo`}
            />
          </a>
          <div>
            <h2 className="position">{position}</h2>
            <h3 className="company-desc">
              <a href={companyURL} target="_blank" rel="noopener noreferrer">
                {companyName}
              </a>{' '}
              - {contractType} - {totalTime}
            </h3>
          </div>
        </div>
        <p className="short-description">{shortDescription}</p>
        <ul className="description-list">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div>
          {techList.map((tech) => (
            <TechTag key={tech} text={tech} />
          ))}
        </div>
      </div>
    </li>
  );
};

export default JobItemBase;
