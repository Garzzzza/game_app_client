import { useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  const [allScoresArray, setAllScoresArray] = useState([]);
  const [userScoresArray, setUserScoresArray] = useState([]);

  async function getAllScores() {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores",
        { headers: { Authorization: "Bearer " + token } }
      );
      setAllScoresArray(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserScores() {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/scores/user_score",
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

  return (
    <ScoreContext.Provider
      value={{
        getAllScores,
        renderScores,
        allScoresArray,
        setAllScoresArray,
        getUserScores,
        userScoresArray,
        setUserScoresArray,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
export { ScoreContext };