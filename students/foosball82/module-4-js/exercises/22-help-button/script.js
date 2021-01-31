function showHelpButton(selector, timeout) {
  /*
  if (typeof timeout !== "number") {
    alert("Please specify a timeout peroid in milliseconds.");
  } else {...}   
  */

  setTimeout(function() {
    document
      .querySelector(selector)
      .classList.add("floating-help-button--visible");
  }, timeout);
}

var selectorString = "div.floating-help-button";
showHelpButton(selectorString, 1500);
