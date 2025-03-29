package in.ynt.shop.app.controller;

import in.ynt.shop.app.constants.APIEndpoints;
import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.dto.LoginDTO;
import in.ynt.shop.app.dto.RegisterDTO;
import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.model.RegisterResponse;
import in.ynt.shop.app.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping(APIEndpoints.AUTH)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(APIEndpoints.REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterDTO registerDTO) {

        RegisterResponse response = authenticationService.registerUser(registerDTO);

        if(!Objects.equals(response.getStatus(), Status.SUCCESS)) {
            return ResponseEntity.badRequest()
                    .body(response);
        }
        return ResponseEntity.ok()
                .body(response);
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @PostMapping(APIEndpoints.LOGIN)
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginDTO loginDTO) {

        AuthenticationResponse authenticationResponse = authenticationService
                .authenticate(loginDTO);

        if(!Objects.equals(authenticationResponse.getStatus(), Status.SUCCESS)) {
            return ResponseEntity.badRequest()
                    .body(authenticationResponse);
        }
        return ResponseEntity
                .ok(authenticationResponse);
    }

}
