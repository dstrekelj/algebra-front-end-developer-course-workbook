function showClock(selector) {
  setInterval(function() {
    let date = new Date();
    /*
    let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
    const time = hours + ":" + minutes + ":" + seconds;
    document.querySelector(selector).innerText = time;
    */
    document.querySelector(selector).innerText = date.toLocaleTimeString();
  }, 1000);
}

var selectorString = "span.js-clock";
showClock(selectorString);
