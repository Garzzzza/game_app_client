import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import UserScore from "../Components/UserScore";
import { ScoreContext } from "../Context/ScoreContext";

const Home = () => {
  const { getLoggedUser, loggedUser, token } = useContext(AuthContext);
  const { setCurrentScore, currentScore, postScore } = useContext(ScoreContext);

  useEffect(() => {
    getLoggedUser();
    console.log(loggedUser);
  }, []);

  return (
    <div>
      <div className="profile">
        <div>
          <h1>Welcome To The Pokemon Kingdom </h1>
        </div>
        {token && (
          <div>
            <img src={loggedUser.picture} alt="profile picture" />
          </div>
        )}
        {token && (
          <div>
            <h1>{loggedUser.nickname}</h1>
          </div>
        )}
      </div>

      {token && <UserScore />}
      {/* {token && (
        <div>
          <button>Play KGame</button>
        </div>
      )}
      {token && (
        <div>
          <button>Play IGame</button>
        </div>
      )} */}

      <button
        onClick={() => {
          setCurrentScore(7);
        }}
      >
        setScore
      </button>
      <button onClick={() => postScore("kgame")}>postScore</button>
    </div>
  );
};

export default Home;
