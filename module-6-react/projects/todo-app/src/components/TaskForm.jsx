import { Button } from "./Button";
import { Input } from "./Input";

export function TaskForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Input
        type="text"
        name="task"
        placeholder="Buy milk"
        onChange={props.onChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
}
