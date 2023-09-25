
// import axios from "axios"; // Import Axios
// import React, { useContext, useEffect, useState } from "react";
// import UserScore from "../Components/UserScore";
// import { ScoreContext } from "../Context/ScoreContext";
// import Wordle from '../Components/Wordle';
// import { AuthContext } from "../Context/AuthContext";

// const KGame = () => {
//   const { currentGame, setCurrentGame } = useContext(ScoreContext);

  // const [showButton, setShowButton] = useState(true); 

//   const [randomSolution, setRandomSolution] = useState(null);

//   useEffect(() => {
//     setCurrentGame("kgame");
//   }, []);

  // const handleShowButton = (value) => {
  //   setShowButton(value);
  // };

  // const handleSolution = () => {
  //   setRandomSolution(null);
  // };
  
//   const [solutions] = useState([
//     { word: "Whisk", id: 1, description: "This kitchen tool sounds like a fast cat's tail." },
//     { word: "Giddy", id: 2, description: "The feeling you get on a rollercoaster or when you win a prize." },
//     { word: "Plump", id: 3, description: "It's what happens to your cheeks when you eat too many cookies." },
//     { word: "Jelly", id: 4, description: "Peanut butter's best friend in a sandwich." },
//     { word: "Beach", id: 5, description: "Where the sand meets the waves, and the sun loves to shine." },
//     { word: "Magic", id: 6, description: "It makes rabbits disappear and brings smiles to faces." },
//     { word: "Robot", id: 7, description: "A mechanical friend that can do some cool tricks." },
//     { word: "Dance", id: 8, description: "What you do when the music takes control of your feet." },
//     { word: "Tasty", id: 9, description: "Food that makes your taste buds throw a party." },
//     { word: "Smile", id: 10, description: "What happens when you're happy or trying to make someone else happy." },
// ]);


// const { token } = useContext(AuthContext);

// const [solutions_1, setSolutions] = useState([]);

// const getSolutionsArray = async () => {
//   try {
//     const response = await axios.get(
//       process.env.REACT_APP_SERVER_URL + "/kgame",
//       { headers: { Authorization: "Bearer " + token } }
//     );
//     setSolutions(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//   useEffect(() => {
//   }, [randomSolution]);

//   const getRandomSolution = () => {
//     const randomIndex = Math.floor(Math.random() * solutions.length);
//     const randomWord = solutions[randomIndex].word;
//     const randomWordId = solutions[randomIndex].id;
//     const randomWordDis = solutions[randomIndex].description;

//     // Update the randomSolution state in the App component
//     setRandomSolution({ word: randomWord, id: randomWordId, description: randomWordDis });

//     // Log the random word and its ID to the console
//     console.log(`Random Word: ${randomWord}, ID: ${randomWordId}`);

//     // Set showButton to true when message is shown
//     handleShowButton(false);

//     console.log(getSolutionsArray ());
//   };

//   return (
//     <div>
//       <h1>WordleWonder</h1>
//       <UserScore />

//       {/* Display the random word and its ID */}
//       {randomSolution && (
//         <div>
//           <p>Description: {randomSolution.description}</p>
//         </div>
//       )}

//       {randomSolution && <Wordle solution={randomSolution.word} handleShowButton={handleShowButton}  handleSolution={handleSolution} />}
//       {/* Button to trigger getRandomSolution */}
//       {showButton && <button onClick={getRandomSolution}>Let's play!</button>}
//     </div>
//   );
// };

// export default KGame;


import React, { useContext, useEffect, useState } from "react";
import UserScore from "../Components/UserScore";
import { ScoreContext } from "../Context/ScoreContext";
import Wordle from "../Components/Wordle";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";


const KGame = () => {
  //const { currentGame, setCurrentGame } = useContext(ScoreContext);
  const { token } = useContext(AuthContext);

  const [solutions, setSolutions] = useState([]);
  const [showButton, setShowButton] = useState(true); 
  
  const handleShowButton = (value) => {
    setShowButton(value);
  };

  const handleSolution = () => {
    setRandomSolution(null);
  };

  const getSolutionsArray = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/kgame",
        { headers: { Authorization: "Bearer " + token } }
      );
      setSolutions(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //setCurrentGame("kgame");
    getSolutionsArray();
  }, []);

  const [randomSolution, setRandomSolution] = useState(null);

  useEffect(() => {}, [randomSolution]);

  // const getRandomSolution = () => {
  //   const randomIndex = Math.floor(Math.random() * solutions.length);
  //   const randomWord = solutions[randomIndex].word;
  //   const randomWordId = solutions[randomIndex]._id;

  //   // Update the randomSolution state in the App component
  //   setRandomSolution({ word: randomWord, _id: randomWordId });

  //   // Log the random word and its ID to the console
  //   console.log(`Random Word: ${randomWord}, ID: ${randomWordId}`);
  //   handleShowButton(false);
  // };
  const getRandomSolution = () => {
    const randomIndex = Math.floor(Math.random() * solutions.length);
    const randomWord = solutions[randomIndex].word.toLowerCase(); // Convert to lowercase
    const randomWordId = solutions[randomIndex]._id;
    const randomWordDis = solutions[randomIndex].description;
  
    // Update the randomSolution state in the App component
    setRandomSolution({ word: randomWord, _id: randomWordId, description:randomWordDis });
  
    // Log the random word and its ID to the console
    console.log(`Random Word: ${randomWord}, ID: ${randomWordId}`);
    handleShowButton(false);
  };

  
  return (
    <div>
      <h1>WordleWonder</h1>
      <UserScore />

      {/* Display the random word and its ID */}
      {randomSolution && (
        <div>
          <p>Description: {randomSolution.description}</p>
        </div>
      )}

      {randomSolution && <Wordle solution={randomSolution.word.toLowerCase()} handleShowButton={handleShowButton}  handleSolution={handleSolution} description={randomSolution.description} />}
      {/* Button to trigger getRandomSolution */}
      {showButton && <button onClick={getRandomSolution}>Let's play!</button>}
    </div>
  );
};

export default KGame;