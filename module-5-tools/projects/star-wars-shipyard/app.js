const appElement = document.querySelector("#app");
const source = document.querySelector("#starships-template").innerHTML;
const template = Handlebars.compile(source);

const endpoint = "https://swapi.dev/api/starships";

fetch(endpoint)
  .then((response) => response.json())
  .then((json) => {
    const html = template({ starships: json.results });

    appElement.innerHTML = html;
  })
  .catch((error) => console.error(error));
