import React, { useState } from "react";

const Game = ({ questi, handleClick, correctt, questions }) => {
  let innerLength = Math.round((correctt / 2) * 100);
  return (
    <div>
      <div className="main_game">
        <div className="container">
          <div className="main">
            <div className="game">
              <h1>{questi.title}</h1>
              <ul>
                {questi.variants.map((txt, index) => (
                  <li onClick={() => handleClick(index)} key={index}>
                    {txt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
