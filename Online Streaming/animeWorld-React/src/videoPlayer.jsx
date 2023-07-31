import './videoPlayer.css'

import React, { useEffect, useState } from 'react'
import video from './videos/1 X 1.mkv'
import { useNavigate, useParams } from 'react-router-dom'

export default function VideoPlayer(props) {

    const [listVideo, setListVideo] = useState([])
    const { anime, episode } = useParams()
    const navigate = useNavigate()

    const [episodes, setEpisodes] = useState(`${anime.replaceAll(" ","")}${episode.replace("episode-", "")}`)

    useEffect(() => {
        fetch(`http://localhost:8080/api/animeworld/getvideos/${anime}`)
        .then(response => response.json())
        .then(data => {
            setListVideo(data)
        })
    }, [])    
    
    const setVideo = (episode, id) => {
        setEpisodes(episode?.animename)
        navigate(`/anime/${anime}/episode-${id}`)
    }

    useEffect(() => {
        const video = document.getElementById("video")
        video.load()
    }, [episodes])

    return (
        <>
            <div className="player-container">
                <div className="episode-container">
                    {
                        listVideo?.map((episode, id) => (
                            <div key={id} className="list-episodes" onClick={() => {setVideo(episode, (id+1))}}>
                                <div className="episode" >Episode - {id + 1}</div>
                            </div>
                        ))
                    }
                </div>
                <div className="video-player">
                    <video id='video' width="85%" src={`http://localhost:8080/api/animeworld/getvideo/${episodes}`} height="85%" controls autoPlay />
                </div>
            </div>
        </>
    )
}
