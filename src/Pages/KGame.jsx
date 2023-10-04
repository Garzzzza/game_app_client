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
    getSolutionsArray();
  }, []);

  const [randomSolution, setRandomSolution] = useState(null);

  useEffect(() => {}, [randomSolution]);

  const getRandomSolution = () => {
    const randomIndex = Math.floor(Math.random() * solutions.length);
    const randomWord = solutions[randomIndex].word.toLowerCase(); // Convert to lowercase
    const randomWordId = solutions[randomIndex]._id;
    const randomWordDis = solutions[randomIndex].description;

    // Update the randomSolution state in the App component
    setRandomSolution({
      word: randomWord,
      _id: randomWordId,
      description: randomWordDis,
    });

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

      {randomSolution && (
        <Wordle
          solution={randomSolution.word.toLowerCase()}
          handleShowButton={handleShowButton}
          handleSolution={handleSolution}
          description={randomSolution.description}
        />
      )}
      {/* Button to trigger getRandomSolution */}
      {showButton && <button onClick={getRandomSolution}>Let's play!</button>}
    </div>
  );
};

export default KGame;
