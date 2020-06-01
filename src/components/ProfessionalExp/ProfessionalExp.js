import styled from 'styled-components';

import ProfessionalExpBase from './ProfessionalExpBase';

const ProfessionalExp = styled(ProfessionalExpBase)`
  .job-list {
    list-style: none;
    border-radius: 1rem;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    position: relative;
    margin: 0 auto;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  }

  .job-list::before {
    content: '';
    width: 3px;
    background: var(--contrast);
    position: absolute;
    margin-left: 3rem;
    border-radius: 1rem;
    top: 10px;
    bottom: 10px;
  }

  @media screen and (min-width: 660px) {
    .job-list {
      max-width: 980px;
    }
  }

  @media screen and (min-width: 1505px) {
    .job-list {
      max-width: 1500px;
    }
  }
`;

export default ProfessionalExp;
