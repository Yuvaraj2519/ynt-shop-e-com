package in.ynt.shop.app.controller;

import in.ynt.shop.app.constants.APIEndpoints;
import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(APIEndpoints.USER)
@RequiredArgsConstructor
public class AppUserController {

    private final AppUserService appUserService;

    @GetMapping(APIEndpoints.All_USERS)
    public List<AppUser> getAllUsers() {
        return appUserService.findAll();
    }

    @PostMapping(APIEndpoints.CREATE_USER)
    public AppUser createUser(@RequestBody AppUser appUser) {
        return appUserService.save(appUser);
    }

    @GetMapping(APIEndpoints.FIND_USER)
    public AppUser findUser(@RequestParam int userId) {
        return appUserService.findById(userId);
    }
}
