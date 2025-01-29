package com.example.Security.Service.Contoller;

//import com.ust.Login_service.model.Login;

import com.example.Security.Service.Config.EmployeeFeignClient;
import com.example.Security.Service.Config.ResourcePersonFeignClient;
import com.example.Security.Service.DTO.AuthenticationRequest;
import com.example.Security.Service.DTO.AuthenticationResponse;
import com.example.Security.Service.DTO.EmployeeDTO;
import com.example.Security.Service.DTO.ResourcePersonDTO;
import com.example.Security.Service.Model.LoginDetails;
import com.example.Security.Service.Repository.LoginRepository;
import com.example.Security.Service.Service.LoginService;
import com.example.Security.Service.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/login")
@CrossOrigin("*")
public class LoginController {
@Autowired
private LoginRepository loginRepository;
    @Autowired
    private LoginService loginService;
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

    @PostMapping("/registeradmin")
    public LoginDetails register(@RequestBody LoginDetails login) {
        return loginService.register(login);
    }
    @PostMapping("/register-resource-person")
    public ResponseEntity<ResourcePersonDTO> registerResourcePerson(@RequestBody ResourcePersonDTO resourcePersonDTO) {
        ResourcePersonDTO registeredResourcePerson = resourcePersonFeignClient.registerResourcePerson(resourcePersonDTO);
        return ResponseEntity.ok(registeredResourcePerson);
    }


    @PostMapping("/authenticates")
    public ResponseEntity<?> createAuthenticationTokens(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUserId(), authenticationRequest.getPassword())
        );


        return ResponseEntity.ok("Login Service");
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        // Authenticate the user
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequest.getUserId(), authenticationRequest.getPassword())
        );

        // Fetch user details from the database
        LoginDetails loginDetails = loginRepository.findByUserId(authenticationRequest.getUserId())
                .orElseThrow(() -> new Exception("User not found with UserId: " + authenticationRequest.getUserId()));

        // Generate JWT with role, region, or storeId based on role
        final String jwt = jwtUtil.generateToken(
                loginDetails.getName(),
                loginDetails.getRole()

        );

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }
}
