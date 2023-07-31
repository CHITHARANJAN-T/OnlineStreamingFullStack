package com.animeworld.onlinestream.controller;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.animeworld.onlinestream.model.ImageDetails;
import com.animeworld.onlinestream.model.UserDetails;
import com.animeworld.onlinestream.model.VideoDetails;
import com.animeworld.onlinestream.service.ImageService;
import com.animeworld.onlinestream.service.UserService;
import com.animeworld.onlinestream.service.VideoService;
import com.animeworld.onlinestream.util.ImageCompress;
import com.animeworld.onlinestream.util.VideoCompress;

@RestController
@CrossOrigin
@RequestMapping("/api/animeworld")
public class AppController {
    @Autowired
    private UserService userService;

    @Autowired
    private VideoService videoService;

    @Autowired
    private ImageService imageService;

    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public UserDetails getDetails(@RequestBody UserDetails user){
        return userService.getDetails(user);
    }

    @PostMapping(value = "/createuser", produces = "application/json")
    public boolean createUser(@RequestBody UserDetails userDetails){
        System.out.println(userDetails);
       return userService.createUser(userDetails);
    }

    @PutMapping("/updateuser/{userId}")
    public boolean updateUser(@RequestBody UserDetails userDetails,@PathVariable int userId){

        return userService.updateUser(userDetails,userId);
    }

    @DeleteMapping("/deleteuser/{userId}")
    public boolean deleteUser(@PathVariable(name="userId")int userId){
        return userService.deleteUser(userId);
    }

    // VIDEO DETAILS

    @GetMapping(value = "/getvideos/{animename}", produces = "application/json")
    public Iterable<JSONObject> getAllVideos(@PathVariable String animename) {
        return videoService.getAllVideos(animename);
    }

    @GetMapping(value="/getvideo/{videoname}",produces = "video/webm")
    public ResponseEntity<?> retriveVideo(@PathVariable String videoname){
        
        return ResponseEntity.status(HttpStatus.OK).body(videoService.retriveVideo(videoname));
    }

    @PostMapping("/uploadvideo")
    public Boolean uploadVideo(@RequestParam("video") MultipartFile File, @RequestParam String anime ){
        try {
            VideoDetails v = new VideoDetails(File.getOriginalFilename().split("[.]")[0],
            VideoCompress.compressVideo(File.getBytes()), File.getContentType());

            v.setAnime(anime);

            videoService.uploadVideo(v);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    // @GetMapping("/getbuffer")

    //Image

    @GetMapping(value = "/animes",produces="application/json")
    public Iterable<ImageDetails> getAllAnimes() {
        return imageService.getAll();
    }

    @GetMapping(value = "/getimage/{imageName}",produces="image/jpg")
    public ResponseEntity<?> retriveImage(@PathVariable String imageName){
        return ResponseEntity.ok(imageService.retriveImage(imageName));
    }

    @PostMapping("/uploadimage")
        public Boolean uploadImage(@RequestParam("image") MultipartFile File, @RequestParam String anime ){
            try {
            ImageDetails i = new ImageDetails(anime, File.getOriginalFilename(),
            ImageCompress.compressImage(File.getBytes()), File.getContentType());
            imageService.uploadImage(i);
            return true;
        } catch (IOException e) {
            return false;
        }
        
    }

}
