import { TvShow } from "./TvShow.js";

const request = fetch("./data.json")
    .then((response) => { return response.json(); })
    .then((json) => {
        for (let i = 0; i < json.length; i++) {
            const show = json[i];
            const tvShow = new TvShow(show.name, show.genres[0], show.image.original, show.url);
            document.body.innerHTML += tvShow.toHtml();
        }
    });
