package com.animeworld.onlinestream.repository;

import java.util.Optional;

import org.json.simple.JSONObject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.animeworld.onlinestream.model.VideoDetails;

public interface VideoRepo extends JpaRepository<VideoDetails,Integer> {
    
    public Optional<VideoDetails>findByAnimeName(String animeName);

    @Query(value = "SELECT animeid, animename, video_type FROM videos where anime = :animename", nativeQuery = true)
    public Iterable<JSONObject> getAllIterableVideos(String animename);
}
