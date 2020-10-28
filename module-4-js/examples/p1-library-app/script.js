/**
 * Books API module. Works with JSON data.
 */
(function() {
  if (window.BooksAPI) return;

  function BooksAPI() {
    const _url = "./data.json";

    this.getAll = () =>
      new Promise((resolve, reject) => {
        fetch(_url)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
  }

  window.BooksAPI = BooksAPI;
})();

/**
 * Book repository module. Wraps around API to provide querying functionality.
 */
(function(BooksAPI) {
  if (window.BookRepository) return;

  function BookRepository() {
    const _api = new BooksAPI();

    this.find = query =>
      new Promise((resolve, reject) => {
        _api
          .getAll()
          .then(data => {
            const regex = new RegExp(query, "gi");
            const filtered = data.filter(
              item =>
                (item.title && item.title.match(regex)) ||
                (item.author && item.author.match(regex))
            );
            resolve(filtered);
          })
          .catch(reject);
      });
  }

  window.BookRepository = BookRepository;
})(BooksAPI);

/**
 * Search view module. Establishes link between DOM and business logic. Listens
 * for form events to trigger actions handled by the interactor, and displays
 * results as requested by the interactor.
 */
(function() {
  if (window.SearchView) return;

  function SearchView() {
    const _form = document.getElementById("search-form");
    const _inputs = document.querySelectorAll("#search-form [name]");
    const _resultsList = document.getElementById("search-results");

    this.onSearch = () => {};

    this.showResults = results => {
      _resultsList.innerHTML = "";

      if (results && results.length === 0) {
        _resultsList.innerText = "No results";

        return;
      }

      results
        .map(_createResultElement)
        .forEach(element => _resultsList.appendChild(element));
    };

    const _createResultElement = result => {
      const element = document.createElement("li");
      element.innerHTML = `${result.title} &mdash; ${result.author}`;

      return element;
    };

    const _onSubmit = event => {
      event.preventDefault();

      const formData = new FormData(_form);

      this.onSearch(formData.get("query"));
    };

    _form.addEventListener("submit", _onSubmit);
    _inputs.forEach(input => input.addEventListener("keyup", _onSubmit));
  }

  window.SearchView = SearchView;
})();

/**
 * Search interactor module. Handles repository calls based on user view
 * interactions.
 */
(function() {
  if (window.SearchInteractor) return;

  function SearchInteractor(repository, view) {
    const _searchBooks = query => {
      repository
        .find(query)
        .then(view.showResults)
        .catch(alert);
    };

    view.onSearch = _searchBooks;
  }

  window.SearchInteractor = SearchInteractor;
})();

/**
 * Application module. Connects the book repository and search view so they
 * interact with each other.
 */
(function(BookRepository, SearchView, SearchInteractor) {
  window.addEventListener("DOMContentLoaded", function() {
    const _repository = new BookRepository();
    const _view = new SearchView();
    new SearchInteractor(_repository, _view);
  });
})(BookRepository, SearchView, SearchInteractor);
