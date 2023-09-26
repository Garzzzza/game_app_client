
import React, { useEffect, useState, useContext } from 'react';
import UseWordle from '../Components/UseWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Message from './Massage';
//import { ScoreContext } from '../Context/ScoreContext';

export default function Wordle({ solution, showButton, handleShowButton, handleSolution, description }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = UseWordle(solution);
  const [showMessage, setShowMessage] = useState(false);
  const score = isCorrect ? 1000 - 100 * (turn - 1) : 0;
  //const { postScore, currentGame, setCurrentScore } = useContext(ScoreContext);



  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect || turn > 9) {
        setShowMessage(true);
        window.removeEventListener('keyup', handleKeyup);
    
        // Call the postScore function to add the score to the database
        // if (isCorrect) {
        //   postScore(currentGame);
          
        //   // Update the current score in the context if isCorrect is true
        //   setCurrentScore(score);
          
        //   // Log the score to the console
        //   console.log(`Current Score: ${score}`);
        // }
      
      // Delay the execution of handleSolution by 7 seconds
      setTimeout(() => {
        handleSolution();
        handleShowButton(true);
      }, 7000);

    }

    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup, isCorrect, turn, handleShowButton, handleSolution]);

  return (
    <div>
      {showMessage && (
        <Message isCorrect={isCorrect} turn={turn} solution={solution} score={score} />
      )}

      {showButton && (
        <button>Let's play!</button>
      )}

      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad usedKeys={usedKeys} />
    </div>
  );
}