import React, { useContext, useEffect } from "react";
import { ScoreContext } from "../Context/ScoreContext";
import { AuthContext } from "../Context/AuthContext";

const UserScore = () => {
  const {
    currentGame,
    setCurrentGame,
    cuurentScore,
    setCurretnScore,
    allScoresArrayKGame,
    setAllScoresArrayKGame,
    userScoresArrayKGame,
    setUserScoresArrayKGame,
    allScoresArrayIGame,
    setAllScoresArrayIGame,
    userScoresArrayIGame,
    setUserScoresArrayIGame,
    getUserScores,
    renderLastUserScore,
    renderHighestUserScore,
  } = useContext(ScoreContext);

  const { getLoggedUser, loggedUser } = useContext(AuthContext);

  useEffect(() => {
    getUserScores("kgame");
    getLoggedUser();
  }, []);

  return (
    <div>
      {currentGame !== "igame" && (
        <div>
          <h2>{loggedUser.nickname} Last Score Wordle </h2>
          <table className="scoresTable">
            <thead>
              <tr>
                <th>Nickname</th>
                <th>Score</th>
                <th> Date</th>
              </tr>
            </thead>
            <tbody> {renderLastUserScore(userScoresArrayKGame)}</tbody>
          </table>
        </div>
      )}
      {/* <div>
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
      </div>*/}
      {currentGame !== "igame" && (
        <div>
          <h2> {loggedUser.nickname} Highest Score Wordle</h2>
          <table className="scoresTable">
            <thead>
              <tr>
                <th>Nickname</th>
                <th>Score</th>
                <th> Date</th>
              </tr>
            </thead>
            <tbody> {renderHighestUserScore(userScoresArrayKGame)}</tbody>
          </table>
        </div>
      )}
      {/* <div>
        <h2> {loggedUser.nickname} Highest Score PokeTanks</h2>
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
      </div> */}
    </div>
  );
};

export default UserScore;
