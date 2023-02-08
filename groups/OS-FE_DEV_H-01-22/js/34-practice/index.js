const searchFormElement = document.querySelector("#search-form");
const searchQueryElement = document.querySelector("#search-query");
const searchResultsElement = document.querySelector("#search-results");

searchFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    searchResultsElement.innerHTML = '';

    const query = searchQueryElement.value;

    fetch("./data.json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            for (let i = 0; i < json.length; i++) {
                const tvShow = json[i];

                if (tvShow.name.toLowerCase().includes(query.toLowerCase())) {
                    searchResultsElement.innerHTML += `${tvShow.name}<br>`;
                }
        
                if (!searchResultsElement.innerHTML === '' && i === json.length - 1) {
                    searchResultsElement.innerHTML = "No results";
                }
            }
        })
});