
import React, { useEffect, useState, useContext } from 'react';
import UseWordle from '../Components/UseWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Message from './Massage';
import { ScoreContext } from '../Context/ScoreContext';
//import { ScoreContext } from '../Context/ScoreContext';

export default function Wordle({ solution, showButton, handleShowButton, handleSolution, description }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = UseWordle(solution);
  const [showMessage, setShowMessage] = useState(false);
  let score = isCorrect ? 1000 - 100 * (turn - 1) : 0;
  const { postScore, currentGame, setCurrentScore } = useContext(ScoreContext);
  const [scorePosted, setScorePosted] = useState(false);

  useEffect(() => {
    setCurrentScore(1000 - 100* (turn))
  }, [turn])


  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect || turn > 9) {
        setShowMessage(true);
        window.removeEventListener('keyup', handleKeyup);
    
        // Call the postScore function to add the score to the database  
        if (isCorrect && !scorePosted) {
          
          //setCurrentScore(score);
          postScore("kgame");
         
          
          
          // Update the current score in the context if isCorrect is true
  
          
          // Log the score to the console
          console.log(`Current Score: ${score}`);
          setScorePosted(true);
        }
      
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
        <div>Your guesses need to be exactly five letters, and no repeats.</div>
        <div>Expect some colorful feedback.</div>
        <div>If a letter in your guess is somewhere in the word but not in the right place, it'll light up yellow.</div>
        <div>But when you guess both the right letter and its correct position, it’ll be green.</div>
      {showMessage && (
        <Message isCorrect={isCorrect} turn={turn} solution={solution} score={score} />
      )}

      {showButton && (
        <button>Let's play!</button>
      )}

      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      {/*  <Keypad usedKeys={usedKeys} /> */}
   
    </div>
  );
}