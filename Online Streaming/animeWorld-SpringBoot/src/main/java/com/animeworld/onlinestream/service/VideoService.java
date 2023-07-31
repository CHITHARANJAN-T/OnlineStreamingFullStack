package com.animeworld.onlinestream.service;

import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.animeworld.onlinestream.model.VideoDetails;
import com.animeworld.onlinestream.repository.VideoRepo;
import com.animeworld.onlinestream.util.VideoCompress;

@Service
public class VideoService {
    @Autowired
    VideoRepo videoRepo;

    public byte[] retriveVideo(String animeName){
        Optional<VideoDetails> video = videoRepo.findByAnimeName(animeName);
        if(video.isPresent()){
            return VideoCompress.decompressVideo(video.get().getVideo());
        }
        return null;
    }

    public Iterable<JSONObject> getAllVideos(String animename) {
        return videoRepo.getAllIterableVideos(animename);
    }

    public void uploadVideo(VideoDetails videoDetails){
        videoRepo.save(videoDetails);
    }
}
