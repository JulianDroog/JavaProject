package be.thomasmore.autoservice.repository;

import be.thomasmore.autoservice.entity.Auto;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AutoRepository extends MongoRepository<Auto, String> {
    List<Auto> findAutoByUserId(@Param("userId") Integer userId);
}
