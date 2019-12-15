//niz za popunjavanje tablice
let students1b = [
    { "First name": "Billi", "Last name": "Byard", "Date of birth": "" },
    { "First name": "Lakiesha", "Last name": "Lofthouse", "Date of birth": "" },
    { "First name": "Enrique", "Last name": "Eynon", "Date of birth": "" },
    { "First name": "Cristy", "Last name": "Causby", "Date of birth": "" },
    { "First name": "Wyatt", "Last name": "Whittemore", "Date of birth": "" },
    { "First name": "Weldon", "Last name": "Wakefield", "Date of birth": "" },
    { "First name": "Jamey", "Last name": "Johns", "Date of birth": "" },
    { "First name": "Linh", "Last name": "Lashua", "Date of birth": "." },
    { "First name": "Thomasina", "Last name": "Topping", "Date of birth": "" },
    { "First name": "Cedrick", "Last name": "Chilson", "Date of birth": "" },
    { "First name": "Bettyann", "Last name": "Bergan", "Date of birth": "" },
    { "First name": "Deshawn", "Last name": "Darcangelo", "Date of birth": "" },
    { "First name": "Marla", "Last name": "Mcginnis", "Date of birth": "" },
    { "First name": "Launa", "Last name": "Luedke", "Date of birth": "" },
    { "First name": "Lane", "Last name": "Latham", "Date of birth": "" },
    { "First name": "Valorie", "Last name": "Vore", "Date of birth": "" },
    { "First name": "Emmie", "Last name": "Erwin", "Date of birth": "" },
    { "First name": "Nichole", "Last name": "Noell", "Date of birth": "" },
    { "First name": "Christian", "Last name": "Cebula", "Date of birth": "" },
    { "First name": "Clyde", "Last name": "Cutts", "Date of birth": "" }
];  

//slučajni datum rođenja
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

//petlja za formatiranje datuma i dodavanje vrijednosti propertyju za svaki objekt/element niza
var x;
for (x in students1b) {
    var puniDatum = (randomDate(new Date(2002, 0, 1), new Date(2003,11,31)));
    var dan = puniDatum.getDate();
    var mjesec = puniDatum.getMonth() + 1;
    var godina = puniDatum.getFullYear();
    var datum = dan + "." + mjesec + "." + godina + ".";  
    students1b[x]["Date of birth"] = datum;
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
let table = document.querySelector("#students-1b");
let data = Object.keys(students1b[0]);
generateTableHead(table, data);
generateTable(table, students1b);