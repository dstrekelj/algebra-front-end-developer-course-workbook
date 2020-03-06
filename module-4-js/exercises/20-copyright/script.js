function showCopyrightYear(selector) {
  var year = new Date().getFullYear();
  document.querySelector(selector).innerText = year;
}

var selectorString = "span.js-copyright";
showCopyrightYear(selectorString);

/*
function showCopyrightYear(selector) {
  var year = new Date().getFullYear();
  selector.innerText = year;
}

var element = document.querySelector("span.js-copyright");
showCopyrightYear(element);
*/

