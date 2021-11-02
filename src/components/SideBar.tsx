import React from "react";
import Questionnaire from "./Questionnaire";
import { getData, QuestionState } from "./Api";
//@ts-ignore
import { ReactComponent as SideIcon } from "../assets/icons/side-icon.svg";

export type AnswerType = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function SideBar() {
  const [side, setSide] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerType[]>([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      const newQuestions = await getData();
      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      console.log(newQuestions);
    })();
  }, []);

  const checkAnswer = () => {};

  const nextQuestion = () => {};

  return (
    <div>
      {/* <div className="side-header"> */}
      <div className={side ? "side" : "side-close"}>
        <div onClick={() => setSide(!side)} className="icon-size">
          <SideIcon />
        </div>
      </div>
      {/* </div>
      <div className="side-body"> */}
      {questions && questions.length > 0 ? (
        <Questionnaire
          questionNumber={number + 1}
          question={questions[number].question}
          answers={questions[number].answers}
          callback={checkAnswer}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
        />
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={nextQuestion}>Next</button>
    </div>
    // </div>
  );
}

export { SideBar };
