package com.example.User_Mangement.Repository;

import com.example.User_Mangement.Entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserInfo, Long> {
    boolean existsByEmail(String email);

    long countByRole(String user);

     Optional<UserInfo> findByEmail(String email);
     Optional<UserInfo> findByUsername(String username);
}