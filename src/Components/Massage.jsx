import React from 'react';

export default function Message({ isCorrect, solution, turn, score }) {
  return (
    <div className="message">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses</p>
          <p>Your score is {score}</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time</p>
          <p>Your score is {score}</p>
        </div>
      )}
    </div>
  );
}