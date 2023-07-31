import './App.css';
import React, { useEffect, useState } from 'react';
import DefaultPage from './defaultPage';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import Login from './Login';
import SignUp from './SignUp';
import VideoPlayer from './videoPlayer';
import Profile from './Profile';

function App() {

  const newUser = JSON.parse(localStorage.getItem("user") === undefined ? "{}" : localStorage.getItem("user"))
  const login = JSON.parse(localStorage.getItem("is-login") === undefined ? false : localStorage.getItem("is-login"))

  const [loginPage, setLoginPage] = useState(false)
  const [signUpPage, setsignUpPage] = useState(false)
  const [profilePage,setProfilePage] = useState(false)

  const [user, setUser] = useState((newUser === null || newUser === undefined) ? {} : newUser)
  const [isLogin, setIsLogin] = useState((login === null || login === undefined) ? false : login)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])

  useEffect(() => {
    localStorage.setItem("is-login", JSON.stringify(isLogin))
  }, [isLogin])

  return (
    <>
      <Login setUser={setUser} setIsLogin={setIsLogin} setLoginPage={setLoginPage} loginPage={loginPage} setsignUpPage={setsignUpPage} />
      <SignUp setsignUpPage={setsignUpPage} setLoginPage={setLoginPage} signUpPage={signUpPage} />
      <Profile profilePage={profilePage} setProfilePage={setProfilePage}/>

      <NavBar setLoginPage={setLoginPage} setsignUpPage={setsignUpPage} setProfilePage={setProfilePage}/>

      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <DefaultPage loginPage={loginPage} setLoginPage={setLoginPage} signUpPage={signUpPage} setsignUpPage={setsignUpPage} /> } />
            <Route path='/anime' element={ <Home /> } />
            <Route path='/anime/:anime/:episode' element={ <VideoPlayer /> } />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
