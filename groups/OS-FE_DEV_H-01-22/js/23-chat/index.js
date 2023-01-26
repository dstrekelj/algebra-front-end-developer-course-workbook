const messageFormElement = document.querySelector("#message-form");
const messageListElement = document.querySelector("#message-list");

const messages = [];

/**
 * Display a list of messages in the browser.
 * @param {HTMLDivElement} element 
 * @param {Array<string>} messages 
 */
function displayMessageList(element, messages) {
    element.innerHTML = '';

    for (let i = 0; i < messages.length; i++) {
        element.innerHTML += `${messages[i]}<br>`;
    }
}

messageFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    if (event.target instanceof HTMLFormElement) {
        const messageElement = event.target.querySelector("[name='message']");
        const message = messageElement.value;

        messages.push(message);
        displayMessageList(messageListElement, messages);

        messageElement.value = '';
    }
});