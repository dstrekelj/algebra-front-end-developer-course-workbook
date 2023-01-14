import { useContext } from "react";
import { Task as Component } from "../components/Task";
import { ReduxAppContext } from "../contexts/ReduxAppContext";

export function Task(props) {
  const appContext = useContext(ReduxAppContext);

  const handleCheck = () => appContext.checkTask(props.id);
  const handleDelete = () => appContext.deleteTask(props.id);

  return (
    <Component
      isDone={props.isDone}
      onCheck={handleCheck}
      onDelete={handleDelete}
    >
      {props.children}
    </Component>
  );
}
