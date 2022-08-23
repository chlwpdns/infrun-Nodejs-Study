import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Register from './components/views/Register/Register';
import Auth from './hoc/auth';

// Auth로 컴포넌트를 감싸줌
function App() {
  const AuthenticPage = Auth(LandingPage, null, false);
  const Login = Auth(LoginPage, false);
  const RegisterPage = Auth(Register, false);

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AuthenticPage />} />
        <Route path='/login' element={Login} />
        <Route path='/register' element={RegisterPage} />
      </Routes>
    </div>
  );
}

export default App;
