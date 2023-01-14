import { useState } from "react";
import { Button } from "./Button";

export function LoginForm(props) {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" name="name" onChange={handleChange} />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" onChange={handleChange} />
        </label>
      </div>
      <div>
        <Button buttonType="primary" type="submit">
          Sign in
        </Button>
      </div>
    </form>
  );
}
