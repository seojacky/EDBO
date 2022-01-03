const convertDate = (date) => {
  return date.split('T')[0].split('-').reverse().join('.');
}

export default convertDate;