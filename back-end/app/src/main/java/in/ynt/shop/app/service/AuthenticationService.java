package in.ynt.shop.app.service;

import in.ynt.shop.app.dto.LoginDTO;
import in.ynt.shop.app.dto.RegisterDTO;
import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.repository.AppUserRepository;
import in.ynt.shop.app.util.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;
    private final AppUserRepository appUserRepository;

    public AuthenticationService(PasswordEncoder passwordEncoder, JwtUtil jwtUtil, AuthenticationManager authenticationManager, AppUserRepository appUserRepository) {
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
        this.appUserRepository = appUserRepository;
    }

    public AuthenticationResponse registerUser(RegisterDTO registerDTO) {
        AppUser appUser = AppUser.builder()
                .firstName(registerDTO.getFirstName())
                .lastName(registerDTO.getLastName())
                .email(registerDTO.getEmail())
                .password(passwordEncoder.encode(registerDTO.getPassword()))
                .build();
        String token = jwtUtil.generateToken(appUser);
        appUserRepository.save(appUser);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }

    public AuthenticationResponse authenticate(LoginDTO loginDTO) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword())
        );
        AppUser appUser = appUserRepository.findByEmail(loginDTO.getEmail()).orElse(null);
        String token = jwtUtil.generateToken(appUser);
        return AuthenticationResponse.builder()
                .token(token)
                .build();
    }
}
