import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';
import Auth from './hoc/auth';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={Auth(<LandingPage />)} />
        <Route path='/login' element={Auth()<LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
