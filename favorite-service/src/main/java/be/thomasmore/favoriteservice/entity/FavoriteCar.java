package be.thomasmore.favoriteservice.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name="favoriteCar")
@Data
@NoArgsConstructor
public class FavoriteCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "carID")
    private String carID;

    @Column(name = "userID")
    private String userID;

    @Column(name = "make")
    private String make;

    @Column(name = "model")
    private String model;
}
