package in.ynt.shop.app.repository;

import in.ynt.shop.app.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends JpaRepository<AppUser, Integer> {

    public Optional<AppUser> findByEmail(String email);
}
