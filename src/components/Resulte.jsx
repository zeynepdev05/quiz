import React from "react";

const Resulte = ({ corre, questions }) => {
  return (
    <div id="result">
      <div className="result">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt=""
        />
        <h3>
          Вы набрали {corre} из {questions.length} правильных ответов!
        </h3>
        <a href="/">
          <button>начать сначала</button>
        </a>
      </div>
    </div>
  );
};

export default Resulte;
