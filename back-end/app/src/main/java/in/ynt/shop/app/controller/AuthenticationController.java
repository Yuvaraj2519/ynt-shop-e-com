package in.ynt.shop.app.controller;

import in.ynt.shop.app.constants.APIEndpoints;
import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.model.ErrorResponse;
import in.ynt.shop.app.requestDTO.LoginDTO;
import in.ynt.shop.app.requestDTO.RegisterDTO;
import in.ynt.shop.app.model.AuthenticationResponse;
import in.ynt.shop.app.model.RegisterResponse;
import in.ynt.shop.app.responseDTO.ResponseDTO;
import in.ynt.shop.app.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@Validated
@RestController
@RequestMapping(APIEndpoints.AUTH)
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping(APIEndpoints.REGISTER)
    public ResponseEntity<?> register(@Valid @RequestBody RegisterDTO registerDTO) {

        RegisterResponse response = authenticationService.registerUser(registerDTO);

        if(!Objects.equals(response.getStatus(), Status.SUCCESS)) {
            ResponseDTO<ErrorResponse> responseDTO = getErrorResponse(response.getStatus(), response.getMessage());
            return ResponseEntity.badRequest()
                    .body(responseDTO);
        }
        else {
            ResponseDTO<RegisterResponse> responseDTO = new ResponseDTO<>();
            responseDTO.setSource("Front end");
            responseDTO.setStatus(response.getStatus());
            responseDTO.setResponseData(response);

            return ResponseEntity.ok()
                    .body(responseDTO);
        }
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @PostMapping(APIEndpoints.LOGIN)
    public ResponseEntity<?> login(@Valid @RequestBody LoginDTO loginDTO) {

        AuthenticationResponse authenticationResponse = authenticationService
                .authenticate(loginDTO);
        if(!Objects.equals(authenticationResponse.getStatus(), Status.SUCCESS)) {
            ResponseDTO<ErrorResponse> responseDTO = getErrorResponse(authenticationResponse.getStatus(),
                    authenticationResponse.getMessage());
            return ResponseEntity.badRequest()
                    .body(responseDTO);
        }

        else {
            ResponseDTO<AuthenticationResponse> responseDTO = new ResponseDTO<>();
            responseDTO.setSource("Front end");
            responseDTO.setStatus(authenticationResponse.getStatus());
            responseDTO.setResponseData(authenticationResponse);

            return ResponseEntity.ok()
                    .body(responseDTO);
        }
    }

    private ResponseDTO<ErrorResponse> getErrorResponse(String status, String message) {
            ErrorResponse errorResponse = new ErrorResponse();
            errorResponse.setErrorCategory("Server Error");
            errorResponse.setErrorCode(500);
            errorResponse.setErrorMessage(message);

            ResponseDTO<ErrorResponse> responseDTO = new ResponseDTO<>();
            responseDTO.setSource("Front end");
            responseDTO.setStatus(status);
            responseDTO.setErrors(errorResponse);
            return responseDTO;
    }
}
