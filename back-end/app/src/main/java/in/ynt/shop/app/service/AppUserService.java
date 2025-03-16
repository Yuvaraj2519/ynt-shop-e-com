package in.ynt.shop.app.service;

import in.ynt.shop.app.entity.AppUser;

import java.util.List;

public interface AppUserService {

    List<AppUser> findAll();
    AppUser findById(int id);
    AppUser save(AppUser appUser);
}
