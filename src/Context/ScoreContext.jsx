import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token, getLoggedUser, loggedUser } = useContext(AuthContext);

  const [allScoresArrayKGame, setAllScoresArrayKGame] = useState([]);
  const [userScoresArrayKGame, setUserScoresArrayKGame] = useState([]);
  const [allScoresArrayIGame, setAllScoresArrayIGame] = useState([]);
  const [userScoresArrayIGame, setUserScoresArrayIGame] = useState([]);
  const [top5ScoresArrayKGame, setTop5ScoresArrayKGame] = useState([]);
  const [top5ScoresArrayIGame, setTop5ScoresArrayIGame] = useState([]);

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
      getAllScores(game);
      getUserScores(game);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAllScores(game) {
    try {
      let setArray;
      if (game === "kgame") {
        setArray = setAllScoresArrayKGame;
      } else if (game === "igame") {
        setArray = setAllScoresArrayIGame;
      }

      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/" + game,
        { headers: { Authorization: "Bearer " + token } }
      );
      setArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserScores(game) {
    try {
      let setArray;
      if (game === "kgame") {
        setArray = setUserScoresArrayKGame;
      } else if (game === "igame") {
        setArray = setUserScoresArrayIGame;
      }

      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/user_score/" + game,
        { headers: { Authorization: "Bearer " + token } }
      );
      setArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function renderScores(relevantScoresArray) {
    return relevantScoresArray.map((score) => {
      return (
        <tr>
          <td>{score.userId.nickname}</td>
          <td>{score.score}</td>
          <td>{new Date(score.date).toLocaleDateString()}</td>
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
        <td>{latestScore.userId.nickname}</td>
        <td>{latestScore.score}</td>
        <td>{new Date(latestScore.date).toLocaleDateString()}</td>
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
        <td>{latestScore.userId.nickname}</td>
        <td>{latestScore.score}</td>
        <td>{new Date(latestScore.date).toLocaleDateString()}</td>
      </tr>
    );
  }

  async function getTop5Scores(game) {
    try {
      let setArray;
      if (game === "kgame") {
        setArray = setTop5ScoresArrayKGame;
      } else if (game === "igame") {
        setArray = setTop5ScoresArrayIGame;
      }

      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/top5/" + game,
        { headers: { Authorization: "Bearer " + token } }
      );

      setArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ScoreContext.Provider
      value={{
        postScore,
        currentGame,
        setCurrentGame,
        currentScore,
        setCurrentScore,
        getAllScores,
        renderScores,
        getUserScores,

        allScoresArrayKGame,
        setAllScoresArrayKGame,
        userScoresArrayKGame,
        setUserScoresArrayKGame,
        allScoresArrayIGame,
        setAllScoresArrayIGame,
        userScoresArrayIGame,
        setUserScoresArrayIGame,
        renderLastUserScore,
        renderHighestUserScore,
        getTop5Scores,
        top5ScoresArrayKGame,
        setTop5ScoresArrayKGame,
        top5ScoresArrayIGame,
        setTop5ScoresArrayIGame,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
export { ScoreContext };
