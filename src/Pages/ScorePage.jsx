import React, { useContext, useEffect } from "react";
import { ScoreContext } from "../Context/ScoreContext";
import UserScore from "../Components/UserScore";

const ScoresPage = () => {
  const {
    currentGame,
    setCurrentGame,
    allScoresArrayKGame,
    userScoresArrayKGame,
    setUserScoresArrayKGame,
    getUserScores,
    allScoresArrayIGame,
    setAllScoresArrayIGame,
    userScoresArrayIGame,
    renderScores,
    getAllScores,
  } = useContext(ScoreContext);

  useEffect(() => {
    getAllScores("kgame");
    setCurrentGame("");
  }, []);

  return (
    <div>
      <div>
        <h1>KGame Scores</h1>
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Score</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody> {renderScores(allScoresArrayKGame)}</tbody>
        </table>
      </div>
      <div>
        <h1>User's KGame's Scores</h1>
        <UserScore />
      </div>
    </div>
  );
};

export default ScoresPage;
