import PropTypes from "prop-types";
import "./ABQuestion.css";

export function ABQuestion(props) {
  const handleOnClickA = () => props.onChoice(props.id, props.buttonAValue);
  const handleOnClickB = () => props.onChoice(props.id, props.buttonBValue);

  return (
    <div className="ABQuestion">
      <p className="ABQuestion__text">{props.question}</p>
      <div className="ABQuestion__answers">
        <button className="ABQuestion__answer" onClick={handleOnClickA}>
          {props.buttonA}
        </button>
        <button className="ABQuestion__answer" onClick={handleOnClickB}>
          {props.buttonB}
        </button>
      </div>
    </div>
  );
}

ABQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  onChoice: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  buttonA: PropTypes.string.isRequired,
  buttonB: PropTypes.string.isRequired,
  buttonAValue: PropTypes.string.isRequired,
  buttonBValue: PropTypes.string.isRequired,
};
