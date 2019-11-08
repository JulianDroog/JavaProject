package be.thomasmore.dealersservice.repository;

import be.thomasmore.dealersservice.entity.Dealer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DealerRepository extends MongoRepository<Dealer, String> {

    List<Dealer> findAllDealerById(@Param("id") Integer id);
}
