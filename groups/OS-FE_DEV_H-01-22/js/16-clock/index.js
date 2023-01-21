const appElement = document.querySelector('#app');

function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    appElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
}

const intervalId = setInterval(displayTime, 1000);

function stopTime() {
    clearInterval(intervalId);
}

setTimeout(stopTime, 10000);
