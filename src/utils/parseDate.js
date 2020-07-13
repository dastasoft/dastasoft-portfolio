export const getYear = year => {
  let message = '';

  if (year) {
    message += `${year} year`;
    if (year > 1) message += 's';
  }

  return message;
};

export const getMonth = (year, month) => {
  let message = '';

  if (month) {
    if (year) message += ' and ';
    message += `${month} month`;
    if (month > 1) message += 's';
  }

  return message;
};
