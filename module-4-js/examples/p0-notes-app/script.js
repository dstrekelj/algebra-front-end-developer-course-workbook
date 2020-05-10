(function() {
  if (window.Note) return;

  function Note(data) {
    const _data = data || {};

    this.id = _data.id || this.id;
    this.title = _data.title || this.title;
    this.body = _data.body || this.body;
    this.createdAt = _data.createdAt || this.createdAt || Date.now();

    this.getDateString = () => new Date(this.createdAt).toISOString();
  }

  window.Note = Note;
})();

(function(Note) {
  if (window.NoteRepository) return;

  function NoteRepository(initialData) {
    const _storageKey = "notes";

    let _totalItems = 0;

    if (initialData) {
      window.localStorage.setItem(_storageKey, JSON.stringify(initialData));
    } else if (!window.localStorage.getItem(_storageKey)) {
      window.localStorage.setItem(_storageKey, JSON.stringify([]));
    }

    const getFromStorage = () => {
      const items = JSON.parse(window.localStorage.getItem(_storageKey));

      return items.map(t => new Note(t));
    };

    const setToStorage = items => {
      window.localStorage.setItem(_storageKey, JSON.stringify(items));
    };

    this.create = data =>
      new Promise((resolve, reject) => {
        const items = getFromStorage();
        const note = new Note(data);

        note.id = ++_totalItems;

        items.push(note);
        setToStorage(items);

        resolve(note);
      });

    this.update = (id, data) =>
      new Promise((resolve, reject) => {
        const items = getFromStorage();
        const itemIndex = items.findIndex(i => i.id === id);

        if (itemIndex === -1) reject(new Error("Item not found"));

        const newItem = new Note(data);
        newItem.id = id;

        items[itemIndex] = newItem;
        setToStorage(items);

        resolve(newItem);
      });

    this.get = id =>
      new Promise((resolve, reject) => {
        const items = getFromStorage();
        const item = items.find(i => i.id === id);

        if (!item) reject(new Error("Item not found"));

        resolve(item);
      });

    this.getAll = () =>
      new Promise((resolve, reject) => {
        const items = getFromStorage();

        resolve(items);
      });

    this.delete = id =>
      new Promise((resolve, reject) => {
        const items = getFromStorage();
        const itemIndex = items.findIndex(i => i.id === id);

        if (itemIndex === -1) reject(new Error("Item not found"));

        items.splice(itemIndex, 1);
        setToStorage(items);

        resolve(null);
      });

    this.deleteAll = () =>
      new Promise((resolve, reject) => {
        setToStorage([]);

        resolve(null);
      });
  }

  window.NoteRepository = NoteRepository;
})(Note);

(function(NoteRepository) {
  if (window.NoteApp) return;

  function NoteApp() {
    const _repository = new NoteRepository();
    const _form = document.getElementById("note-app-form");
    const _list = document.getElementById("note-app-list");

    const addNoteToList = note => {
      const li = document.createElement("li");
      li.innerHTML = `<div>
      ${note.title} (${note.getDateString()})
      <br><br>
      ${note.body}
      </div>`;

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Remove";

      deleteButton.addEventListener("click", event => {
        event.preventDefault();

        _repository.delete(note.id).then(() => li.remove());
      });

      li.appendChild(deleteButton);

      _list.appendChild(li);
    };

    const onSubmit = event => {
      event.preventDefault();

      const formData = new FormData(event.target);

      const title = formData.get("title");
      const body = formData.get("body");

      _repository.create({ title: title, body: body }).then(note => {
        addNoteToList(note);
        event.target.reset();
      });
    };

    _form.addEventListener("submit", onSubmit);

    _repository.getAll().then(items => items.forEach(addNoteToList));
  }

  window.NoteApp = NoteApp;
})(NoteRepository);

window.addEventListener("DOMContentLoaded", function() {
  new NoteApp();
});
