import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Register/Register';
import Auth from './hoc/auth';
// Auth로 컴포넌트를 감싸줌
export default function App() {
  const AuthLandingPage = Auth(LandingPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Auth SpecificComponent={LandingPage} option={null} />}
        />

        <Route
          path='/login'
          element={<Auth SpecificComponent={LoginPage} option={false} />}
        />
        <Route
          path='/register'
          element={<Auth SpecificComponent={RegisterPage} option={false} />}
        />
        {/* <Route path='/' element={<LandingPage />} /> */}
        {/* <Route path='/login' element={<LoginPage />} /> */}
        {/* <Route path='/register' element={<RegisterPage />} /> */}
      </Routes>
    </div>
  );
}
