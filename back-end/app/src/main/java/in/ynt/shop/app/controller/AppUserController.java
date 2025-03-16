package in.ynt.shop.app.controller;

import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class AppUserController {

    @Autowired
    private AppUserService appUserService;

    @GetMapping("/all-users")
    public List<AppUser> getAllUsers() {
        return appUserService.findAll();
    }

    @PostMapping("/create-user")
    public AppUser createUser(@RequestBody AppUser appUser) {
        return appUserService.save(appUser);
    }

    @GetMapping("/find-user")
    public AppUser findUser(@RequestParam int userId) {
        return appUserService.findById(userId);
    }
}
