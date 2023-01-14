import { useContext, useState } from "react";
import { LoginForm as Component } from "../components/LoginForm";
import { ReduxAppContext } from "../contexts/ReduxAppContext";

export function LoginForm(props) {
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
    appContext.logIn(state);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}
