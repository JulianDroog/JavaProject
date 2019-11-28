package be.thomasmore.favoriteservice.repository;

import be.thomasmore.favoriteservice.entity.FavoriteCar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin
public interface FavoriteCarRepository extends JpaRepository<FavoriteCar, Integer> {
    List<FavoriteCar> getAllFavoriteCarsByUserID(@Param("userID") Integer userID) ;
}
