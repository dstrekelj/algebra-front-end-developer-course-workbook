const appElement = document.querySelector('#app');

function createMessage(text) {
    const element = document.createElement('div');
    element.classList.add('red');
    element.innerHTML = `<h1>${text}</h1>`;

    return element;
}

const messageElement = createMessage("Hello!");

appElement.appendChild(messageElement);
