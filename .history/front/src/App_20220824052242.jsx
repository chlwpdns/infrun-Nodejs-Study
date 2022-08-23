import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Register/Register';
import Auth from './hoc/auth';
// Auth로 컴포넌트를 감싸줌
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} /> */}
        <Route exact path='/' component={Auth(LandingPage, null)} />
        <Route exact path='/login' component={Auth(LoginPage, false)} />
        <Route exact path='/register' component={Auth(RegisterPage, false)} />
      </Routes>
    </div>
  );
}

export default App;
