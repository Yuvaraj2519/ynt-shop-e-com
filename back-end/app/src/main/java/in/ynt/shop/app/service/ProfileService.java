package in.ynt.shop.app.service;

import in.ynt.shop.app.model.Profile;

public interface ProfileService {

    Profile getProfile(String token);
}
