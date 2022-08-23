import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
