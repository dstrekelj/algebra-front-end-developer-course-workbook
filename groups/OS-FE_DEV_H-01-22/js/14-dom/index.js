function displayDate(element, dateString) {
    element.innerHTML = new Date(dateString);
}

function displayCopyright(element) {
    element.innerHTML = `&copy; ${new Date().getFullYear()}`;
}

function displayTime(element) {
    const date = new Date();
    element.innerHTML = `${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`;
}

const element = document.querySelector('#foobar');
const elementCopyright = document.querySelector('#copyright');
const elementTime = document.querySelector('#time');

displayDate(element, "2023-11-04");
displayCopyright(elementCopyright);
displayTime(elementTime);

/*
1. Umjesto širine i visine prozora ispisati današnji datum i vrijeme
2. Dodati copyright element koji će ispisati `(C) ${trenutna godina}`
3. Dodati element u HTML dokument. U njemu ispisati vrijeme u obliku:
    `${hours}h ${minutes}m ${seconds}s`
*/