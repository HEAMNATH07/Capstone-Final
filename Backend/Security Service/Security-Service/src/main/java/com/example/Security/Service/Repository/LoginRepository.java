package com.example.Security.Service.Repository;


//import com.ust.Login_service.model.Login;

import com.example.Security.Service.Model.LoginDetails;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LoginRepository extends MongoRepository<LoginDetails,String> {
    @Query("{ 'userId' : ?0 }")
    Optional<LoginDetails> findByUserId(String userId);
}
