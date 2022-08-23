import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';
import Auth from './hoc/auth';

// Auth로 컴포넌트를 감싸줌
function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <div>
      <Routes>
        <Route path='/' element={<AuthenticPage />} />
        <Route path='/login' element={Login} />
        <Route path='/register' element={RegisterPage} />
      </Routes>
    </div>
  );
}

export default App;
