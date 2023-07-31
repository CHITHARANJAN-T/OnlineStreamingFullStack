import './NavBar.css'
import logo from './logo-name.png'
import {useNavigate} from 'react-router-dom'
import React from 'react'

export default function NavBar({ setLoginPage, setsignUpPage,setProfilePage }) {

    // let navNavigator = useNavigate();

    const showLogin = (e) => {
        e.preventDefault()
        setLoginPage(true)
    }
    

    const showSignup = (e) => {
        e.preventDefault()
        setsignUpPage(true)
    }
   
    function showProfile(event){
        event.preventDefault();
        setProfilePage(true)
    }

    return (
        <>
            <div className="dpage-home-head">
                <div className="home-head-logo">
                    <a href='/'>
                        <img className='head-logo' src={logo}></img>
                    </a>
                </div>

                <div className="home-head-links">
                    {
                        (() => {
                            if (window.localStorage.getItem("is-login").includes("true")) {
                                return (
                                    <>
                                        <a className='home-head-login' onClick={showProfile} href=''>Profile</a>
                                        <a className='home-head-signup' onClick={()=>{
                                            window.localStorage.setItem("is-login",false)
                                        }} href='/'>Logout</a>
                                    </>
                                )
                            }
                            else {
                                return (
                                    <>
                                        <a className='home-head-login' onClick={showLogin} href=''>Login</a>
                                        <a className='home-head-signup' onClick={showSignup} href=''>SignUp</a>
                                    </>
                                )
                            }
                        })()
                    }
                </div>


            </div>
        </>
    )
}
