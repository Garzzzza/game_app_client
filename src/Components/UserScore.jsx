import React, { useContext, useEffect } from "react";
import { ScoreContext } from "../Context/ScoreContext";
import { AuthContext } from "../Context/AuthContext";

const UserScore = () => {
  const {
    getAllScores,
    renderScores,
    allScoresArray,
    getUserScores,
    setAllScoresArray,
    userScoresArray,
  } = useContext(ScoreContext);

  const { nickname } = useContext(AuthContext);

  useEffect(() => {
    getUserScores();
  }, []);

  function renderLastUserScore(relevantScoresArray) {
    const latestScore = relevantScoresArray.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )[0];
    return (
      <tr>
        <td>{latestScore.nickname}</td>
        <td>{latestScore.score}</td>
        <td>{latestScore.date}</td>
      </tr>
    );
  }

  function renderHighestUserScore(relevantScoresArray) {
    const latestScore = relevantScoresArray.sort(
      (a, b) => b.score - a.score
    )[0];
    return (
      <tr>
        <td>{latestScore.nickname}</td>
        <td>{latestScore.score}</td>
        <td>{latestScore.date}</td>
      </tr>
    );
  }

  return (
    <div>
      <div>
        <h1>{nickname} Last Score </h1>
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Score</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody> {renderLastUserScore(userScoresArray)}</tbody>
        </table>
      </div>
      <div>
        <h1> {nickname} Highest Score</h1>
        <table className="scoresTable">
          <thead>
            <tr>
              <th>Nickname</th>
              <th>Score</th>
              <th> Date</th>
            </tr>
          </thead>
          <tbody> {renderHighestUserScore(userScoresArray)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default UserScore;
