  
function showCopyrightYear(selector) {
    let currentYear = new Date().getFullYear();
    document.querySelector(selector).innerText = currentYear;
};

const selectedElement = "span";
showCopyrightYear(selectedElement);
