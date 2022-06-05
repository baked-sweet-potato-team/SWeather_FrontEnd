// main
import './App.css';

// import react-router-dom
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import MainPage from './pages/MainPage/MainPage';
import MyPage from './pages/MyPage/MyPage';
import PersonalColorPage from './pages/PersonalColorPage/PersonalColorPage';
import Auth from './hoc/auth';

function App() {

  const AuthMainPage = Auth(MainPage, null);
  const AuthLoginPage = Auth(LoginPage, false);
  const AuthRegisterPage = Auth(RegisterPage, false);
  const AuthPersonalColorPage = Auth(PersonalColorPage, true);
  const AuthMyPage = Auth(MyPage, null);

  return (

    // 라우팅 처리
    <Router>
      <Routes>
        <Route path="/" element={<AuthMainPage/>} />
        <Route path="/login" element={<AuthLoginPage/>} />
        <Route path="/register" element={<AuthRegisterPage/>} />
        <Route path="/my" element={<AuthMyPage/>} />
        <Route path="/personal" element={<AuthPersonalColorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;