package com.example.User_Mangement.Repository;

import com.example.User_Mangement.Entity.UserInfo;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserRepository extends MongoRepository<UserInfo, Long> {
    boolean existsByEmail(String email);

    long countByRole(String user);

     Optional<UserInfo> findByEmail(String email);
     Optional<UserInfo> findByUsername(String username);
}