package be.thomasmore.autoedgeservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class FavoriteCar {
    private int id;
    private String carID;
    private String userID;
	private String make;
	private String model;

    public FavoriteCar(int id, String carID, String userID, String make, String model) {
        this.carID = carID;
        this.userID = userID;
        this.id = id;
        this.make = make;
        this.model = model;
    }
    public FavoriteCar(int id, String carID, String userID) {
        this.carID = carID;
        this.userID = userID;
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCarID() {
        return carID;
    }

    public void setCarID(String carID) {
        this.carID = carID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }
}
