import { MONTHS } from '../PaperCard/helper';

export const formatDate = (date: string) => {
  // YYYY-MM-DD
  const spl: string[] = date.split('-', 3);
  return spl[2] + ' ' + MONTHS[Number(spl[1]) - 1] ;
}