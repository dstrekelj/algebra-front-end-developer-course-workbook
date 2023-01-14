import { arrayHelpers } from "../library/helpers";

export function RandomValue(props) {
  const value = arrayHelpers.getRandomElement(props.values);

  return (
    <div>
      {value} is {value % 2 === 1 ? "odd" : "even"}
    </div>
  );
}
