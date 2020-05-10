require("./script.js");

describe("Note", () => {
  test("Note should be available globally", () => {
    expect(Note).toBeDefined();
  });

  test("Note should have id, title, body, and createdAt", () => {
    const note = new Note();
    expect(note).toHaveProperty("id");
    expect(note).toHaveProperty("title");
    expect(note).toHaveProperty("body");
    expect(note).toHaveProperty("createdAt");
  });

  test("Note should be constructible with data", () => {
    const data = {
      id: 1,
      title: "Foo",
      body: "Bar",
      createdAt: Date.now()
    };
    const note = new Note(data);
    expect(note).toMatchObject(data);
  });
});

describe("NoteRepository", () => {
  test("NoteRepository should be available globally", () => {
    expect(NoteRepository).toBeDefined();
  });

  test("NoteRepository should create a note", () => {
    const data = {
      id: 1,
      title: "Foo",
      body: "Bar",
      createdAt: Date.now()
    };

    const repository = new NoteRepository([]);

    expect.assertions(2);
    expect(repository.create).toBeDefined();
    expect(repository.create(data)).resolves.toMatchObject(data);
  });

  test("NoteRepository should update a note", async () => {
    const data = {
      id: 1,
      title: "Foo",
      body: "Bar",
      createdAt: Date.now()
    };

    const newData = {
      id: 1,
      title: "New Foo",
      body: "New Bar",
      createdAt: Date.now()
    };

    const repository = new NoteRepository([data]);

    expect.assertions(3);
    expect(repository.update).toBeDefined();
    expect(repository.update(data.id, newData)).resolves.toMatchObject(newData);
    expect(repository.update(-1, data)).rejects.toThrow();
  });

  test("NoteRepository should delete a note", () => {
    const data = {
      id: 1,
      title: "Foo",
      body: "Bar",
      createdAt: Date.now()
    };

    const repository = new NoteRepository([data]);

    expect.assertions(3);
    expect(repository.delete).toBeDefined();
    expect(repository.delete(data.id)).resolves.toBeNull();
    expect(repository.delete(-1)).rejects.toThrow();
  });

  test("NoteRepository should delete all notes", () => {
    const repository = new NoteRepository([]);

    expect.assertions(2);
    expect(repository.deleteAll).toBeDefined();
    expect(repository.deleteAll()).resolves.toBeNull();
  });

  test("NoteRepository should retrieve a note", () => {
    const data = {
      id: 1,
      title: "Foo",
      body: "Bar",
      createdAt: Date.now()
    };

    const repository = new NoteRepository([data]);

    expect.assertions(3);
    expect(repository.get).toBeDefined();
    expect(repository.get(data.id)).resolves.toMatchObject(data);
    expect(repository.get(-1)).rejects.toThrow();
  });

  test("NoteRepository should retrieve all notes", () => {
    const repository = new NoteRepository([]);

    expect.assertions(2);
    expect(repository.getAll).toBeDefined();
    expect(repository.getAll()).resolves.toEqual(expect.any(Array));
  });
});
