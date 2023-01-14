import "../styles/Button.css";

export function Button({ buttonType, ...restProps }) {
  let className = "Button";

  if (buttonType === "primary") {
    className += " Button--primary";
  } else if (buttonType === "secondary") {
    className += " Button--secondary";
  } else if (buttonType === "ghost") {
    className += " Button--ghost";
  }

  return <button {...restProps} className={className} />;
}
