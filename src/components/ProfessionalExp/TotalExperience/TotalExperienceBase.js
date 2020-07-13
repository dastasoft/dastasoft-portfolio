import React, { useState, useEffect } from 'react';

import { getYear, getMonth } from '../../../utils/parseDate';

const TotalExperienceBase = ({ className, experience }) => {
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    setYears(experience.years);
    setMonths(experience.months);
  }, []);

  return (
    <h2 className={className}>
      Total experience: {`${getYear(years)} ${getMonth(years, months)}`}
    </h2>
  );
};

export default TotalExperienceBase;
