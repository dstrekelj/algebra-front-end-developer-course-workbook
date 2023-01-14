import PropTypes from "prop-types";
import "./ABCQuestion.css";

export function ABCQuestion(props) {
  const handleOnClickA = () => props.onChoice(props.id, props.buttonAValue);
  const handleOnClickB = () => props.onChoice(props.id, props.buttonBValue);
  const handleOnClickC = () => props.onChoice(props.id, props.buttonCValue);

  return (
    <div className="ABCQuestion">
      <p className="ABCQuestion__text">{props.question}</p>
      <div className="ABCQuestion__answers">
        <button className="ABCQuestion__answer" onClick={handleOnClickA}>
          {props.buttonA}
        </button>
        <button className="ABCQuestion__answer" onClick={handleOnClickB}>
          {props.buttonB}
        </button>
        <button className="ABCQuestion__answer" onClick={handleOnClickC}>
          {props.buttonC}
        </button>
      </div>
    </div>
  );
}

ABCQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  onChoice: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  buttonA: PropTypes.string.isRequired,
  buttonB: PropTypes.string.isRequired,
  buttonC: PropTypes.string.isRequired,
  buttonAValue: PropTypes.string.isRequired,
  buttonBValue: PropTypes.string.isRequired,
  buttonCValue: PropTypes.string.isRequired,
};
