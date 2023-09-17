import './App.css';
import NavBar from './Components/NavBar';
import AuthContextProvider from './Context/AuthContext';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Sign from './Pages/Sign';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />

        </Routes>
      </div>
    </AuthContextProvider>

  );
}

export default App;
