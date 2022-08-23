import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Register/Register';
import Auth from './hoc/auth';

// Auth로 컴포넌트를 감싸줌
function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  const nav = useNavigate();
  return (
    <div>
      <Routes>
        <Route path='/' element=(AuthLandingPage) />
        <Route path='/login' element={<AuthLoginPage />} />
        <Route path='/register' element={<AuthRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
