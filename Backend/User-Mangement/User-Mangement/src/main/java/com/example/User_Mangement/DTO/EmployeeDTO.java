package com.example.User_Mangement.DTO;

public class EmployeeDTO {
    private String id;
    private String name;
    private String email;
    private String projectId;
    private String vehicleType;
    private String password;
    private String role;

    public EmployeeDTO() {
    }

    public EmployeeDTO(String id, String name, String email, String projectId, String vehicleType, String password, String role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.projectId = projectId;
        this.vehicleType = vehicleType;
        this.password = password;
        this.role = role;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}