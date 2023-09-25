
// import React from 'react';

// export default function Modal({ isCorrect, solution, turn }) {
//   const score = isCorrect ? 1000 - 100 * (turn -1) : 0; // Calculate the score

//   return (
//     <div className="modal">
//       {isCorrect && (
//         <div>
//           <h1>You Win!</h1>
//           <p className="solution">{solution}</p>
//           <p>You found the solution in {turn} guesses</p>
//           <p>Your score is {score}</p> {/* Display the score */}
//         </div>
//       )}
//       {!isCorrect && (
//         <div>
//           <h1>Nevermind</h1>
//           <p className="solution">{solution}</p>
//           <p>Better luck next time</p>
//         </div>
//       )}
//     </div>
//   );
// }

// import React from 'react';

// export default function Modal({ isCorrect, solution, turn, score }) {
//   return (
//     <div className="modal">
//       {isCorrect && (
//         <div>
//           <h1>You Win!</h1>
//           <p className="solution">{solution}</p>
//           <p>You found the solution in {turn} guesses</p>
//           <p>Your score is {score}</p> {/* Display the score */}
//         </div>
//       )}
//       {!isCorrect && (
//         <div>
//           <h1>Nevermind</h1>
//           <p className="solution">{solution}</p>
//           <p>Better luck next time</p>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useNavigate } from 'react-router-dom';

// export default function Modal({ isCorrect, solution, turn, score }) {
//     const navigate = useNavigate();
  
//     const handleButtonClick = () => {
//       // Navigate to the kgame path when the button is clicked
//       navigate('/kgame');
//     };
  
//     return (
//       <div className="modal">
//         {isCorrect && (
//           <div>
//             <h1>You Win!</h1>
//             <p className="solution">{solution}</p>
//             <p>You found the solution in {turn} guesses</p>
//             <p>Your score is {score}</p> {/* Display the score */}
//             <button onClick={handleButtonClick}>Press Me</button> {/* Button to navigate to kgame */}
//           </div>
//         )}
//         {!isCorrect && (
//           <div>
//             <h1>Nevermind</h1>
//             <p className="solution">{solution}</p>
//             <p>Better luck next time</p>
//             <p>Your score is {score}</p> {/* Display the score */}
//             <button onClick={handleButtonClick}>Press Me</button> {/* Button to navigate to kgame */}
//           </div>
//         )}
//       </div>
//     );
//   }

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; // Import useState

export default function Modal({ isCorrect, solution, turn, score }) {
  const navigate = useNavigate(); // Use the useNavigate hook
  
  const [modalOpen, setModalOpen] = useState(true); // State variable to control modal open/close
  
  const closeModal = () => {
    setModalOpen(false);
  };
  
  const handleButtonClick = () => {
    // Close the modal
    closeModal();

    // Navigate to the kgame path
    navigate('/kgame');
  };

  return (
    <div className={`modal ${modalOpen ? 'open' : 'closed'}`}>
      {modalOpen && isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses</p>
          <p>Your score is {score}</p> {/* Display the score */}
          <button onClick={handleButtonClick}>Press Me</button> {/* Button to navigate to kgame */}
        </div>
      )}
      {modalOpen && !isCorrect && (
        <div>
          <h1>Nevermind</h1>
          <p className="solution">{solution}</p>
          <p>Better luck next time</p>
          <p>Your score is {score}</p> {/* Display the score */}
          <button onClick={handleButtonClick}>Press Me</button> {/* Button to navigate to kgame */}
        </div>
      )}
    </div>
  );
}


  

