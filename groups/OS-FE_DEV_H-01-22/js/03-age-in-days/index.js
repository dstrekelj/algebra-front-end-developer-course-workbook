const birthYear = 1992;
const currentYear = 2023;
const numberOfDaysInYear = 365;
const numberOfHoursInDay = 24;

const ageInDays = (currentYear - birthYear) * numberOfDaysInYear;
const ageInHours = ageInDays * numberOfHoursInDay;

console.log(`I am ${ageInDays} days old.`);
console.log(`I am ${ageInHours} hours old.`);
