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
        <h1>All scores</h1>
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Score</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody> {renderScores(allScoresArray)}</tbody>
        </table>
      </div>
      <div>
        <h1>user's scores</h1>
        <UserScore />
      </div>
    </div>
  );
};

export default ScoresPage;
