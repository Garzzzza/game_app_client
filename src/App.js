import "./App.css";
import NavBar from "./Components/NavBar";
import AuthContextProvider from "./Context/AuthContext";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import ScoresPage from "./Pages/ScorePage";
import ScoreContextProvider from "./Context/ScoreContext";
import IGame from "./Pages/IGame";
import KGame from "./Pages/KGame";
import PokeTanksPage from "./Components/PokeTanksPage/PokeTanksPage";
import GameBoard from "./Components/GameBoard/GameBoard";

function App() {
  return (
    <AuthContextProvider>
      <ScoreContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/scores" element={<ScoresPage />} />
            <Route path="/igame" element={<PokeTanksPage />} />
            <Route path="/kgame" element={<KGame />} />
            <Route path="/poketanksgame" element={<GameBoard />} />
          </Routes>
        </div>
      </ScoreContextProvider>
    </AuthContextProvider>
  );
}

export default App;
