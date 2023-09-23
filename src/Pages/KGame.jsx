import React, { useContext, useEffect } from "react";
import UserScore from "../Components/UserScore";
import { ScoreContext } from "../Context/ScoreContext";
import Wordle from '../Components/Wordle';

const KGame = () => {
  const { currentGame, setCurrentGame } = useContext(ScoreContext);

  useEffect(() => {
    setCurrentGame("kgame");
  }, []);


  // kellins code
  const [solutions] = useState([
    { word: "ninja", id: 1 },
    { word: "apple", id: 2 },
    { word: "banana", id: 3 },
    { word: "cherry", id: 4 },
    { word: "grape", id: 5 },
  ]);

  const [randomSolution, setRandomSolution] = useState(null);

  useEffect(() => {
  }, [randomSolution]);

  const getRandomSolution = () => {
    const randomIndex = Math.floor(Math.random() * solutions.length);
    const randomWord = solutions[randomIndex].word;
    const randomWordId = solutions[randomIndex].id;

    // Update the randomSolution state in the App component
    setRandomSolution({ word: randomWord, id: randomWordId });

    // Log the random word and its ID to the console
    console.log(`Random Word: ${randomWord}, ID: ${randomWordId}`);
  };

  return (
    <div>
      <h1>KGame</h1>
      <UserScore />

      {/* Kellins code */}
      <h1>Wordle (Lingo)</h1>
      {/* Display the random word and its ID */}
      {randomSolution && (
        <div>
          <p>Random Word: {randomSolution.word}</p>
          <p>Random Word ID: {randomSolution.id}</p>
        </div>
      )}

      {randomSolution && <Wordle solution={randomSolution.word} />}
      {/* Button to trigger getRandomSolution */}
      <button onClick={getRandomSolution}>Get Random Word and ID</button>
    </div>
  );
};

export default KGame;
