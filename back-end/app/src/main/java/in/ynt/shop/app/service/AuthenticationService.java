package in.ynt.shop.app.service;

import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.requestDTO.LoginDTO;
import in.ynt.shop.app.requestDTO.RegisterDTO;
import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.model.RegisterResponse;
import in.ynt.shop.app.repository.AppUserRepository;
import in.ynt.shop.app.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final AppUserRepository appUserRepository;

    public RegisterResponse registerUser(RegisterDTO registerDTO) {
        AppUser appUser = AppUser.builder()
                .firstName(registerDTO.getFirstName())
                .lastName(registerDTO.getLastName())
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .build();
        try {
            appUserRepository.save(appUser);
            log.info("User {} registered successfully", registerDTO.getEmail());
        } catch (Exception e) {
            log.error("Error in saving user - {}", e.getMessage());
            return RegisterResponse.builder()
                    .status(Status.FAILURE)
                    .message(e.getMessage())
                    .build();
        }
        return RegisterResponse.builder()
                .status(Status.SUCCESS)
                .message(appUser.getEmail()+" has been registered successfully")
                .build();
    }

    public AuthenticationResponse authenticate(LoginDTO loginDTO) {
        try{
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword())
            );
        } catch (BadCredentialsException e) {
            log.error("Error while authenticating user - {}", e.getMessage());
            AppUser appUser = appUserRepository.findByEmail(loginDTO.getEmail()).orElse(null);
            if(Objects.isNull(appUser)){
                return AuthenticationResponse.builder()
                        .status(Status.FAILURE)
                        .message("User not found")
                        .token("")
                        .build();
            }
            return AuthenticationResponse.builder()
                    .status(Status.ERROR)
                    .message("Bad credentials ")
                    .token("")
                    .build();
        }
        AppUser appUser = appUserRepository.findByEmail(loginDTO.getEmail()).orElse(null);

        String token = jwtUtil.generateToken(appUser);
        log.info("User {} authenticated successfully and token generated", appUser.getEmail());
        return AuthenticationResponse.builder()
                .status(Status.SUCCESS)
                .message("User authenticated successfully")
                .token(token)
                .expires(jwtUtil.getExpirationDate(token))
                .build();
    }
}
