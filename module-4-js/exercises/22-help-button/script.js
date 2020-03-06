function showHelpButton(selector, timeout) {
  setTimeout(function() {
    document
      .querySelector(selector)
      .classList.add("floating-help-button--visible");
  }, timeout);
}

var selectorString = "div.floating-help-button";
showHelpButton(selectorString, 1500);
