package com.example.Security.Service.Config;

import com.example.Security.Service.DTO.ResourcePersonDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "RESOURCE-PERSON-SERVICE", path = "/resource-persons")
public interface ResourcePersonFeignClient {
    
    @PostMapping
    ResourcePersonDTO registerResourcePerson(@RequestBody ResourcePersonDTO resourcePersonDTO);
}
