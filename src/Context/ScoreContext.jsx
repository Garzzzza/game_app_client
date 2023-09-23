import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token, getLoggedUser, loggedUser } = useContext(AuthContext);
  const [allScoresArray, setAllScoresArray] = useState([]);
  const [userScoresArray, setUserScoresArray] = useState([]);
  const [currentScore, setCurrentScore] = useState(null);
  const [currentGame, setCurrentGame] = useState("");

  async function postScore(game) {
    try {
      const scoreToPost = {
        score: currentScore,
      };
      const response = await axios.post(
        process.env.REACT_APP_SERVER_URL + "/scores/" + game,
        scoreToPost,
        { headers: { Authorization: "Bearer " + token } }
      );
      getAllScores();
      getUserScores();
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllScores(game) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/" + game,
        { headers: { Authorization: "Bearer " + token } }
      );
      setAllScoresArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserScores(game) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/user_score/" + game,
        { headers: { Authorization: "Bearer " + token } }
      );
      setUserScoresArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function renderScores(relevantScoresArray) {
    return relevantScoresArray.map((score) => {
      return (
        <tr>
          <td>{score.nickname}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    });
  }
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
    <ScoreContext.Provider
      value={{
        currentGame,
        setCurrentGame,
        getAllScores,
        renderScores,
        allScoresArray,
        setAllScoresArray,
        getUserScores,
        userScoresArray,
        setUserScoresArray,
        renderLastUserScore,
        renderHighestUserScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
export { ScoreContext };
