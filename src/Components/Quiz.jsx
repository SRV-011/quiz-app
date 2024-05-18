import { useState, useCallback } from "react";
import QUESTIONS from "../question.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestion = userAnswer.length;
  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(ans) {
    setUserAnswer((preValue) => [...preValue, ans]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);

  if (activeQuestion >= QUESTIONS.length) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        questionIndex={activeQuestion}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
