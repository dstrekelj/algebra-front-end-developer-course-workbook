/*
Napišite program koji će iz varijable "temperature" pročitati vrijednost temperature i ispisati vrijednost temeperature u celzijevim stupnjevima i fahrenheitima.
*/
const temperature = "27C";
const temperatureValue = parseFloat(temperature.slice(0, -1));
const temperatureF = temperatureValue * 1.8 + 32;
const temperatureK = temperatureValue + 273.15;

console.log(temperatureValue, "C");
console.log(temperatureF, "F");
console.log(temperatureK, "K");