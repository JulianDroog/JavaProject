package be.thomasmore.autoservice.repository;

import be.thomasmore.autoservice.entity.Auto;
import com.sun.corba.se.spi.ior.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AutoRepository extends MongoRepository<Auto, String> {
    Auto getCarBy_id(@Param("_id") String _id);
    List<Auto> getCarsByUserId(@Param("userId") Integer userId);
}
