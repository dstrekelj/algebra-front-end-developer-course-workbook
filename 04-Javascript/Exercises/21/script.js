function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }


function showClock(selector) {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(selector).innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    showClock(selector)
  }, 500);
}


const selectedElement = "span";
showClock(selectedElement);