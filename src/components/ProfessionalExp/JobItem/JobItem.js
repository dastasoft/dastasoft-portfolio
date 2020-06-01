import styled from 'styled-components';

import JobItemBase from './JobItemBase';

const JobItem = styled(JobItemBase)`
  display: flex;
  margin-bottom: 2rem;

  .position {
    font-size: calc(1rem + 1vmin);
    font-weight: bolder;
  }

  .company-desc {
    font-size: calc(0.7rem + 1vmin);
  }

  .contract-date {
    margin: 0 1.2rem 0 0;
  }

  .job-header {
    display: flex;
    align-items: center;
  }

  .company-icon {
    display: none;
  }

  .short-description,
  .description-list {
    font-size: calc(0.5rem + 1vmin);
    margin: 1rem 0;
  }

  .description-list {
    margin-left: 1rem;

    li {
      margin: 0.5rem 0;
    }
  }

  @media screen and (min-width: 660px) {
    .company-icon {
      display: block;
      margin-right: 0.5rem;
      width: 50px;
      height: 50px;
    }
  }
`;

export default JobItem;
