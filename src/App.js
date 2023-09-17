import './App.css';
import NavBar from './Components/NavBar';
import AuthContextProvider from './Context/AuthContext';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AuthContextProvider>

  );
}

export default App;
