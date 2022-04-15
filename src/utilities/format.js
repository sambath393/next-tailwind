import N from 'numeral';

export const asDollar = (n = 0) => N(n).format('0,0.00');
export const asNumber = (n = 0) => N(n).format('0,0');
export const asRiel = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const padLeadingZeros = (num, size) => {
  let s = `${num}`;
  while (s.length < size) s = `0${s}`;
  return s; // 00015
};
