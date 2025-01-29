package com.example.Security.Service.Config;


import com.example.Security.Service.DTO.EmployeeDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "employee-service", path = "/employees")
public interface EmployeeFeignClient {
    @PostMapping("/register")
    EmployeeDTO registerEmployee(@RequestBody EmployeeDTO employeeDTO);
}
