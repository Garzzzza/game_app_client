// import React, { useEffect,  useState} from 'react'
// import UseWordle from '../Components/UseWordle'

// // components
// import Grid from './Grid'
// import Keypad from './Keypad'
// import Modal from './Modal'

// export default function Wordle({ solution }) {
//   const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = UseWordle(solution)
//   const [showModal, setShowModal] = useState(false)
  
//   useEffect(() => {
//     window.addEventListener('keyup', handleKeyup)

//     if (isCorrect) {
//       setTimeout(() => setShowModal(true), 2000)
//       window.removeEventListener('keyup', handleKeyup)
//     }
//     if (turn > 9) {
//       setTimeout(() => setShowModal(true), 2000)
//       window.removeEventListener('keyup', handleKeyup)
//     }

//     return () => window.removeEventListener('keyup', handleKeyup)
//   }, [handleKeyup, isCorrect, turn])

//   return (
//     <div>
//       <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
//       <Keypad usedKeys={usedKeys} />
//       {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
//     </div>
//   )
// }
// import React, { useEffect, useState } from 'react';
// import UseWordle from '../Components/UseWordle';
// import Grid from './Grid';
// import Keypad from './Keypad';
// import Message from './Massage';

// export default function Wordle({ solution }) {
//   const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = UseWordle(solution);
//   const [showMessage, setShowMessage] = useState(false);
//   const score = isCorrect ? 1000 - 100 * (turn - 1) : 0;

//   useEffect(() => {
//     window.addEventListener('keyup', handleKeyup);

//     if (isCorrect || turn > 9) {
//         setShowMessage(true);
//         window.removeEventListener('keyup', handleKeyup);
//         // Call the handleShowButton function with true to show the button
//         handleShowButton(true);
//       }
      

//     return () => window.removeEventListener('keyup', handleKeyup);
//   }, [handleKeyup, isCorrect, turn]);

//   return (
//     <div>
//         {showMessage && (
//         <Message isCorrect={isCorrect} turn={turn} solution={solution} score={score} />
//       )}
//       <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
//       <Keypad usedKeys={usedKeys} />
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';
import UseWordle from '../Components/UseWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Message from './Massage';

export default function Wordle({ solution, showButton, handleShowButton, handleSolution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = UseWordle(solution);
  const [showMessage, setShowMessage] = useState(false);
  const score = isCorrect ? 1000 - 100 * (turn - 1) : 0;

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);

    if (isCorrect || turn > 9) {
      setShowMessage(true);
      window.removeEventListener('keyup', handleKeyup);
      // add the score to the db!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      // Call the handleShowButton function to set showButton to true in KGame
      //handleShowButton(true);

      // Delay the execution of handleSolution by 7 seconds
      setTimeout(() => {
        handleSolution();
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
