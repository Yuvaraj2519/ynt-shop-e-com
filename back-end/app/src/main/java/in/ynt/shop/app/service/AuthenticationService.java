package in.ynt.shop.app.service;

import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.model.RegisterResponse;
import in.ynt.shop.app.requestDTO.LoginDTO;
import in.ynt.shop.app.requestDTO.RegisterDTO;

public interface AuthenticationService {
    RegisterResponse registerUser(RegisterDTO registerDTO);
    AuthenticationResponse authenticate(LoginDTO loginDTO);
}
