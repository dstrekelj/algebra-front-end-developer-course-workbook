const timerElement = document.getElementById("timer");
const startButton = document.querySelector("[data-action-start]");
const timerElementStyle = getComputedStyle(timerElement);
const initialFontSize = parseInt(timerElementStyle.fontSize);

let intervalId = null;

function reset() {
  timerElement.innerHTML = parseInt(timerElement.dataset.startTime);
  timerElement.style.fontSize = initialFontSize + "px";
  timerElement.classList.toggle("blink", false);
  timerElement.classList.toggle("expired", false);
}

function update(time, blinkTime, fontSize) {
  timerElement.innerHTML = time;
  timerElement.style.fontSize = fontSize + "px";
  timerElement.classList.toggle("blink", time > 0 && time <= blinkTime);
  timerElement.classList.toggle("expired", time === 0);
}

reset();

startButton.addEventListener("click", function () {
  reset();

  const blinkTime = parseInt(timerElement.dataset.blinkTime);

  let time = parseInt(timerElement.dataset.startTime) - 1;
  let fontSize = initialFontSize;

  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(function () {
    update(time, blinkTime, fontSize);
    fontSize += 16;

    if (time === 0) {
      clearInterval(intervalId);
      intervalId = null;

      return;
    }

    time--;
  }, 1000);
});
