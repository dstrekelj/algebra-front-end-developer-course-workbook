function showHelpButton(selector, timeout) {
    if(selector != undefined && typeof timeout == 'number' )
    {
       let element = document.querySelector(selector);
       element.className = "floating-help-button--visible";
       console.log(element.className);
    }
    else {
        return 0;
    }
}

const selectedElement = "button";
showHelpButton(selectedElement, 2500);