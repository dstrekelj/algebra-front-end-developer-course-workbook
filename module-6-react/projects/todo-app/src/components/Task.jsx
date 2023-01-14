import { Input } from "../components/Input";
import { Button } from "./Button";

export function Task(props) {
  return (
    <div>
      <Input
        type="checkbox"
        checked={props.isDone}
        onChange={props.onCheck}
      />
      <span>{props.children}</span>
      <Button type="button" onClick={props.onDelete}>
        X
      </Button>
    </div>
  );
}
