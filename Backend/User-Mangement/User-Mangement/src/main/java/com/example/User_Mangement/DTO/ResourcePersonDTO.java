package com.example.User_Mangement.DTO;

public class ResourcePersonDTO {
    private String id;
    private String name;
    private String email;
    private String role;
    private String password;
    private String contactInfo;
    private boolean isAvailable;
    private String department;

    public ResourcePersonDTO() {
    }

    public ResourcePersonDTO(String id, String name, String email, String role, String password, String contactInfo, boolean isAvailable, String department) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;
        this.contactInfo = contactInfo;
        this.isAvailable = isAvailable;
        this.department = department;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}