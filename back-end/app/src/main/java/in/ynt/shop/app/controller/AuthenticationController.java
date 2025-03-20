package in.ynt.shop.app.controller;

import in.ynt.shop.app.dto.LoginDTO;
import in.ynt.shop.app.dto.RegisterDTO;
import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterDTO registerDTO) {
        return ResponseEntity.ok(authenticationService.registerUser(registerDTO));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginDTO loginDTO) {
        return ResponseEntity
                .ok(authenticationService.authenticate(loginDTO));
    }

}
