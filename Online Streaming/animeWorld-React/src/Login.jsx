// import { useNavigate } from 'react-router-dom'
import './Login.css'

import React, { useEffect, useState } from 'react'

export default function Login({ setUser, setIsLogin, setLoginPage, loginPage, setsignUpPage }) {

    const [loginUser, setLoginUser] = useState({})

    useEffect(() => {
        const login = document.querySelector(".login-container")
        loginPage ? login.classList.add("show") : login.classList.remove("show")
    }, [loginPage])

    const handleChange = (e) => {
        setLoginUser({...loginUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:8080/api/animeworld/login", {
            method: 'post',
            body: JSON.stringify(loginUser),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(repsonse => repsonse.json())
        .then(data => {

            if (data){
                setUser(data)
                setIsLogin(true)
                setsignUpPage(false)
                setLoginPage(true)
                console.log(data)
                window.location.pathname = "/anime"
            }
        })
    }

    return (
        <>
            <div className={`login-container`}>
                <div className="login-tab">
                    <div onClick={() => setLoginPage(false) } className="login-close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <h5 className="login-header-h">Welcome back!</h5>
                    <div className="login-content">
                        <form className='login-input-form' method='post' onSubmit={handleSubmit} >
                            <div className="login-input-div">
                                <label htmlFor='email' className='login-input-label' >email address</label>
                                <input name='email' type="email" className="login-input" onChange={handleChange} placeholder='name@email.com' />
                            </div> 
                            <div className="login-input-div">
                                <label htmlFor='password' className='login-input-label' >password</label>
                                <input id='password' name='password' type="password" className="login-input" onChange={handleChange} placeholder='Password' />
                            </div>
                            <div className="login-show-pswd">
                                <input onClick={ () => {
                                    const password = document.getElementById('password')
                                    password.type = (password.type === 'password') ? 'text' : 'password'
                                }} type="checkbox" name="show-password" id="show-pswd" />
                                <label htmlFor="show-password" onClick={ () => document.getElementById("show-pswd").click() } className="login-check-label">show password</label>
                            </div>
                            <button className='login-button'>login</button>
                        </form>
                    </div>
                    <div className="login-redirect">
                        <span>Don't have an account?</span>
                        <a href="" onClick={ (e) => {
                            e.preventDefault()
                            setLoginPage(false)
                            setsignUpPage(true)
                        }} className="redirect">sign up</a>
                    </div>
                </div>
            </div>
        </>
    )
}
