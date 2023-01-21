function initStopwatch(displayElementSelector, buttonElementSelector, resetTime) {
    const timeDisplayElement = document.querySelector(displayElementSelector);
    const timeButtonElement = document.querySelector(buttonElementSelector);
    
    let startTime = Date.now();
    let endTime = startTime;
    
    timeDisplayElement.innerHTML = `${endTime - startTime}ms`;
    
    timeButtonElement.addEventListener('click', function () {
        endTime = Date.now();
    
        timeDisplayElement.innerHTML = `${endTime - startTime}ms`;
    
        if (resetTime === true) {
            startTime = endTime;
        }
    });
}
initStopwatch('#time-display', '#time-button', false);
initStopwatch('#time-display2', '#time-button2', true);
