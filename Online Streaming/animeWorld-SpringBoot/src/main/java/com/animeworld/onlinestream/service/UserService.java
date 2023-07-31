package com.animeworld.onlinestream.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.animeworld.onlinestream.model.UserDetails;
import com.animeworld.onlinestream.repository.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public UserDetails getDetails(UserDetails user){
        Optional<UserDetails> getUser = userRepo.findByEmailAndPassword(user.getEmail(), user.getPassword());

        if(getUser.isPresent()) return getUser.get();
        return null;
    }

    public boolean createUser(UserDetails userDetails){

        try {
            userRepo.save(userDetails);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public boolean updateUser(UserDetails userDetails,int userId){

        Optional<UserDetails> user = userRepo.findById(userId);
        // System.out.println(userDetails.getUsername());

        if(user.isPresent()){
            UserDetails u = user.get();
            if(userDetails.getEmail() != null)
            u.setEmail(userDetails.getEmail());

            if(userDetails.getPassword() != null)
            u.setPassword(userDetails.getPassword());

            if(userDetails.getUsername() != null)
            u.setUsername(userDetails.getUsername());

            userRepo.save(u);
            return true;
        }
        else{
            return false;
        }
    }

    public boolean deleteUser(int userId){
       userRepo.deleteById(userId);
       if(userRepo.findById(userId).isPresent())
       return false;
       else
       return true;
    }


}
