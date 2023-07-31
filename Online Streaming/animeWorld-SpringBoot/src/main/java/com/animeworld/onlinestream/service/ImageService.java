package com.animeworld.onlinestream.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.animeworld.onlinestream.model.ImageDetails;
import com.animeworld.onlinestream.repository.ImageRepo;
import com.animeworld.onlinestream.util.ImageCompress;

@Service
public class ImageService {
    @Autowired
    private ImageRepo imageRepo;

    public byte[] retriveImage(String imageName){
        Optional<ImageDetails> image = imageRepo.findByImageName(imageName);
        if(image.isPresent()){
            return ImageCompress.decompressImage(image.get().getImage());
        }
        return null;
    }

    public Iterable<ImageDetails> getAll() {
        return imageRepo.findAll();
    }

    public Boolean uploadImage(ImageDetails imageDetails){
        imageRepo.save(imageDetails);
        return true;
    }
}
