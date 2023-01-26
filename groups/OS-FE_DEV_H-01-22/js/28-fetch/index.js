const request = fetch("https://www.algebra.hr")
    .then((response) => {
        return response.text();
    })
    .then((text) => {
        console.log(text);
    })
    .catch((error) => {
        console.log(error);
    });
