import './Profile.css'
// import axios from 'axois'
import React, { useEffect, useState } from 'react'

export default function Profile({ profilePage, setProfilePage}) {
    const [profileUser, setProfileUser] = useState({})

    useEffect(() => {
        const signup = document.querySelector(".profile-container")
        profilePage ? signup.classList.add("show") : signup.classList.remove("show")
    }, [profilePage])

    const handleChange = (e) => {
        setProfileUser({...profileUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const userId = JSON.parse(window.localStorage.getItem("user")).userId
        console.log(userId)
        const url    = `http://localhost:8080/api/animeworld/updateuser/${userId}`

        console.log(profileUser);
        console.log(url);

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(profileUser),
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(data => {
            console.log(data)

            if (data.status === 200){
                setProfilePage(false)
            }
        })
        
    }

    const handleDelete =(e) => {
         e.preventDefault()

         const userId = JSON.parse(window.localStorage.getItem("user")).userId
        console.log(userId)
        const url    = `http://localhost:8080/api/animeworld/deleteuser/${userId}`

        fetch(url, {
            method: 'delete',
        })
        
          .then(data => {
            if(data)
              console.log("User Deleted Successfully")
              localStorage.setItem("is-login",false)  
              window.location.pathname = "/"
          });
    }
    

    return (
        <>
            <div className= "profile-container">
                <div className="profile-tab">
                    <div onClick={() => setProfilePage(false) } className="profile-close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </div>
                    <h5 className="profile-header-h">Welcome Chief!</h5>
                    <div className="profile-content">
                        <form className='profile-input-form'   >
                            <div className="signup-input-div">
                                <label htmlFor='username' className='signup-input-label' >username</label>
                                <input name='username' type="username" className="signup-input" onChange={handleChange} placeholder='username' />
                            </div>
                            <div className="profile-input-div">
                                <label htmlFor='email' className='profile-input-label' >email address</label>
                                <input name='email' type="email" className="profile-input" onChange={handleChange} placeholder='name@email.com' />
                            </div> 
                            <div className="profile-input-div">
                                <label htmlFor='password' className='profile-input-label' >password</label>
                                <input id='password' name='password' type="password" className="profile-input" onChange={handleChange} placeholder='Password' />
                            </div>
                           
                            
                        </form>
                            <div className="profile-update">
                            <button className='profile-button-update' onClick={handleSubmit}>Update</button>
                            <button className='profile-button-delete' onClick={handleDelete}>Delete</button>
                            </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
