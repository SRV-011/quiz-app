import { useRef } from "react";
export default function Answer({
  answer,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffleAnswers = useRef();
  if (!shuffleAnswers.current) {
    shuffleAnswers.current = [...answer].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffleAnswers.current.map((ans) => {
        let cssClass = "";
        const isSelected = selectedAnswer === ans;
        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={ans} className="answer">
            <button
              onClick={() => onSelect(ans)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
