import { useContext, useState } from "react";
import { TaskForm as Component } from "../components/TaskForm";
import { ReduxAppContext } from "../contexts/ReduxAppContext";

export function TaskForm() {
  const appContext = useContext(ReduxAppContext);
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    appContext.addTask(state);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}
