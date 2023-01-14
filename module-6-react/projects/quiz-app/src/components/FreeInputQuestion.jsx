import PropTypes from "prop-types";

export function FreeInputQuestion(props) {
  const handleKeyUp = (event) => props.onKeyUp(props.id, event.target.value);

  return (
    <div>
      <p>{props.text}</p>
      <div>
        <input type="text" onKeyUp={handleKeyUp} />
      </div>
    </div>
  );
}

FreeInputQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onKeyUp: PropTypes.func.isRequired,
};
