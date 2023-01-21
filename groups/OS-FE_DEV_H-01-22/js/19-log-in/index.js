const loginFormElement = document.querySelector("#login-form");
const bannerElement = document.querySelector("#banner");

loginFormElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = event.target.querySelector("#username");
    const passwordInput = event.target.querySelector("#password");

    if (!validatePassword(passwordInput.value)) {
        alert("The password must be at least 8 characters long!");
    } else {
        bannerElement.innerHTML = `Welcome ${usernameInput.value}!`;
        loginFormElement.remove();
    }
});

function validatePassword(password) {
    return typeof password === 'string' && password.length >= 8;
}

const passwordToggleElement = document.querySelector("#password-toggle");
const passwordElement = document.querySelector("#password");

passwordToggleElement.addEventListener("click", function (event) {
    if (passwordElement.type === "password") {
        passwordElement.type = "text";
        this.innerHTML = "Hide";
    } else {
        passwordElement.type = "password";
        this.innerHTML = "Show";
    }
});
