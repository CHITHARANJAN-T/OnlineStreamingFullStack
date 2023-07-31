import { useNavigate } from 'react-router-dom';
import  './Home.css';

import React, { useEffect, useState } from 'react'


export default function Home(props) {
    
    const navigate = useNavigate()
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/animeworld/animes")
        .then(response => response.json())
        .then(data => setAnimes(data))
    }, [])

    return (
        <>
            <div className="home-container">
                <div className="anime-trending">
                    <h2 className='section-title'>Trending</h2>
                    <div className="anime-lists">

                        {
                            animes?.map((anime, id) => (
                                <div key={id} className="anime-card" style={{ backgroundImage: `url(http://localhost:8080/api/animeworld/getimage/${anime?.imageName})` }} onClick={() => navigate(`/anime/${anime?.anime}/episode-1`)} >
                                    <div className="anime-dark-overlay" />
                                    <div className="anime-content">
                                        <div className="anime-name">{ anime?.anime }</div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
