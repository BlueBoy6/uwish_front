export const startOfDay = date => new Date(new Date(date).setHours(0, 0, 0, 0));

export const minDate = (date, ...otherDates) =>
  new Date(Math.min(date.getTime(), ...otherDates.map(otherDate => otherDate.getTime())));

export function today() {
  return startOfDay(new Date());
}

export function isMajeurADateEffet(dateNaissance, dateEffet) {
  const ageMajorite = 18;
  return dateEffet >= addYearsToDate(dateNaissance, ageMajorite);
}

export const isEqual = (left, right) => left.getTime() === right.getTime();
export const isToday = date => isEqual(date, today());

export function addYearsToDate(date, years) {
  return new Date(date.getFullYear() + years, date.getMonth(), date.getDate());
}
export function subtractYearsToDate(date, years) {
  return addYearsToDate(date, -years);
}

export function birthdayToDate(dateNaissance, ageMax) {
  return subtractDaysToDate(addYearsToDate(dateNaissance, ageMax + 1), 1);
}
export function dateToBirthday(date, ageMax) {
  return addDaysToDate(subtractYearsToDate(date, ageMax + 1), 1);
}

export function addDaysToDate(date, days) {
  return new Date(date.setDate(date.getDate() + days));
}

export function subtractDaysToDate(date, days) {
  return addDaysToDate(date, -days);
}

export const timeBetween = (value, dateMin, dateMax) => {
  const valueDate = new Date(value);
  return valueDate >= dateMin && valueDate <= dateMax;
};

const strPad = value => value.toString().padStart(2, '0');
const getDay = date => strPad(date.getDate());
const getMonth = date => strPad(date.getMonth() + 1);
const getYear = date => date.getFullYear().toString();

export function formatForDisplay(date) {
  const dateFormated = new Date(date)
  return `${getDay(dateFormated)}/${getMonth(dateFormated)}/${getYear(dateFormated)}`;
}
