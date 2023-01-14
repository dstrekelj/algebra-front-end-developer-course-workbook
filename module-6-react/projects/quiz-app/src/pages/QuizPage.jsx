import { RepositoryLink } from "../components/RepositoryLink";
import { Quiz } from "../components/Quiz";
import { useContext, useState } from "react";
import { Timer } from "../components/Timer";
import { AppContext } from "../contexts/AppContext";
import { withLocale } from "../hoc/withLocale";
import { Paragraph } from "../components/Paragraph";
import { Navigate } from "react-router-dom";

const LocalizedRepositoryLink = withLocale(RepositoryLink);

export function QuizPage() {
  const appState = useContext(AppContext);

  const [actionCount, setActionCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [finishTime, setFinishTime] = useState(null);

  if (!appState.isSignedIn) {
    return <Navigate to="/" />;
  }

  const handleSubmit = (answers, id) => setQuizAnswer({ answers, id });
  const handleStateChange = () => setActionCount((state) => state + 1);
  const handleTimerFinish = (time) => setFinishTime(time);

  let answerComponents = null;

  if (quizAnswer !== null) {
    answerComponents = Object.keys(quizAnswer.answers).map((key) => {
      return (
        <div key={key}>
          {key}: {quizAnswer.answers[key]}
        </div>
      );
    });
  }

  return (
    <div className="QuizPage">
      <Paragraph element="p">
        <div>Your action count is: {actionCount}</div>
        <RepositoryLink>View Repository</RepositoryLink>
        <LocalizedRepositoryLink>View Repository</LocalizedRepositoryLink>
      </Paragraph>
      <Paragraph element="div">
        {appState.user.name} ({appState.user.email})
      </Paragraph>
      {quizAnswer === null && (
        <>
          <Timer onTick={(time) => console.log(time)} onFinish={handleTimerFinish} />
          <Quiz onSubmit={handleSubmit} onStateChange={handleStateChange} />
        </>
      )}
      {quizAnswer !== null && (
        <>
          <div>{answerComponents}</div>
          <Paragraph element="div">{quizAnswer.id}</Paragraph>
          <Paragraph element="div">{finishTime} s</Paragraph>
        </>
      )}
    </div>
  );
}
