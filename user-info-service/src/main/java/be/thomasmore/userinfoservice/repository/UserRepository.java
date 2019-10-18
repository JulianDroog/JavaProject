package be.thomasmore.userinfoservice.repository;
import be.thomasmore.userinfoservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByNaam(@Param("naam") String naam);
}
