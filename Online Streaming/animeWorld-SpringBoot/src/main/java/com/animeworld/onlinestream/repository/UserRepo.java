package com.animeworld.onlinestream.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.animeworld.onlinestream.model.UserDetails;

public interface UserRepo extends JpaRepository<UserDetails,Integer>{
    public Optional<UserDetails> findByEmailAndPassword(String email, String password);

    public Optional<UserDetails> findByEmail(String email);
}
