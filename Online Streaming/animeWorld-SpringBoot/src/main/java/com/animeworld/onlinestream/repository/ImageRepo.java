package com.animeworld.onlinestream.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.animeworld.onlinestream.model.ImageDetails;

public interface ImageRepo extends JpaRepository<ImageDetails,Integer>{
    public Optional<ImageDetails> findByImageName(String imageName);
}
