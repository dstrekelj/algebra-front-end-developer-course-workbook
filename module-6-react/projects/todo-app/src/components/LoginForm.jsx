import { Button } from "./Button";
import { Input } from "./Input";

export function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={props.onChange}
      />
      <Button type="submit">Log in</Button>
    </form>
  );
}
