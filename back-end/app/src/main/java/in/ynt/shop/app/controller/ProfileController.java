package in.ynt.shop.app.controller;

import in.ynt.shop.app.constants.APIEndpoints;
import in.ynt.shop.app.constants.Status;
import in.ynt.shop.app.model.Profile;
import in.ynt.shop.app.responseDTO.ResponseDTO;
import in.ynt.shop.app.serviceImpl.ProfileServiceImpl;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(APIEndpoints.PROFILE)
public class ProfileController {

    private final ProfileServiceImpl profileServiceImpl;

    public ProfileController(ProfileServiceImpl profileServiceImpl) {
        this.profileServiceImpl = profileServiceImpl;
    }

    @GetMapping(APIEndpoints.VIEW_PROFILE)
    public ResponseEntity<?> profile(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        String token = authHeader != null ? authHeader.replace("Bearer ", "") : "";
        log.info("Token present in header: {}", token);
        Profile profile = profileServiceImpl.getProfile(token);
        if (profile == null) {
            return ResponseEntity.notFound().build();
        }
        ResponseDTO<Profile> responseDTO = new ResponseDTO<>();
        responseDTO.setResponseData(profile);
        responseDTO.setStatus(Status.SUCCESS);
        responseDTO.setSource("front end");

        return ResponseEntity.ok(responseDTO);
    }
}
