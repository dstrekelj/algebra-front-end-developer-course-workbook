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

const book1 = new Book("Domagoj", "JavaScript", "2023-01-24");
const book2 = new Book("Domagoj", "JavaScript", "2022-01-24");

console.log(book1.getYear());
console.log(book2.getYear());