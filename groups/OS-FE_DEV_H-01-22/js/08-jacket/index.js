const outsideTemperature = 14;
const jacketTemperature = 15;
const isItRaining = true;

if (outsideTemperature < jacketTemperature) {
    console.log("Jacket on!");
} else if (isItRaining) {
    console.log("Jacket on!");
} else {
    console.log("Jacket off!");
}

const currentMonth = "january";

switch (currentMonth.toLocaleLowerCase()) {
    case "january": console.log("siječanj");
    case "february": console.log("veljača");
    case "march": console.log("ožujak");
    case "april": console.log("travanj"); break;
    case "may": console.log("svibanj"); break;
    case "june": console.log("lipanj"); break;
    case "july": console.log("srpanj"); break;
    case "august": console.log("kolovoz"); break;
    case "september": console.log("rujan"); break;
    case "october": console.log("listopad"); break;
    case "november": console.log("studeni"); break;
    case "december": console.log("prosinac"); break;
    default: console.log("Unknown month");
}
