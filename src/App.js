import "./App.css";
import React, { useState } from "react";
import Game from "./components/Game";
import Resulte from "./components/Resulte";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function App() {
  const [correctt, setCorrectt] = useState(0);
  const [corre, setCorre] = useState(0);
  let questi = questions[correctt];

  function handleClick(index) {
    setCorrectt(correctt + 1);

    if (index === questi.correct) {
      setCorre(corre + 1);
    }
  }
  return (
    <div className="App">
      {correctt !== questions.length ? (
        <Game
          handleClick={handleClick}
          questi={questi}
          questions={questions}
          correctt={correctt}
        />
      ) : (
        <Resulte corre={corre} questions={questions} />
      )}
    </div>
  );
}

export default App;
