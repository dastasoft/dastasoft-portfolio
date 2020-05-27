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
    <div className={className}>
      <span>{contractDate}</span>
      <img src={companyIcon} alt={`${companyName} logo`} />
      <span>{totalTime}</span>
      <h2>{position}</h2>
      <h3>
        {companyName} - {contractType}
      </h3>
      <p>{shortDescription}</p>
      <ul>
        {items.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <div>
        {techList.map(tech => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
};

export default JobItemBase;
