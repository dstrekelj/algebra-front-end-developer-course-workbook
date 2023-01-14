import { createContext, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ReduxAppContext = createContext();
export const ReduxAppConsumer = ReduxAppContext.Consumer;

export function ReduxAppProvider(props) {
  const [user, setUser] = useState(null);
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const logIn = (data) => setUser({ username: data.username });
  const logOut = () => {
    dispatch({ type: "SET_TASKS", tasks: [] });
    setUser(null);
  };
  const isLoggedIn = useCallback(() => user !== null, [user]);

  const addTask = (data) =>
    dispatch({
      type: "ADD_TASK",
      task: { id: Date.now(), text: data.task, isDone: false },
    });

  const checkTask = (id) =>
    dispatch({
      type: "CHECK_TASK",
      id: id,
    });

  const deleteTask = (id) =>
    dispatch({
      type: "DELETE_TASK",
      id: id,
    });

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
      dispatch({ type: "SET_TASKS", tasks: storedTasks });
    }
  }, [dispatch, isLoggedIn, user]);

  useEffect(() => {
    if (isLoggedIn()) {
      localStorage.setItem(
        "note-app-" + user.username,
        JSON.stringify(tasks),
      );
    }
  }, [isLoggedIn, user, tasks]);

  return (
    <ReduxAppContext.Provider value={value}>
      {props.children}
    </ReduxAppContext.Provider>
  );
}
