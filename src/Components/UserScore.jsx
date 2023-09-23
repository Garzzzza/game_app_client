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

  const { getLoggedUser, loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getUserScores();
    getLoggedUser();
  }, []);

  function renderLastUserScore(relevantScoresArray) {
    if (relevantScoresArray.length < 1) return null;
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
    if (relevantScoresArray.length < 1) return null;
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
        <h2>{loggedUser.nickname} Last Score KGame </h2>
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
        <h2>{loggedUser.nickname} Last Score IGame </h2>
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
        <h2> {loggedUser.nickname} Highest Score KGame</h2>
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
      <div>
        <h2> {loggedUser.nickname} Highest Score IGame</h2>
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
