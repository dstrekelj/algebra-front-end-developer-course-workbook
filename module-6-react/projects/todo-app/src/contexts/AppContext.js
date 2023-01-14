import { createContext, useCallback, useEffect, useState } from "react";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const logIn = (data) => setUser({ username: data.username });
  const logOut = () => {
    setTasks([]);
    setUser(null);
  };
  const isLoggedIn = useCallback(() => user !== null, [user]);

  const addTask = (data) =>
    setTasks((state) => [
      ...state,
      { id: Date.now(), text: data.task, isDone: false },
    ]);

  const checkTask = (id) => {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      }),
    );
  };

  const deleteTask = (id) =>
    setTasks((state) => state.filter((task) => task.id !== id));

  const value = {
    user,
    logIn,
    logOut,
    isLoggedIn,
    tasks,
    addTask,
    checkTask,
    deleteTask,
  };

  useEffect(() => {
    if (
      isLoggedIn() &&
      localStorage.getItem("note-app-" + user.username) !== null
    ) {
      const storedTasks = JSON.parse(
        localStorage.getItem("note-app-" + user.username),
      );
      setTasks(storedTasks);
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    if (isLoggedIn()) {
      localStorage.setItem(
        "note-app-" + user.username,
        JSON.stringify(tasks),
      );
    }
  }, [isLoggedIn, user, tasks]);

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}
