import React, { useEffect } from "react";
import UserScore from "../Components/UserScore";
import { useContext } from "react";
import { ScoreContext } from "../Context/ScoreContext";

const IGame = () => {
  const { currentGame, setCurrentGame } = useContext(ScoreContext);

  useEffect(() => {
    setCurrentGame("IGame");
  }, []);

  return (
    <div>
      <h1>IGame</h1>
      <UserScore />
    </div>
  );
};

export default IGame;
