import React from "react";
import { AnswerType } from "./SideBar";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  questionNumber: number;
  userAnswer: AnswerType | undefined;
};

// type AnswerType = {
//   question: string;
//   answer: string;
//   correct: boolean;
//   correctAnswer: string;
// };

const Questionnaire: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNumber,
  userAnswer,
}) => {
  return (
    <div className="square">
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div className="row">
        {answers.map((answer) => (
          <button key={answer} disabled={false} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }}></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Questionnaire;
