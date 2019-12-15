//niz za popunjavanje tablice
let students1a = [
  { "First name": "Jeannette", "Last name": "Justiniano", "Date of birth": "" },
  { "First name": "Deirdre", "Last name": "Dries", "Date of birth": "" },
  { "First name": "Arnoldo", "Last name": "Abell", "Date of birth": "" },
  { "First name": "Paris", "Last name": "Pasko", "Date of birth": "" },
  { "First name": "Jeanette", "Last name": "Javier", "Date of birth": "" },
  { "First name": "Neil", "Last name": "Nardi", "Date of birth": "" },
  { "First name": "Enoch", "Last name": "Eggleton", "Date of birth": "" },
  { "First name": "Eldridge", "Last name": "Elliot", "Date of birth": "" },
  { "First name": "Vivian", "Last name": "Vanover", "Date of birth": "" },
  { "First name": "Lenna", "Last name": "Laurich", "Date of birth": "" },
  { "First name": "Angela", "Last name": "Atkinson", "Date of birth": "" },
  { "First name": "Lasonya", "Last name": "Litton", "Date of birth": "" },
  { "First name": "Antony", "Last name": "Agostini", "Date of birth": "" },
  { "First name": "Antonia", "Last name": "Alamo", "Date of birth": "" },
  { "First name": "Maureen", "Last name": "Melrose", "Date of birth": "" },
  { "First name": "Crysta", "Last name": "Carmody", "Date of birth": "" },
  { "First name": "Clora", "Last name": "Calhoon", "Date of birth": "" },
  { "First name": "Britt", "Last name": "Billingsley", "Date of birth": "" },
  { "First name": "Florinda", "Last name": "Fray", "Date of birth": "" },
  { "First name": "Kyong", "Last name": "Keating", "Date of birth": "" }
];

//slučajni datum rođenja
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//petlja za formatiranje datuma i dodavanje vrijednosti propertyju za svaki objekt/element niza
var x;
for (x in students1a) {
  var puniDatum = (randomDate(new Date(2002, 0, 1), new Date(2003,11,31)));
  var dan = puniDatum.getDate();
  var mjesec = puniDatum.getMonth() + 1;
  var godina = puniDatum.getFullYear();
  var datum = dan + "." + mjesec + "." + godina + ".";  
  students1a[x]["Date of birth"] = datum;
}

//generiranje zaglavlja tablice
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

//generiranje tijela tablice
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

//pozivanje html elementa preko jedinstenog identifikatora
let table = document.querySelector("#students-1a");
let data = Object.keys(students1a[0]);
generateTableHead(table, data);
generateTable(table, students1a);