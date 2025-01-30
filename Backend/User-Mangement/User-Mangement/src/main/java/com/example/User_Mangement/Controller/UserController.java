package com.example.User_Mangement.Controller;

import com.example.User_Mangement.Config.EmployeeFeignClient;
import com.example.User_Mangement.Config.ResourcePersonFeignClient;
import com.example.User_Mangement.DTO.*;
import com.example.User_Mangement.Entity.UserInfo;
import com.example.User_Mangement.Repository.UserRepository;
import com.example.User_Mangement.Service.UserService;
import com.example.User_Mangement.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private EmployeeFeignClient employeeFeignClient;

    @Autowired
    private ResourcePersonFeignClient resourcePersonFeignClient;

    @PostMapping("/registeremployee")
    public ResponseEntity<EmployeeDTO> register(@RequestBody EmployeeDTO employeeDTO) {
        EmployeeDTO registeredEmployee = employeeFeignClient.registerEmployee(employeeDTO);
        return ResponseEntity.ok(registeredEmployee);
    }


    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserInfo userInfo) {
        try {
            userService.registerUser(userInfo);
            return ResponseEntity.ok("UserInfo registered successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/register-resource-person")
    public ResponseEntity<ResourcePersonDTO> registerResourcePerson(@RequestBody ResourcePersonDTO resourcePersonDTO) {
        ResourcePersonDTO registeredResourcePerson = resourcePersonFeignClient.registerResourcePerson(resourcePersonDTO);
        return ResponseEntity.ok(registeredResourcePerson);
    }

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        // Authenticate the user
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(), authenticationRequest.getPassword())
        );

        // Fetch user details from the database
        UserInfo loginDetails = userRepository.findByEmail(authenticationRequest.getEmail())
                .orElseThrow(() -> new Exception("User not found with UserId: " + authenticationRequest.getEmail()));

        // Generate JWT with role, region, or storeId based on role
        final String jwt = jwtUtil.generateToken(
                loginDetails.getUsername(),
                loginDetails.getRole(),
                loginDetails.getEmail(),
                loginDetails.getUserId()

        );

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
    @GetMapping("/active")
    public List<UserInfo> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserInfo> getUserById(@PathVariable Long id) {
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody UserInfo updatedUserInfo) {
        try {
            userService.updateUser(id, updatedUserInfo);
            return ResponseEntity.ok("UserInfo updated successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("UserInfo deleted successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/analytics")
    public UserAnalyticsDto getAnalytics() {
        UserAnalyticsDto analytics = new UserAnalyticsDto();
        analytics.setTotalUsers(userService.countAllUsers());
        analytics.setActiveUsers(userService.countActiveUsers());
        return analytics;
    }
}