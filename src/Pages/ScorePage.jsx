import React, { useContext, useEffect } from "react";
import { ScoreContext } from "../Context/ScoreContext";
import UserScore from "../Components/UserScore";

const ScoresPage = () => {
  const { getAllScores, renderScores, allScoresArray, setAllScoresArray } =
    useContext(ScoreContext);

  useEffect(() => {
    getAllScores();
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
          <tbody> {renderScores(allScoresArray("kgame"))}</tbody>
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
