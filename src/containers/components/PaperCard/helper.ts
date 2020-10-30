export const MONTHS: Array<string> = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEPT',
  'OCT',
  'DEC'
];

export function getDate() {

  const date = new Date();
  return  MONTHS[date.getMonth() - 1] + ' ' + date.getDay() +  ' ' + date.getFullYear();
}