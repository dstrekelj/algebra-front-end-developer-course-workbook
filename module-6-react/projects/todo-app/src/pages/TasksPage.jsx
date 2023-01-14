import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TaskForm } from "../containers/TaskForm";
import { Task } from "../containers/Task";
import { ReduxAppContext } from "../contexts/ReduxAppContext";

export function TasksPage() {
  const navigate = useNavigate();
  const appContext = useContext(ReduxAppContext);

  useEffect(() => {
    if (!appContext.isLoggedIn()) {
      navigate("/");
    }
  }, [navigate, appContext, appContext.isLoggedIn]);

  return (
    <div>
      {appContext.user && (
        <h1>
          Hello {appContext.user.username}!{" "}
          <button onClick={() => appContext.logOut()}>Log out</button>
        </h1>
      )}
      <TaskForm />
      {appContext.tasks.map((task) => (
        <Task key={task.id} id={task.id} isDone={task.isDone}>
          {task.text}
        </Task>
      ))}
    </div>
  );
}
