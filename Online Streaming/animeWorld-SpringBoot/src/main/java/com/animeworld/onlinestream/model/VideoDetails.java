package com.animeworld.onlinestream.model;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;


@Entity
@Table(name="videos")
public class VideoDetails{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "animeid", nullable = false)
    private int animeId;

    @Column(name = "animename")
    private String animeName;

    private String anime;

    @Lob
    @Column(name="video",length = 2139095040)
    @JsonIgnore
    private byte[]  video;

    private String videoType;

    public VideoDetails() {
    }

    public VideoDetails(String animeName, byte[] video, String videoType) {
        this.animeName = animeName;
        this.video = video;
        this.videoType = videoType;
    }

    public int getAnimeId() {
        return animeId;
    }

    public void setAnimeId(int animeId) {
        this.animeId = animeId;
    }

    public String getAnimeName() {
        return animeName;
    }

    public void setAnimeName(String animeName) {
        this.animeName = animeName;
    }   

    @JsonIgnore
    public byte[] getVideo() {
        return video;
    }

    public void setVideo(byte[] video) {
        this.video = video;
    }

    public String getVideoType() {
        return videoType;
    }

    public void setVideoType(String videoType) {
        this.videoType = videoType;
    }

    public String getAnime() {
        return anime;
    }

    public void setAnime(String anime) {
        this.anime = anime;
    }

    @Override
    public String toString() {
        return "VideoDetails [animeId=" + animeId + ", animeName=" + animeName + ", anime=" + anime + ", video="
                + Arrays.toString(video) + ", videoType=" + videoType + "]";
    }    
}