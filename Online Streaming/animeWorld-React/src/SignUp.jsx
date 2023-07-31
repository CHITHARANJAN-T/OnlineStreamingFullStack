import { useEffect, useState } from 'react'
import './SignUp.css'

export default function SignUp({ setsignUpPage, signUpPage, setLoginPage }){

    const [signUpUser, setSignUpUser] = useState({})

    useEffect(() => {
        const signup = document.querySelector(".signup-container")
        signUpPage ? signup.classList.add("show") : signup.classList.remove("show")
    }, [signUpPage])

    const handleChange = (e) => {
        setSignUpUser({...signUpUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(signUpUser);

        fetch("http://localhost:8080/api/animeworld/createuser", {
            method: 'post',
            body: JSON.stringify(signUpUser),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(data => {
            console.log(data)

            if (data.status === 200){
                setsignUpPage(false)
                setLoginPage(true)
            }
        })
    }

    return <>
        
        <div className="signup-container">
           <div className="signup-tab">
                <div onClick={() => setsignUpPage(false)} className="signup-close-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                </div>
                <h5 className="signup-header-h">Welcome To AnimeWorld!</h5>
                <div className="signup-content">
                    <form className='signup-input-form' onSubmit={handleSubmit} >
                        <div className="signup-input-div">
                            <label htmlFor='username' className='signup-input-label' >username</label>
                            <input name='username' type="username" className="signup-input" onChange={handleChange} placeholder='username' />
                        </div> 
                        <div className="signup-input-div">
                            <label htmlFor='email' className='signup-input-label' >email address</label>
                            <input name='email' type="email" className="signup-input" onChange={handleChange} placeholder='name@email.com' />
                        </div> 
                        <div className="signup-input-div">
                            <label htmlFor='password' className='signup-input-label' >password</label>
                            <input id='signup-password' name='password' type="password" className="signup-input" onChange={handleChange} placeholder='Password' />
                        </div>
                        <div className="signup-show-pswd">
                            <input onClick={ () => {
                                const password = document.getElementById('signup-password')
                                password.type = (password.type === 'password') ? 'text' : 'password'
                            }} type="checkbox" name="show-password" id="signup-show-pswd-check" />
                            <label htmlFor="show-password" onClick={ () => {document.getElementById("signup-show-pswd-check").click()}} className="signup-check-label">show password</label>
                        </div>
                        <button className='signup-button' type="submit">signup</button>
                    </form>
                </div>
                <div className="signup-redirect">
                    <span>Already have an account?</span>
                    <a href="" onClick={(e) => {
                        e.preventDefault()
                        setsignUpPage(false)
                        setLoginPage(true)
                    }} className="redirect">login</a>
                </div>
           </div>
        </div>
        
    </>
}