import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Register/Register';
import Auth from './hoc/auth';

// Auth로 컴포넌트를 감싸줌
function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <div>
      <Routes>
        <Route path='/' element={< />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<AuthRegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
