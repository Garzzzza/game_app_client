import React, { useContext, useEffect } from "react";
import UserScore from "../Components/UserScore";
import { ScoreContext } from "../Context/ScoreContext";

const KGame = () => {
  const { currentGame, setCurrentGame } = useContext(ScoreContext);

  useEffect(() => {
    setCurrentGame("kgame");
  }, []);

  return (
    <div>
      <h1>KGame</h1>
      <UserScore />
    </div>
  );
};

export default KGame;
