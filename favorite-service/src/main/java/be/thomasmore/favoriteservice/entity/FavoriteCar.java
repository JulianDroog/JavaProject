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

    @Column(name = "carId")
    private String carId;

    @Column(name = "userId")
    private String userId;

    @Column(name = "make")
    private String make;

    @Column(name = "model")
    private String model;

    @Column(name = "type")
    private String type;

    @Column(name = "year")
    private int year;
}
