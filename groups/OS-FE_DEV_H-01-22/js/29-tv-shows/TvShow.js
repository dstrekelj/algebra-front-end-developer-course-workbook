export class TvShow {
    constructor(name, genre, image, url) {
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.url = url;
    }
    toText() { return `${this.name} (${this.genre})`; }
    toHtml() { return `
        <div class="tv-show">
            <h1>${this.name} (<a href="${this.url}" target="_blank">Link</a>)</h1>
            <p>${this.genre}</p>
            <img src="${this.image}" alt="${this.name}" width="200">
        </div>
        `;
    }
}