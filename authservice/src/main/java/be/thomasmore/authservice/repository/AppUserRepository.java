package be.thomasmore.authservice.repository;

import be.thomasmore.authservice.models.AppUser;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppUserRepository extends MongoRepository<AppUser, String> {

    Boolean existsAppUserByUsernameEquals(String userName);
    AppUser findByUsernameEquals(String userName);
}