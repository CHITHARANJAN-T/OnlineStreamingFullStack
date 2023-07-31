package com.animeworld.onlinestream.model;

public class GetVideoDetail {
    private int id;
    private String videoName;

    public GetVideoDetail(int id, String videoName) {
        this.id = id;
        this.videoName = videoName;
    }

    public GetVideoDetail() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getVideoName() {
        return videoName;
    }

    public void setVideoName(String videoName) {
        this.videoName = videoName;
    }

    @Override
    public String toString() {
        return "GetVideoDetail [id=" + id + ", videoName=" + videoName + "]";
    }
}
