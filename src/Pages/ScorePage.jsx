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
    getTop5Scores,
    top5ScoresArrayKGame,
    setTop5ScoresArrayKGame,
    top5ScoresArrayIGame,
    setTop5ScoresArrayIGame,
  } = useContext(ScoreContext);

  useEffect(() => {
    getAllScores("kgame");
    getTop5Scores("kgame");
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
      <div>
        <h1>TOP 5 KGame's Scores</h1>
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Score</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody>
            {top5ScoresArrayKGame.length < 1
              ? null
              : top5ScoresArrayKGame
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((score) => (
                    <tr>
                      <td>{score.userId.nickname}</td>
                      <td>{score.score}</td>
                      <td>{new Date(score.date).toLocaleDateString()}</td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoresPage;
