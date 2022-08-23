import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/Register/Register';
import Auth from './hoc/auth';
const AuthLandingPage = Auth(LandingPage, null);

// Auth로 컴포넌트를 감싸줌
function App() {


  return (
    <div>
      <Routes>
import LandingPage from './components/views/LandingPage/LandingPage';
        <Route path='/' element=</>} />
        <Route path='/login' element={} />
        <Route path='/register' element={} />
      </Routes>
    </div>
  );
}

export default App;
