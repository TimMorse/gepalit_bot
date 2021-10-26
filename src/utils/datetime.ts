import date from 'date-and-time';

const toDateTime = (timestamp: number) =>
  date.format(new Date(timestamp * 1000), 'HH:mm DD/MM/YYYY');

export { toDateTime };
