package in.ynt.shop.app.serviceImpl;

import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.exception.UserNotFoundException;
import in.ynt.shop.app.model.Profile;
import in.ynt.shop.app.repository.AppUserRepository;
import in.ynt.shop.app.service.ProfileService;
import in.ynt.shop.app.util.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProfileServiceImpl implements ProfileService {


    private final JwtUtil jwtUtil;
    private final AppUserRepository appUserRepository;

    public ProfileServiceImpl(JwtUtil jwtUtil, AppUserRepository appUserRepository) {
        this.jwtUtil = jwtUtil;
        this.appUserRepository = appUserRepository;
    }

    @Override
    public Profile getProfile(String token) {
        try {
            String email = jwtUtil.getUsername(token);
            if (email == null || email.isEmpty()) {
                log.error("No email or username found for token {}", token);
            }
            AppUser appUser = appUserRepository.findByEmail(email).orElse(null);
            if (appUser == null) {
                log.error("User not found for token {}", token);
                throw new UserNotFoundException("User not found for token");
            }
            else{
                return Profile.builder()
                        .firstName(appUser.getFirstName())
                        .lastName(appUser.getLastName())
                        .email(appUser.getEmail())
                        .addressList(appUser.getAddresses())
                        .build();
            }
        } catch (Exception e) {
            log.error("Error while fetching profile details - {}",e.getMessage());
            return null;
        }
    }
}
