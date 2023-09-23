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
    renderLastUserScore,
    renderHighestUserScore,
  } = useContext(ScoreContext);

  const { getLoggedUser, loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getUserScores();
    getLoggedUser();
  }, []);

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
