package com.example.Security.Service.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResourcePersonDTO {
    private String id;
    private String name;
    private String email;
    private String role;
    private String password;
    private String contactInfo;
    private boolean isAvailable;
    private String department;
}
