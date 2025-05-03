package in.ynt.shop.app.serviceImpl;

import in.ynt.shop.app.entity.AppUser;
import in.ynt.shop.app.repository.AppUserRepository;
import in.ynt.shop.app.service.AppUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;

    @Override
    public List<AppUser> findAll() {
        return appUserRepository.findAll();
    }

    @Override
    public AppUser findById(int id) {
        return appUserRepository.findById(id).orElse(null);
    }

    @Override
    public AppUser save(AppUser appUser) {
        return appUserRepository.save(appUser);
    }
}
