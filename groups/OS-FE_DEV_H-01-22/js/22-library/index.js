/**
 * Book constructor function.
 * @param {string} author 
 * @param {string} title 
 * @param {string} releaseDate 
 */
function Book(author, title, releaseDate) {
    this.author = author;
    this.title = title;
    this.releaseDate = releaseDate;
}

Book.prototype.getYear = function () {
    return this.releaseDate.slice(0, 4);
}

Book.prototype.getHtml = function () {
    return `
<div>
    <div>${this.title} - ${this.author}</div>
    <div>${this.getYear()}</div>
</div>
`;
}

const bookFormElement = document.querySelector('#book-form');
const bookListElement = document.querySelector('#book-list');

const books = [];

function displayBooks() {
    bookListElement.innerHTML = '';

    for (let i = 0; i < books.length; i++) {
        const book = books[i];

        if (book instanceof Book) {
            bookListElement.innerHTML = bookListElement.innerHTML + book.getHtml();
        }
    }
}

bookFormElement.addEventListener('submit', function (event) {
    event.preventDefault();

    if (event.target instanceof HTMLFormElement) {
        const author = event.target.querySelector('[name="author"]').value;
        const title = event.target.querySelector('[name="title"]').value;
        const releaseDate = event.target.querySelector('[name="releaseDate"]').value;

        if (author === '' || title === '' || releaseDate === '') {
            alert("A book cannot have empty fields!");
        } else {
            books.push(new Book(author, title, releaseDate));
            displayBooks();
        }
    }
});
