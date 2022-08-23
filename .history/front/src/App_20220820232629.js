import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
      eqwewq
    </div>
  );
}

export default App;
